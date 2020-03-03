/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { getPlatform } from '@moduware/lit-utils';

import ThemePlayer from '../lib/ThemePlayer'
import CandleFlickerTheme from '../themes/CandleFlickerTheme';
import PoliceTheme from '../themes/PoliceTheme';
import StrobeTheme from '../themes/StrobeTheme';
import SOSTheme from '../themes/SOSTheme';
import MeditationTheme from '../themes/MeditationTheme';
import DiscoTheme from '../themes/DiscoTheme';
import RomanceTheme from '../themes/RomanceTheme';
import StudyTheme from '../themes/StudyTheme';
import CommandBufferFilter from '../lib/CommandBufferFilter';
import { isSameColor, adjustColor, setRgbColorWithTemperatureProtection as setRgbColor } from '../utils';
import IosDeviceDetection from '../lib/IosDeviceDetection';
import PowerState from '../enums/PowerState';
import Color from '../../node_modules/color/index.js';
import { registerTranslateConfig, use, translate, get } from "@appnest/lit-translate";

const commandFilter = new CommandBufferFilter();
commandFilter.start();

const candleFlickerTheme = new CandleFlickerTheme(commandFilter);
const policeTheme = new PoliceTheme(commandFilter);
const strobeTheme = new StrobeTheme(commandFilter);
const sosTheme = new SOSTheme(commandFilter);
const meditationTheme = new MeditationTheme(commandFilter);
const discoTheme = new DiscoTheme(commandFilter);
const romanceTheme = new RomanceTheme(commandFilter);
const studyTheme = new StudyTheme(commandFilter);


const themePlayer = new ThemePlayer();
themePlayer.addTheme('CandleFlicker', candleFlickerTheme);
themePlayer.addTheme('Police', policeTheme);
themePlayer.addTheme('Strobe', strobeTheme);
themePlayer.addTheme('SOS', sosTheme);
themePlayer.addTheme('Meditation', meditationTheme);
themePlayer.addTheme('Disco', discoTheme);
themePlayer.addTheme('Romance', romanceTheme);
themePlayer.addTheme('Study', studyTheme);


export const GET_PLATFORM = 'GET_PLATFORM';
export const UPDATE_PAGE = 'UPDATE_PAGE';
export const MODUWARE_API_READY = 'MODUWARE_API_READY';
export const LOAD_LANGUAGE_TRANSLATION = 'LOAD_LANGUAGE_TRANSLATION';
export const TOGGLE_LEDS_STATE = 'TOGGLE_LEDS_STATE';
export const THEME_TOGGLED = 'THEME_TOGGLED';
export const CURRENT_UI_COLOR_CHANGED = 'CURRENT_UI_COLOR_CHANGED';
export const CURRENT_COLOR_CHANGED = 'CURRENT_COLOR_CHANGED';
export const MAIN_LIGHT_STATE_CHANGED = 'MAIN_LIGHT_STATE_CHANGED';
export const LOCK_TOGGLED = 'LOCK_TOGGLED';
export const FLASH_TOGGLED = 'FLASH_TOGGLED';
export const LIGHTNESS_CHANGED = 'LIGHTNESS_CHANGED';
export const UPDATE_HEADER_TITLE = 'UPDATE_HEADER_TITLE';

// This is a fix to iOS not auto connecting and not finding any devices
export const initializeModuwareApiAsync = () => async dispatch => {
	let promise = new Promise((resolve, reject) => {
		if (typeof Moduware === 'undefined') {
			document.addEventListener('WebViewApiReady', resolve);
		} else {
			resolve();
		}
	});

	await promise;
	dispatch(moduwareApiReady());
}

export const getPlatformInfo = () => {
	var platform = getPlatform();
	return {
		type: GET_PLATFORM,
		platform
	};
}

export const moduwareApiReady = () => async dispatch => {

	dispatch({ type: MODUWARE_API_READY });
	dispatch(loadLanguageTranslation());
	Moduware.API.addEventListener('HardwareBackButtonPressed', () => {
		dispatch(hardwareBackButtonPressed());
	});
}

export const navigate = (path) => (dispatch) => {
	const page = path === '/' ? 'home-page' : path.slice(1);
	dispatch(loadPage(page));
};

export const loadLanguageTranslation = () => async dispatch => {
	dispatch({ type: LOAD_LANGUAGE_TRANSLATION, language: Moduware.Arguments.language });
}

const loadPage = (page) => (dispatch) => {
	switch (page) {
		case 'home-page':
			import('../components/home-page.js').then(() => {
				dispatch(updateHeaderTitle(get('home-page.title')));
			});
			break;
		case 'pallet-page':
			import('../components/pallet-page.js').then(() => {
				dispatch(updateHeaderTitle(get('pallet-page.title')));
			});
			break;
		case 'wheel-page':
			import('../components/wheel-page.js').then(() => {
				dispatch(updateHeaderTitle(get('wheel-page.title')));
			});
			break;
		case 'themes-page':
			import('../components/themes-page.js').then(() => {
				dispatch(updateHeaderTitle(get('themes-page.title')));
			});
			break;
		default:
			page = 'error-page';
			import('../components/error-page.js').then(() => {
				dispatch(updateHeaderTitle('error'));
			});
	}

	dispatch(updatePage(page));
};

const updatePage = (page) => {
	return {
		type: UPDATE_PAGE,
		page
	};
};

export const headerBackButtonClicked = () => (dispatch, getState) => {
	if (getState().app.page === 'pallet-page' || getState().app.page === 'wheel-page' || getState().app.page === 'themes-page' || getState().app.page === 'error-page') {
		dispatch(navigate('/home-page'))
	} else {
		if (getState().app.apiReady) {
			Moduware.API.Exit();
		}
	}
};

export const hardwareBackButtonPressed = () => (dispatch, getState) => {
	if (Moduware) {
		if (getState().app.page === 'pallet-page' || getState().app.page === 'wheel-page' || getState().app.page === 'themes-page' || getState().app.page === 'error-page') {
			dispatch(navigate('/home-page'))
		} else {
			Moduware.API.Exit();
		}
	}
}

export const toggleTheme = (newTheme) => (dispatch, getState) => {

	if (newTheme === '') {
		themePlayer.stop();
		dispatch({ type: THEME_TOGGLED, currentTheme: null });

	} else {
		if (getState().app.currentTheme === null) {

			// if theme is toggled, we switch off the main light
			// to make sure that theme and main light don't conflict
			if (getState().app.ledsState === PowerState.On) {
				dispatch(switchOffMainLight());
			}

			themePlayer.play(newTheme);
			dispatch({ type: THEME_TOGGLED, currentTheme: newTheme });

			// if the current theme is equal to the new theme
			// it means we trying to stop theme playing
		} else if (getState().app.currentTheme === newTheme) {
			themePlayer.stop();
			dispatch({ type: THEME_TOGGLED, currentTheme: null });

		} else if (getState().app.currentTheme !== newTheme) {

			// if theme is toggled, we switch off the main light
			// to make sure that theme and main light don't conflict
			if (getState().app.ledsState === PowerState.On) {
				dispatch(switchOffMainLight());
			}
			themePlayer.play(newTheme);
			dispatch({ type: THEME_TOGGLED, currentTheme: newTheme });
		}
	}
}

export const toggleLock = () => (dispatch, getState) => {
	if (getState().app.lockState === PowerState.On) {
		dispatch({ type: LOCK_TOGGLED, state: PowerState.Off })

		// if we are disabling the lock then we must close the main light if it's on
		if (getState().app.ledsState === PowerState.On) {
			dispatch(switchOffMainLight());
		}
	} else {
		dispatch({ type: LOCK_TOGGLED, state: PowerState.On })
	}
}

export const toggleMainLight = () => (dispatch, getState) => {
	if (getState().app.ledsState === PowerState.On) {
		dispatch(switchOffMainLight());
	} else {
		dispatch(switchOnMainLight());
	}
}

export const changeCurrentUiColor = color => (dispatch, getState) => {
	dispatch({ type: CURRENT_UI_COLOR_CHANGED, color: color });
	dispatch({ type: CURRENT_COLOR_CHANGED, color: color.moduleColor });

	// if the main light is On then we call switchOnMainLight to make sure that
	// the new color is reflected to the main light
	if (getState().app.ledsState === PowerState.On) {
		dispatch(switchOnMainLight());
	}
}

export const switchOnMainLight = () => (dispatch, getState) => {

	// checking if the current page is the pallet page and making sure that
	// to set current color equal to the ui color (one of 5 sample colors in pallet page)
	if (getState().app.page === 'pallet-page') {
		dispatch({ type: CURRENT_COLOR_CHANGED, color: Color(getState().app.currentUiColorName) });
	}

	// we check for the current theme, if it is not null then we have
	// to stop it so it don't conflict with the main light
	if (getState().app.currentTheme !== null) {
		dispatch(toggleTheme(''));
	}

	let adjustedColor = adjustColor(getState().app.currentColor, getState().app.lightness);
	const [r, g, b] = [adjustedColor.red(), adjustedColor.green(), adjustedColor.blue()];
	setRgbColor(commandFilter, r, g, b);
	dispatch({ type: MAIN_LIGHT_STATE_CHANGED, state: PowerState.On });
}

export const switchOffMainLight = () => dispatch => {
	setRgbColor(commandFilter, 0, 0, 0);
	dispatch({ type: MAIN_LIGHT_STATE_CHANGED, state: PowerState.Off });
}

const maxFlashLedBrightness = 4000;

export const toggleRightFlash = () => (dispatch, getState) => {

	// we get the state of the left flash and keep it as is whitout changing the brightness
	var leftFlashBrightness = getState().app.flashLedLeftState === PowerState.On ? maxFlashLedBrightness : 0;

	// here we toggle the brightness of the right flash
	var rightFlashBrightness = getState().app.flashLedRightState === PowerState.On ? 0 : maxFlashLedBrightness;
	dispatch(toggleFlashes(leftFlashBrightness, rightFlashBrightness));
}

export const toggleLeftFlash = () => (dispatch, getState) => {

	// we get the state of the right flash and keep it as is whitout changing the brightness
	var rightFlashBrightness = getState().app.flashLedRightState === PowerState.On ? maxFlashLedBrightness : 0;

	// here we toggle the brightness of the left flash
	var leftFlashBrightness = getState().app.flashLedLeftState === PowerState.On ? 0 : maxFlashLedBrightness;
	dispatch(toggleFlashes(leftFlashBrightness, rightFlashBrightness));
}

export const toggleFlashes = (left, right) => dispatch => {
	if (left === 0 && right === 0) {
		Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'TurnOffFlashs', []);
	} else {
		Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'SetFlashes', [left, right]);
	}
	dispatch({
		type: FLASH_TOGGLED,
		leftState: left === 0 ? PowerState.Off : PowerState.On,
		rightState: right === 0 ? PowerState.Off : PowerState.On
	});
}

export const changeWheelColor = (color) => (dispatch, getState) => {

	dispatch({ type: CURRENT_COLOR_CHANGED, color: color });

	if (getState().app.ledsState === PowerState.On) {
		dispatch(switchOnMainLight());
	}
}

export const changeLightness = lightness => (dispatch, getState) => {

	dispatch({ type: LIGHTNESS_CHANGED, lightness: lightness });

	if (getState().app.ledsState === PowerState.On) {
		dispatch(switchOnMainLight());
	}
}

export const updateHeaderTitle = headerTitle => {
	return {
		type: UPDATE_HEADER_TITLE,
		headerTitle
	};
};
