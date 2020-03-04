/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html, css } from 'lit-element';
import { PageViewElement } from './page-view-element.js';
import { navigate } from '../actions/app.js';
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { ResetStyles } from '../vendor/reset.css.js';
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
import app from '../reducers/app.js';
import './icons.js';
import { registerTranslateConfig, use, translate, get, getPlatformInfo } from "@appnest/lit-translate";
import * as translation from '../translations/language.js';
import predefinedColors from '../predefined-colors.js'


class HomePage extends connect(store)(PageViewElement) {

	static get properties() {
		return {
      platform: {
				type: String,
				reflect: true
			},
			_page: { type: String },
			_language: { type: String }
		};
	}

	static get styles() {
		return [
      ResetStyles,
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
		];
	}

	updated(changedProperties) {
		if (changedProperties.has('_language')) {
			use(this._language);
		}
		console.log('heloo there form home-page.js', predefinedColors);
	}

	async connectedCallback() {
		registerTranslateConfig({
			loader: (lang) => Promise.resolve(translation[lang])
		});

		super.connectedCallback();
	}

	render() {
		return html`
			<div data-color="white" id="wrapper" class="wrapper">
				<div class="page page__selector">
					<h1 class="page__selector__title">${translate('home-page.modes')}</h1>
					<ul class="modes-list">
						<li class="modes-list-item" @click="${() => store.dispatch(navigate('/pallet-page'))}">
							<svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="modes-list-item__icon">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g transform="translate(-33.000000, -148.000000)" fill="#000000">
											<g transform="translate(0.000000, 119.000000)">
												<g transform="translate(33.000000, 29.000000)">
													<path d="M12,0 C5.33333333,0 0,5.33333333 0,12 C0,18.6666667 5.33333333,24 12,24 C13.0666667,24 14,23.0666667 14,22 C14,21.4666667 13.8666667,21.0666667 13.4666667,20.6666667 C13.2,20.2666667 12.9333333,19.8666667 12.9333333,19.3333333 C12.9333333,18.2666667 13.866719,17.3333333 14.9333333,17.3333333 L17.3333333,17.3333333 C21.0666667,17.3333333 24,14.4 24,10.6666667 C24,4.8 18.6666667,0 12,0 Z M4.2,12 C3.24,12 2.4,11.16 2.4,10.2 C2.4,9.24 3.24,8.4 4.2,8.4 C5.16,8.4 6,9.24 6,10.2 C6,11.16 5.16,12 4.2,12 Z M9,6 C8.04,6 7.2,5.16 7.2,4.2 C7.2,3.24 8.04,2.4 9,2.4 C9.96,2.4 10.8,3.24 10.8,4.2 C10.8,5.16 9.96,6 9,6 Z M15,6 C14.04,6 13.2,5.16 13.2,4.2 C13.2,3.24 14.04,2.4 15,2.4 C15.96,2.4 16.8,3.24 16.8,4.2 C16.8,5.16 15.96,6 15,6 Z M18.6,12 C17.64,12 16.8,11.16 16.8,10.2 C16.8,9.24 17.64,8.4 18.6,8.4 C19.56,8.4 20.4,9.24 20.4,10.2 C20.4,11.16 19.56,12 18.6,12 Z"></path>
												</g>
											</g>
										</g>
									</g>
							</svg>
							${translate('pallet-page.title')}
							<span class="modes-list-item__description">${translate('pallet-page.description')}</span>
						</li>
						<li class="modes-list-item" @click="${() => store.dispatch(navigate('/wheel-page'))}">
							<svg width="23px" height="23px" viewBox="0 0 23 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="modes-list-item__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-34.000000, -229.000000)">
										<g transform="translate(0.000000, 200.000000)">
											<g transform="translate(32.000000, 26.000000)">
												<polygon points="0 0 29 0 29 29 0 29"></polygon>
												<path d="M24.0245833,6.80291667 L21.1970833,3.97541667 C20.7258333,3.50416667 19.9645833,3.50416667 19.4933333,3.97541667 L15.7233333,7.74541667 L13.39125,5.4375 L11.6875,7.14125 L13.4033333,8.85708333 L2.625,19.6354167 L2.625,25.375 L8.36458333,25.375 L19.1429167,14.5966667 L20.85875,16.3125 L22.5625,14.60875 L20.2425,12.28875 L24.0125,8.51875 C24.4958333,8.03541667 24.4958333,7.27416667 24.0245833,6.80291667 L24.0245833,6.80291667 Z M7.36166667,22.9583333 L5.04166667,20.6383333 L14.7808333,10.8991667 L17.1008333,13.2191667 L7.36166667,22.9583333 L7.36166667,22.9583333 Z" fill="#000000"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
							${translate('wheel-page.title')}
							<span class="modes-list-item__description">${translate('wheel-page.description')}</span>
						</li>
						<li class="modes-list-item" @click="${() => store.dispatch(navigate('/themes-page'))}">
							<svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="modes-list-item__icon">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g transform="translate(-37.000000, -313.000000)" fill="#000000">
											<g transform="translate(0.000000, 281.000000)">
												<g transform="translate(34.000000, 29.000000)">
													<path d="M3,13 L11,13 L11,3 L3,3 L3,13 L3,13 Z M3,21 L11,21 L11,15 L3,15 L3,21 L3,21 Z M13,21 L21,21 L21,11 L13,11 L13,21 L13,21 Z M13,3 L13,9 L21,9 L21,3 L13,3 L13,3 Z"></path>
												</g>
											</g>
										</g>
									</g>
							</svg>
							${translate('themes-page.title')}
							<span class="modes-list-item__description">${translate('themes-page.description')}</span>
						</li>
					</ul>
				</div>
			</div><!-- /.page__selector -->
    `;
	}

	stateChanged(state) {
    this.platform = state.app.platform;
		this._page = state.app.page;
		this._language = state.app.language;
	}

}

window.customElements.define('home-page', HomePage);
