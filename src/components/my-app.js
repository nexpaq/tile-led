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
import { navigate, headerBackButtonClicked, initializeModuwareApiAsync, loadLanguageTranslation } from '../actions/app.js';
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
			appTitle: { type: String },
			_page: { type: String },
			_language: { type: String },
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
			Variables
			// css`
      //   :host {
      //     overflow-y: scroll;
      //     position: absolute;
      //     width: 100%;
      //     height: 100%;
      //     box-sizing: border-box;
      //   }

      //   :host {
      //     padding-top: 55px;
      //     font-family: Roboto;
      //     /*height: calc(100vh - 55px);*/
      //   }
				
      //   :host([platform='ios']) {
      //     padding-top: 44px;
			// 		/*height: calc(100vh - 44px);*/
			// 		font-family: -apple-system, 'SF UI Text', 'Helvetica Neue', Helvetica, Arial, sans-serif;
      //   }

      //   :host([platform='android']) moduware-header {
      //     box-shadow: none;
      //   }

      //   moduware-header {
      //     position: absolute;
      //   }


      //   :host {
      //     --moduware-brand-color: #d02e3d;
      //     --item-container-z-index: 0; /* css variable for list-item .container z-index */

      //     display: flex;
      //     flex-direction: column;
      //     justify-content: stretch;
      //   }


      //   [main-title] {
      //     font-family: 'Pacifico';
      //     text-transform: lowercase;
      //     font-size: 30px;
      //     /* In the narrow layout, the toolbar is offset by the width of the
      //     drawer button, and the text looks not centered. Add a padding to
      //     match that button */
      //     padding-right: 44px;
      //   }

      //   /* Workaround for IE11 displaying <main> as inline */
      //   main {
      //     display: flex;
      //   }

      //   .main-content {
      //     height: 100%;
      //     flex-grow: 1;
      //     /* box-sizing: border-box;
      //     -moz-box-sizing: border-box;
      //     -webkit-box-sizing: border-box; */
      //     /*margin-top: 72px;*/
      //   }

      //   :host([platform='ios']) .main-content {
			// 		background-color: #F9F9F9 !important;
      //   }
        
      //   :host([platform='android']) .main-content {
			// 		background-color: #F2F2F2 !important;
			// 	}

      // /*.page {
      //     display: none;
      //   }*/
      //   .page {
      //     background-color: white;
      //   }

      //   .page[active] {
      //     display: flex;
      //   }

      // `
		];
	}

	render() {
		return html`
      <!-- Webview Header -->
      <moduware-header	
        @back-button-click="${() => store.dispatch(headerBackButtonClicked())}"
				title="${translate('home-page.title')}">
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
	}

	updated(changedProperties) {
		if (changedProperties.has('_page')) {
		}

		if (changedProperties.has('_language')) {
			use(this._language);
		}
	}

	stateChanged(state) {
		this._page = state.app.page;
		this._language = state.app.language;
	}
}

window.customElements.define('my-app', MyApp);
