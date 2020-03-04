/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css } from 'lit-element';
import { setPassiveTouchGestures } from '@polymer/polymer/lib/utils/settings.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { navigate, headerBackButtonClicked, initializeModuwareApiAsync, loadLanguageTranslation, updateHeaderTitle, getPlatformInfo } from '../actions/app.js';
import './icons.js';
import 'webview-tile-header/webview-tile-header'
import { registerTranslateConfig, use, translate, get } from "@appnest/lit-translate";
import * as translation from '../translations/language.js';

import {
	Fonts,
	Global,
	MainScreen,
	ModeSelectorScreen,
	ModeThemesScreen,
	BrightnessControl,
	ColorControl,
	FlashControl,
	LedButton,
	ModelListItem,
	SwitchControl,
	ThemeButton,
	Wheel,
	Variables
} from './shared-styles.js';

class MyApp extends connect(store)(LitElement) {

	static get properties() {
		return {
      platform: {
				type: String,
				reflect: true
			},
			appTitle: { type: String },
			_headerTitle: { type: String },
			_page: { type: String },
			_language: { type: String },
			_currentUiColorName: { type: String },
		};
	}

	static get styles() {
		return [
			Fonts,
			Global,
			MainScreen,
			ModeSelectorScreen,
			ModeThemesScreen,
			BrightnessControl,
			ColorControl,
			FlashControl,
			LedButton,
			ModelListItem,
			SwitchControl,
			ThemeButton,
			Wheel,
			Variables,
			css`
        :host {
          display: flex;
          height: 100%;

          --app-drawer-width: 256px;

          --app-primary-color: #E91E63;
          --app-secondary-color: #293237;
          --app-dark-text-color: var(--app-secondary-color);
          --app-light-text-color: white;
          --app-section-even-color: #f7f7f7;
          --app-section-odd-color: white;

          --app-header-background-color: transparent;
          --app-header-text-color: var(--app-dark-text-color);
          --app-header-selected-color: var(--app-primary-color);

          --app-drawer-background-color: var(--app-secondary-color);
          --app-drawer-text-color: var(--app-light-text-color);
          --app-drawer-selected-color: #78909C;
        }

        moduware-header {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          text-align: center;
          background-color: var(--app-header-background-color);
          color: var(--app-header-text-color);
          /*border-bottom: 1px solid #eee;*/
          border: none;
          box-shadow: none;
          --back-button-color: black;
        }

        .toolbar-top {
          background-color: var(--app-header-background-color);
        }

        [main-title] {
          font-family: 'Pacifico';
          text-transform: lowercase;
          font-size: 30px;
          /* In the narrow layout, the toolbar is offset by the width of the
          drawer button, and the text looks not centered. Add a padding to
          match that button */
          padding-right: 44px;
        }

        .toolbar-list {
          display: none;
        }

        .toolbar-list > a {
          display: inline-block;
          color: var(--app-header-text-color);
          text-decoration: none;
          line-height: 30px;
          padding: 4px 24px;
        }

        .toolbar-list > a[selected] {
          color: var(--app-header-selected-color);
          border-bottom: 4px solid var(--app-header-selected-color);
        }

        .menu-btn {
          background: none;
          border: none;
          fill: var(--app-header-text-color);
          cursor: pointer;
          height: 44px;
          width: 44px;
        }

        .drawer-list {
          box-sizing: border-box;
          width: 100%;
          height: 100%;
          padding: 24px;
          background: var(--app-drawer-background-color);
          position: relative;
        }

        .drawer-list > a {
          display: block;
          text-decoration: none;
          color: var(--app-drawer-text-color);
          line-height: 40px;
          padding: 0 24px;
        }

        .drawer-list > a[selected] {
          color: var(--app-drawer-selected-color);
        }

        /* Workaround for IE11 displaying <main> as inline */
        main {
          display: block;
        }

        .main-content {
          display: flex;
          box-sizing: border-box;
          /*min-height: 100vh;*/
          min-height: auto;
          flex-grow: 1;
        }

      :host([platform="android"]) .main-content {
        padding-top: 55px;
      }

      :host([platform="ios"]) .main-content {
        padding-top: 44px;
      }

        .page {
          display: none;
          flex-grow: 1;
          position: relative;
        }

        .page[active] {
          display: block;
        }

        footer {
          padding: 24px;
          background: var(--app-drawer-background-color);
          color: var(--app-drawer-text-color);
          text-align: center;
        }

        /* Wide layout: when the viewport width is bigger than 460px, layout
        changes to a wide layout */
        @media (min-width: 460px) {
          .toolbar-list {
            display: block;
          }

          .menu-btn {
            display: none;
          }

          .main-content {
            padding-top: 107px;
          }

          /* The drawer button isn't shown in the wide layout, so we don't
          need to offset the title */
          [main-title] {
            padding-right: 0px;
          }
        }
      `
		];
	}

	render() {
		return html`
      <!-- Webview Header -->
      <moduware-header
        @back-button-click="${() => store.dispatch(headerBackButtonClicked())}"
        title="${this._headerTitle}"
        style="color: ${this._page != 'pallet-page' || this._currentUiColorName == 'white' ? 'black' : 'white'}; --back-button-color: ${this._page != 'pallet-page' || this._currentUiColorName == 'white' ? 'black' : 'white'};" >
			</moduware-header>
			<!-- Main content -->
			<main role="main" class="main-content">
					<home-page class="page" ?active="${this._page === 'home-page'}"></home-page>
					<pallet-page class="page" ?active="${this._page === 'pallet-page'}"></pallet-page>
					<wheel-page class="page" ?active="${this._page === 'wheel-page'}"></wheel-page>
					<themes-page class="page" ?active="${this._page === 'themes-page'}"></themes-page>
					<error-page class="page" ?active="${this._page === 'error-page'}"></error-page>
			</main>
    `;
	}

	constructor() {
		super();
		// To force all event listeners for gestures to be passive.
		// See https://www.polymer-project.org/3.0/docs/devguide/settings#setting-passive-touch-gestures
    store.dispatch(getPlatformInfo());
		setPassiveTouchGestures(true);
	}

	// Load the initial language and mark that the strings has been loaded.
	async connectedCallback() {

		/** this is to register the language translation loader from lit-translate */
		registerTranslateConfig({
			loader: (lang) => Promise.resolve(translation[lang])
		});

		super.connectedCallback();
	}

	firstUpdated() {
    store.dispatch(navigate("/home-page"));
		store.dispatch(initializeModuwareApiAsync());
    store.dispatch(updateHeaderTitle(get('home-page.title')));
	}

	updated(changedProperties) {
		if (changedProperties.has('_page')) {
		}

		if (changedProperties.has('_language')) {
			use(this._language);
		}
	}

	stateChanged(state) {
    this.platform = state.app.platform;
		this._page = state.app.page;
		this._language = state.app.language;
		this._headerTitle = state.app.headerTitle;
		this._currentUiColorName = state.app.currentUiColorName;
	}
}

window.customElements.define('my-app', MyApp);
