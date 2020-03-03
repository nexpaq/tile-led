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
import { navigate, changeCurrentUiColor, switchOnMainLight, switchOffMainLight, toggleLock, toggleMainLight, toggleRightFlash, toggleLeftFlash } from '../actions/app.js';
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
import { addListener } from '@polymer/polymer/lib/utils/gestures.js';
import predefinedColors from '../predefined-colors.js'
import PowerState from '../enums/PowerState';

class PalletPage extends connect(store)(PageViewElement) {

	render() {
		return html`
		<div style="background-color: ${this._currentUiColor}" id="wrapper" class="wrapper" data-color="${this._currentUiColorName}">
			<div class="page page__controls ">
        <div class="simple-controls ">
          <div class="color-control">
            <button style="background-color: rgb(238, 54, 54);" @click="${() => store.dispatch(changeCurrentUiColor(predefinedColors.red))}"></button>
            <button style="background-color: rgb(1, 207, 88);" @click="${() => store.dispatch(changeCurrentUiColor(predefinedColors.green))}"></button>
            <button style="background-color: rgb(17, 169, 255);" @click="${() => store.dispatch(changeCurrentUiColor(predefinedColors.blue))}"></button>
            <button style="background-color: rgb(252, 187, 64);" @click="${() => store.dispatch(changeCurrentUiColor(predefinedColors.yellow))}"></button>
            <button style="background-color: rgb(255, 255, 255);" @click="${() => store.dispatch(changeCurrentUiColor(predefinedColors.white))}"></button>
          </div>
        </div> <!-- /.simple-controls -->
        <div class="shared-controls">
					<button class="led-button ${this._mainLightState === PowerState.On ? 'active' : ''}" id="power-button" @click="${() => this._powerButtonClickHandler()}">
						<svg width="128px" height="128px" viewBox="0 0 128 128" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
							<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
									<g transform="translate(-116.000000, -256.000000)">
											<g transform="translate(116.000000, 256.000000)">
													<circle stroke="#000000" stroke-width="5" cx="64" cy="64" r="61.5" class="button-circle"></circle>
													<path d="M79.5,45.75 C85.166695,50.5833575 88,56.66663 88,64 C88,70.6667 85.66669,76.33331 81,81 C76.33331,85.66669 70.6667,88 64,88 C57.3333,88 51.66669,85.66669 47,81 C42.33331,76.33331 40,70.6667 40,64 C40,56.66663 42.833305,50.5833575 48.5,45.75 L52.25,49.5 C47.6666437,53.2500187 45.375,58.0833037 45.375,64 C45.375,69.1666925 47.1874819,73.5624819 50.8125,77.1875 C54.4375181,80.8125181 58.8333075,82.625 64,82.625 C69.1666925,82.625 73.5624819,80.8125181 77.1875,77.1875 C80.8125181,73.5624819 82.625,69.1666925 82.625,64 C82.625,58.0833037 80.3333563,53.291685 75.75,49.625 L79.5,45.75 Z M66.625,40 L66.625,66.625 L61.375,66.625 L61.375,40 L66.625,40 Z" fill="#000000" class="button-path"></path>
											</g>
									</g>
							</g>
						</svg>
					</button>
          <div class="flashcontrol">
            <button class="flashcontrol__flashbutton ${this._leftFlashState === PowerState.On ? 'flashcontrol__flashbutton--active' : ''}"
										@click="${() => store.dispatch(toggleLeftFlash())}"></button>
            <div class="onoffswitch">
							<input type="checkbox" class="checkbox"
										 ?checked="${this._lockState === PowerState.On}"
										 @click="${() => store.dispatch(toggleLock())}" id="myonoffswitch1">
              <label class="switch-label" for="myonoffswitch1"></label>
            </div>
            <button class="flashcontrol__flashbutton ${this._rightFlashState === PowerState.On ? 'flashcontrol__flashbutton--active' : ''}"
										@click="${() => store.dispatch(toggleRightFlash())}"></button>
          </div>
        </div> <!-- /.shared-controls -->
      </div> <!-- /.page__controls -->
		</div>
    `;
	}

	static get properties() {
		return {
			_page: { type: String },
			_language: { type: String },
			_currentUiColor: { type: String },
			_currentUiColorName: { type: String },
			_mainLightState: { type: Boolean },
			_lockState: { type: Boolean },
			_rightFlashState: { type: Boolean },
			_leftFlashState: { type: Boolean }
		};
	}

	static get styles() {
		return [
			Variables,
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
      css`
      #wrapper {
        top: -55px;
        height: calc(100% + 55px);
      }`
		];
	}

	firstUpdated() {
		super.firstUpdated();
		addListener(this.shadowRoot.getElementById('power-button'), 'down', e => this._powerButtonPressedHandler(e));
		addListener(this.shadowRoot.getElementById('power-button'), 'up', e => this._powerButtonReleasedHandler(e));
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

	_powerButtonClickHandler() {
		if (this._lockState === PowerState.On) {
			store.dispatch(toggleMainLight());
		}
	}

	_powerButtonPressedHandler(e) {
		if (this._lockState === PowerState.Off) {
			store.dispatch(switchOnMainLight());
		}
	}

	_powerButtonReleasedHandler(e) {
		if (this._lockState === PowerState.Off) {
			store.dispatch(switchOffMainLight());
		}
	}

	stateChanged(state) {
		this._page = state.app.page;
		this._language = state.app.language;
		this._currentUiColor = state.app.currentUiColor;
		this._currentUiColorName = state.app.currentUiColorName;
		this._mainLightState = state.app.ledsState;
		this._lockState = state.app.lockState;
		this._leftFlashState = state.app.flashLedLeftState;
		this._rightFlashState = state.app.flashLedRightState;
	}
}

window.customElements.define('pallet-page', PalletPage);
