/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import PowerState from '../enums/PowerState';
import Color from '../../node_modules/color/index.js';
import predefinedColors from '../predefined-colors';

import {
	UPDATE_PAGE,
	MODUWARE_API_READY,
	LOAD_LANGUAGE_TRANSLATION,
	THEME_TOGGLED,
	CURRENT_UI_COLOR_CHANGED,
	CURRENT_COLOR_CHANGED,
	MAIN_LIGHT_STATE_CHANGED,
	LOCK_TOGGLED,
	FLASH_TOGGLED,
	LIGHTNESS_CHANGED,
	UPDATE_HEADER_TITLE,
  GET_PLATFORM
} from '../actions/app.js';

const INITIAL_STATE = {
	page: '',
	apiReady: false,
	language: 'en',
	ledsState: PowerState.Off,
	flashLedLeftState: PowerState.Off,
	flashLedRightState: PowerState.Off,
	lockState: PowerState.On,
	currentColor: Color('white'),
	currentUiColor: 'rgb(255, 255, 255)',
	currentUiColorName: 'white',
	currentTheme: null,
	lightness: 0, // -1 <= x <= 1,
	rgbTemperatureProtection: false,
	headerTitle: '',
  platform: ''
};

const app = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case MODUWARE_API_READY:
			return {
				...state,
				apiReady: true
			};
    case GET_PLATFORM:
			return {
				...state,
				platform: action.platform
			};
		case UPDATE_PAGE:
			return {
				...state,
				page: action.page
			};
		case LOAD_LANGUAGE_TRANSLATION:
			return {
				...state,
				language: action.language
			};
		case THEME_TOGGLED:
			return {
				...state,
				currentTheme: action.currentTheme
			};
		case CURRENT_UI_COLOR_CHANGED:
			return {
				...state,
				currentUiColor: action.color.uiColorString,
				currentUiColorName: action.color.uiColorName
			};
		case CURRENT_COLOR_CHANGED:
			return {
				...state,
				currentColor: action.color
			};
		case MAIN_LIGHT_STATE_CHANGED:
			return {
				...state,
				ledsState: action.state
			};
		case LOCK_TOGGLED:
			return {
				...state,
				lockState: action.state
			};
		case FLASH_TOGGLED:
			return {
				...state,
				flashLedLeftState: action.leftState,
				flashLedRightState: action.rightState
			};
		case LIGHTNESS_CHANGED:
			return {
				...state,
				lightness: action.lightness,
			};
		case UPDATE_HEADER_TITLE:
			return {
				...state,
				headerTitle: action.headerTitle
			};
		default:
			return state;
	}
};

export default app;
