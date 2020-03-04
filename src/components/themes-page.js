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
import { navigate, toggleTheme } from '../actions/app.js';
import { store } from '../store.js';
import { connect } from 'pwa-helpers/connect-mixin.js';
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
import { registerTranslateConfig, use, translate, get } from "@appnest/lit-translate";
import * as translation from '../translations/language.js';


class ThemesPage extends connect(store)(PageViewElement) {

	static get properties() {
		return {
			_page: { type: String },
			_language: { type: String },
			_currentTheme: { type: String }
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
      #wrapper {
        padding-top: 22px;
      }
      `
		];
	}

	updated(changedProperties) {
		if (changedProperties.has('_language')) {
			use(this._language);
		}
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
				<div class="page page__themes">
					<button class="theme-button ${this._currentTheme === 'CandleFlicker' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('CandleFlicker'))}">
						<div class="theme-button__icon-container">
							<svg width="29px" height="39px" viewBox="0 0 29 39" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-38.000000, -112.000000)" fill="#FFFFFF">
										<g transform="translate(10.000000, 92.000000)">
											<g transform="translate(21.000000, 19.000000)">
												<path d="M25.5133333,9.80041667 C25.5133333,13.49125 23.0945833,16.4833333 19.40375,16.4833333 C15.695,16.4833333 12.9,13.49125 12.9,9.80041667 L12.95375,9.15541667 C9.33458333,13.4554167 7.16666667,19.0275 7.16666667,25.0833333 C7.16666667,33.0025 13.5808333,39.4166667 21.5,39.4166667 C29.4191667,39.4166667 35.8333333,33.0025 35.8333333,25.0833333 C35.8333333,15.42625 31.1929167,6.80833333 24.1875,1.20041667 C25.5133333,7.16666667 25.5133333,5.94833333 25.5133333,9.80041667 Z M20.9804167,34.0416667 C17.79125,34.0416667 15.21125,31.5333333 15.21125,28.4158333 C15.21125,25.5133333 17.0925,23.4708333 20.2458333,22.8258333 C23.4170833,22.1808333 26.6958333,20.6579167 28.5233333,18.2033333 C29.2220833,20.5145833 29.5804167,22.95125 29.5804167,25.4416667 C29.5804167,30.1895833 25.7283333,34.0416667 20.9804167,34.0416667 L20.9804167,34.0416667 Z"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.candle')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Romance' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Romance'))}">
						<div class="theme-button__icon-container">
							<svg width="31px" height="29px" viewBox="0 0 31 29" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-165.000000, -136.000000)" fill="#FFFFFF">
										<g transform="translate(140.000000, 110.000000)">
											<g transform="translate(25.000000, 26.000000)">
												<path d="M15.2350427,28.3320602 L13.0259615,26.2940046 C5.17991453,19.0836111 0,14.3281481 0,8.49189815 C0,3.73643519 3.68688034,0 8.3792735,0 C11.0301709,0 13.5744231,1.250625 15.2350427,3.2269213 C16.8956624,1.250625 19.4399145,0 22.090812,0 C26.7832051,0 30.4700855,3.73643519 30.4700855,8.49189815 C30.4700855,14.3281481 25.2901709,19.0836111 17.4441239,26.3094444 L15.2350427,28.3320602 L15.2350427,28.3320602 Z"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.romance')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Meditation' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Meditation'))}">
						<div class="theme-button__icon-container">
							<svg width="35px" height="36px" viewBox="0 0 35 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-278.000000, -133.000000)" fill="#FFFFFF">
										<g transform="translate(255.000000, 110.000000)">
											<path d="M57.3139589,51.2024289 C57.4579479,51.5270863 57.5636623,51.8750513 57.6245659,52.24165 C57.6631639,52.4739845 57.6825613,52.7091034 57.6825613,52.9446223 C57.6825613,55.7396345 55.4167563,58.0054395 52.6217441,58.0054395 L28.0810022,58.0054395 C25.2859901,58.0054395 23.0201851,55.7396345 23.0201851,52.9446223 C23.0201851,52.208165 23.2060511,51.515119 23.5334336,50.909834 C22.7803494,49.9270911 22.8484417,48.5158995 23.7410757,47.610307 L36.2598197,34.9098267 C36.3870082,34.7807918 36.5247116,34.6684113 36.6702152,34.5727049 C36.9565681,34.3046711 37.2720157,34.0673403 37.6113078,33.8659626 C35.7991437,32.8904425 34.5675821,30.9774086 34.5675821,28.7770627 C34.5675821,25.5864791 37.1570736,23 40.3513732,23 C43.5456728,23 46.1351643,25.5864791 46.1351643,28.7770627 C46.1351643,30.9674851 44.9146862,32.8731813 43.1159214,33.8527068 C43.4820558,34.06764 43.8207282,34.3243165 44.125402,34.6161996 C44.2387698,34.6968596 44.3469604,34.7880222 44.4486256,34.8896874 L57.2566866,47.6977484 C58.2213316,48.6623934 58.2404223,50.2145305 57.3139589,51.2024289 Z M51.3394559,48.937594 L45.7971473,43.3952854 L45.7971473,49.8583454 L51.3394559,48.937594 Z M29.5059266,48.9707934 L34.9525391,49.8836272 L34.9525391,43.4451117 L29.5059266,48.9707934 Z"></path>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.meditation')}
					</button>
					<button class="theme-button ${this._currentTheme === 'SOS' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('SOS'))}">
						<div class="theme-button__icon-container">
							<svg width="36px" height="35px" viewBox="0 0 36 35" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
									<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
										<g transform="translate(-47.000000, -286.000000)" fill="#FFFFFF">
											<g transform="translate(24.000000, 262.000000)">
												<g transform="translate(20.000000, 20.000000)">
													<path d="M12.8625,6.965 L10.36,4.4625 C6.16,7.665 3.395,12.6 3.15,18.2 L6.65,18.2 C6.9125,13.5625 9.2925,9.5025 12.8625,6.965 L12.8625,6.965 Z M34.545,18.2 L38.045,18.2 C37.7825,12.6 35.0175,7.665 30.835,4.4625 L28.35,6.965 C31.885,9.5025 34.2825,13.5625 34.545,18.2 L34.545,18.2 Z M31.0975,19.075 C31.0975,13.7025 28.2275,9.205 23.2225,8.015 L23.2225,6.825 C23.2225,5.3725 22.05,4.2 20.5975,4.2 C19.145,4.2 17.9725,5.3725 17.9725,6.825 L17.9725,8.015 C12.95,9.205 10.0975,13.685 10.0975,19.075 L10.0975,27.825 L6.5975,31.325 L6.5975,33.075 L34.5975,33.075 L34.5975,31.325 L31.0975,27.825 L31.0975,19.075 L31.0975,19.075 Z M20.5975,38.325 C20.8425,38.325 21.07,38.3075 21.2975,38.255 C22.435,38.01 23.3625,37.24 23.8175,36.19 C23.9925,35.77 24.08,35.315 24.08,34.825 L17.08,34.825 C17.0975,36.75 18.655,38.325 20.5975,38.325 L20.5975,38.325 Z"></path>
												</g>
											</g>
										</g>
									</g>
							</svg>
						</div>
						${translate('themes.sos')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Study' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Study'))}">
						<div class="theme-button__icon-container">
							<svg width="42px" height="34px" viewBox="0 0 42 34" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-160.000000, -286.000000)" fill="#FFFFFF">
										<g transform="translate(140.000000, 262.000000)">
											<g transform="translate(18.000000, 18.000000)">
												<path d="M9.5,25.0875 L9.5,32.5875 L22.625,39.75 L35.75,32.5875 L35.75,25.0875 L22.625,32.25 L9.5,25.0875 L9.5,25.0875 Z M22.625,6 L2,17.25 L22.625,28.5 L39.5,19.29375 L39.5,32.25 L43.25,32.25 L43.25,17.25 L22.625,6 L22.625,6 Z"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.study')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Disco' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Disco'))}">
						<div class="theme-button__icon-container">
							<svg width="42px" height="42px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-275.000000, -282.000000)" fill="#FFFFFF">
										<g transform="translate(255.000000, 262.000000)">
											<g transform="translate(20.000000, 20.000000)">
												<path d="M16.45,14.39375 C15.3190625,14.39375 14.39375,15.3190625 14.39375,16.45 C14.39375,17.5809375 15.3190625,18.50625 16.45,18.50625 C17.5809375,18.50625 18.50625,17.5809375 18.50625,16.45 C18.50625,15.3190625 17.5809375,14.39375 16.45,14.39375 L16.45,14.39375 Z M16.45,22.61875 C15.3190625,22.61875 14.39375,23.5440625 14.39375,24.675 C14.39375,25.8059375 15.3190625,26.73125 16.45,26.73125 C17.5809375,26.73125 18.50625,25.8059375 18.50625,24.675 C18.50625,23.5440625 17.5809375,22.61875 16.45,22.61875 L16.45,22.61875 Z M10.28125,15.421875 C9.7055,15.421875 9.253125,15.87425 9.253125,16.45 C9.253125,17.02575 9.7055,17.478125 10.28125,17.478125 C10.857,17.478125 11.309375,17.02575 11.309375,16.45 C11.309375,15.87425 10.857,15.421875 10.28125,15.421875 L10.28125,15.421875 Z M16.45,29.815625 C15.87425,29.815625 15.421875,30.268 15.421875,30.84375 C15.421875,31.4195 15.87425,31.871875 16.45,31.871875 C17.02575,31.871875 17.478125,31.4195 17.478125,30.84375 C17.478125,30.268 17.02575,29.815625 16.45,29.815625 L16.45,29.815625 Z M10.28125,23.646875 C9.7055,23.646875 9.253125,24.09925 9.253125,24.675 C9.253125,25.25075 9.7055,25.703125 10.28125,25.703125 C10.857,25.703125 11.309375,25.25075 11.309375,24.675 C11.309375,24.09925 10.857,23.646875 10.28125,23.646875 L10.28125,23.646875 Z M16.45,11.309375 C17.02575,11.309375 17.478125,10.857 17.478125,10.28125 C17.478125,9.7055 17.02575,9.253125 16.45,9.253125 C15.87425,9.253125 15.421875,9.7055 15.421875,10.28125 C15.421875,10.857 15.87425,11.309375 16.45,11.309375 L16.45,11.309375 Z M24.675,14.39375 C23.5440625,14.39375 22.61875,15.3190625 22.61875,16.45 C22.61875,17.5809375 23.5440625,18.50625 24.675,18.50625 C25.8059375,18.50625 26.73125,17.5809375 26.73125,16.45 C26.73125,15.3190625 25.8059375,14.39375 24.675,14.39375 L24.675,14.39375 Z M24.675,11.309375 C25.25075,11.309375 25.703125,10.857 25.703125,10.28125 C25.703125,9.7055 25.25075,9.253125 24.675,9.253125 C24.09925,9.253125 23.646875,9.7055 23.646875,10.28125 C23.646875,10.857 24.09925,11.309375 24.675,11.309375 L24.675,11.309375 Z M30.84375,23.646875 C30.268,23.646875 29.815625,24.09925 29.815625,24.675 C29.815625,25.25075 30.268,25.703125 30.84375,25.703125 C31.4195,25.703125 31.871875,25.25075 31.871875,24.675 C31.871875,24.09925 31.4195,23.646875 30.84375,23.646875 L30.84375,23.646875 Z M30.84375,15.421875 C30.268,15.421875 29.815625,15.87425 29.815625,16.45 C29.815625,17.02575 30.268,17.478125 30.84375,17.478125 C31.4195,17.478125 31.871875,17.02575 31.871875,16.45 C31.871875,15.87425 31.4195,15.421875 30.84375,15.421875 L30.84375,15.421875 Z M20.5625,0 C9.212,0 0,9.212 0,20.5625 C0,31.913 9.212,41.125 20.5625,41.125 C31.913,41.125 41.125,31.913 41.125,20.5625 C41.125,9.212 31.913,0 20.5625,0 L20.5625,0 Z M20.5625,37.0125 C11.473875,37.0125 4.1125,29.651125 4.1125,20.5625 C4.1125,11.473875 11.473875,4.1125 20.5625,4.1125 C29.651125,4.1125 37.0125,11.473875 37.0125,20.5625 C37.0125,29.651125 29.651125,37.0125 20.5625,37.0125 L20.5625,37.0125 Z M24.675,29.815625 C24.09925,29.815625 23.646875,30.268 23.646875,30.84375 C23.646875,31.4195 24.09925,31.871875 24.675,31.871875 C25.25075,31.871875 25.703125,31.4195 25.703125,30.84375 C25.703125,30.268 25.25075,29.815625 24.675,29.815625 L24.675,29.815625 Z M24.675,22.61875 C23.5440625,22.61875 22.61875,23.5440625 22.61875,24.675 C22.61875,25.8059375 23.5440625,26.73125 24.675,26.73125 C25.8059375,26.73125 26.73125,25.8059375 26.73125,24.675 C26.73125,23.5440625 25.8059375,22.61875 24.675,22.61875 L24.675,22.61875 Z"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.disco')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Strobe' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Strobe'))}">
						<div class="theme-button__icon-container">
							<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-45.000000, -435.000000)" fill="#FFFFFF">
										<g transform="translate(24.000000, 414.000000)">
											<g transform="translate(20.000000, 20.000000)">
												<path d="M12.25,19.25 L1.75,19.25 L1.75,22.75 L12.25,22.75 L12.25,19.25 L12.25,19.25 Z M16.0475,13.58 L12.3375,9.87 L9.87,12.3375 L13.58,16.0475 L16.0475,13.58 L16.0475,13.58 Z M22.75,1.75 L19.25,1.75 L19.25,12.25 L22.75,12.25 L22.75,1.75 L22.75,1.75 Z M32.13,12.3375 L29.6625,9.87 L25.9525,13.58 L28.42,16.0475 L32.13,12.3375 L32.13,12.3375 Z M29.75,19.25 L29.75,22.75 L40.25,22.75 L40.25,19.25 L29.75,19.25 L29.75,19.25 Z M21,15.75 C18.095,15.75 15.75,18.095 15.75,21 C15.75,23.905 18.095,26.25 21,26.25 C23.905,26.25 26.25,23.905 26.25,21 C26.25,18.095 23.905,15.75 21,15.75 L21,15.75 Z M25.9525,28.42 L29.6625,32.13 L32.13,29.6625 L28.42,25.9525 L25.9525,28.42 L25.9525,28.42 Z M9.87,29.6625 L12.3375,32.13 L16.0475,28.42 L13.58,25.9525 L9.87,29.6625 L9.87,29.6625 Z M19.25,40.25 L22.75,40.25 L22.75,29.75 L19.25,29.75 L19.25,40.25 L19.25,40.25 Z"></path>
											</g>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.strobe')}
					</button>
					<button class="theme-button ${this._currentTheme === 'Police' ? 'theme-button--active' : ''}" @click="${() => store.dispatch(toggleTheme('Police'))}">
						<div class="theme-button__icon-container">
							<svg width="30px" height="36px" viewBox="0 0 30 36" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="theme-button__icon">
								<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-165.000000, -436.000000)" fill="#FFFFFF">
										<g transform="translate(140.000000, 414.000000)">
											<path d="M38.150417,22 L41.1851286,22 L41.1851286,27.0578527 L38.150417,27.0578527 L38.150417,22 Z M52.8541348,25.0347116 L55,27.1805768 L51.4235581,30.7570187 L49.2776929,28.6111535 L52.8541348,25.0347116 Z M27.1458652,25.0347116 L30.7223071,28.6111535 L28.5764419,30.7570187 L25,27.1805768 L27.1458652,25.0347116 Z M39.6677728,30.0925643 C46.6512101,30.0925643 52.3124045,35.7537588 52.3124045,42.737196 L52.3124045,51.3355456 L27.0231411,51.3355456 L27.0231411,42.737196 C27.0231411,35.7537588 32.6843355,30.0925643 39.6677728,30.0925643 Z M27.0231411,53.3586867 L52.3124045,53.3586867 L52.3124045,57.4049688 L27.0231411,57.4049688 L27.0231411,53.3586867 Z"></path>
										</g>
									</g>
								</g>
							</svg>
						</div>
						${translate('themes.police')}
					</button>
				</div>
			</div>
    `;
	}

	stateChanged(state) {
		this._page = state.app.page;
		this._language = state.app.language;
		this._currentTheme = state.app.currentTheme;
	}
}

window.customElements.define('themes-page', ThemesPage);
