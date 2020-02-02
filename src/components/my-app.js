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

class MyApp extends connect(store)(LitElement) {

	static get properties() {
		return {
			appTitle: { type: String },
			_page: { type: String },
			_language: { type: String },
		};
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
