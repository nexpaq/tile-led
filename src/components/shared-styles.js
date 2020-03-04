/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { css } from 'lit-element';

export const Fonts = css`
`;


export const Global = css`
	* {
		outline: none;
		-webkit-tap-highlight-color: rgba(0,0,0,0);
	}

	img {
		max-width: 100%;
	}

	body {
		font-family: var(--main-font);
	}

	button {
		color: inherit;
		font-size: inherit;
		font-family: var(--main-font);
		border: 0;
		padding: 0;
		background-color: transparent;
	}

	.hidden {
		display: none !important;
	}

	.unselectable {
		user-select: none;
	}

	.wrapper {
		position: absolute;
		top: 0; left: 0;
		overflow: hidden;
		width: 100%;
		height: 100%;
		transition: 1s opacity;
	}
`;

export const MainScreen = css`
	.wrapper {

	}

	.wrapper[data-color='white'] {
		color: var(--white);
	}

	.wrapper[data-color='red'] {
		color: var(--red);
	}

	.wrapper[data-color='green'] {
		color: var(--green);
	}

	.wrapper[data-color='blue'] {
		color: var(--blue);
	}

	.wrapper[data-color='yellow'] {
		color: var(--yellow);
	}

	.wrapper::before {
		content: '';
		display: block;
		position: fixed;
		height: 100vh;
		width: 100vw;
		top: 0;
		background-color: inherit;
	}

`;

export const ModeSelectorScreen = css`
	.page__selector {
		position: relative;
		color: black;
		font-family: Roboto, sans-serif;
	}

  /*:host([platform="android"]) .page__selector {
		padding-top: 55px;
	}

	:host([platform="ios"]) .page__selector {
		padding-top: 44px;
	}*/

	.page__selector__title {
		padding: 20px 17px;
		color: #333333;
		font-size: 14px;
		font-weight: 400;

	}

	:host([platform="ios"]) .page__selector__title {
		text-transform: uppercase;
		font-size: 13px;
		color: #6E6E70;
		padding-bottom: 10px;
	}


`;

export const ModeThemesScreen = css`
.page__themes {
  position: relative;
  color: black;
  font-family: Roboto, sans-serif;
}

/* wrap this in .ios-10-below class spicific rules where grid is not supported */
.wrapper.ios-10-below .page__themes {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.wrapper:not(.ios-10-below) .page__themes {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 30px;
}

  /*body.platform-android .page__themes {
  padding-top: calc(55px + 20px);
}

body.platform-ios .page__themes {
  padding-top: calc(44px + 20px);
}

.wrapper:not(.ios-10-below) .page__themes .theme-button {
  grid-column-start: span 1;
}

.wrapper.ios-10-below .page__themes .theme-button {
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: calc(32% - 10px);
  margin: 5px;
}


`;


export const Variables = css`
	body {
  --main-font: Roboto, Helvetica, Arial, sans-serif;

/* SIZES */
  --font-size: 16px;

/* COLORS */
  --hr-color: rgb(82, 80, 88);
  --text-color: rgb(255, 255, 255);
  --black: rgb(42, 42, 42);
  --red: rgb(238, 54, 54);
  --green: rgb(1, 207, 88);
  --blue: rgb(17, 169, 255);
  --yellow: rgb(252, 187, 64);
  --white: rgb(255, 255, 255);
}

`;
export const BrightnessControl = css`
	.brightness-control {
		position: absolute;
		top: 90%; left: 50%;
		transform: translateX(-50%) translateY(-50%);
		width: calc(100% - 16px * 2);
	}

.brightness-control__labels {
  display: flex;
  justify-content: space-between;
}

.brightness-control__label {
  font-size: 14px;
  color:#333333;
  font-weight:500;
}

.brightness-control__range-container {
  position: relative;
  height: 2px;
  margin-top: 15px;
  background: rgba(0, 0, 0, 0.26);

}

:host([platform="ios"]) .brightness-control__range-container {
  height: 1px;
  background: #979898;
}

:host([platform="ios"]) .brightness-control__range-container::before,
:host([platform="ios"]) .brightness-control__range-container::after {
  content: '';
  width: 1px;
  height: 5px;
  background-color: #979898;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

:host([platform="ios"]) .brightness-control__range-container::before {
  left: 0;
}

:host([platform="ios"]) .brightness-control__range-container::after {
  right: 0;
}

.brightness-control__range-track-filled {
  position: absolute;
  top: 0; left: 0;
  height: 100%;
  background-color: black;
  will-change: width;

}

:host([platform="ios"]) .brightness-control__range-track-filled {
  display: none;
}

.brightness-control__range-thumb {
  --thumb-size: 12px;

  position: absolute;
  width: calc(100% - var(--thumb-size));
  height: 100%;
  border-radius: 50%;
  will-change: transform;
  z-index: 1;
}

:host([platform="ios"]) .brightness-control__range-thumb {
  --thumb-size: 24px;
}

.brightness-control__range-thumb::after {
  content: '';
  position: absolute;
  background-color: black;
  top: 0; left: 0;
  transform: translateY(-50%);
  width: var(--thumb-size); height: var(--thumb-size);
  border-radius: 50%;
  pointer-events: none;
}

:host([platform="ios"]) .brightness-control__range-thumb::after {
  background-color: white;
  box-shadow: 0 1px 2px rgba(0,0,0, 0.3), 0 6px 0 rgba(0,0,0, 0.05), 0 5px 5px rgba(0,0,0, 0.1);
}

.brightness-control__range {
  -webkit-appearance: none;
  background-color: transparent;
  position: absolute;
  width: 100%;
  height: 2px;
  margin: 0;

}
  .brightness-control__range::-webkit-slider-thumb {
    --clickable-area: 30px;

    box-sizing: border-box;
    position: relative;
    width: var(--clickable-area); height: var(--clickable-area);
    transform: translateY(calc(-50% + 1px));
    box-shadow: none;
    border-style: none;
    opacity: 0;
    -webkit-appearance: none;
    cursor: pointer;
    z-index: 1;
  }

.brightness-control__range::-webkit-slider-runnable-track,
.brightness-control__range::-moz-range-track {
  --clickable-area: 15px;

  background: transparent;
  width: 100%;
  height: 2px;
  border-top: var(--clickable-area) solid transparent;
  border-bottom: var(--clickable-area) solid transparent;
  cursor: pointer;
  box-shadow: none;
}

  /*.brightness-control__range::-webkit-slider-thumb,
.brightness-control__range::-moz-range-thumb {
  --clickable-area: 30px;

  box-sizing: border-box;
  position: relative;
  width: var(--clickable-area); height: var(--clickable-area);
  opacity: 0;
  transform: translateY(calc(-50% + 1px));
  box-shadow: none;
  border-style: none;
  -webkit-appearance: none;
  cursor: pointer;
  z-index: 1;
}
*/

`;

export const ColorControl = css`
.color-control {
  position:absolute;
  width: 100%;
  height:20vw;
  left:0;
  bottom:0;
  color: $text-color;
  display:flex;
  align-content: stretch;
}

.color-control button {
  flex-grow: 1;
  margin: 0;
  border-radius: 0;
}

`;

export const FlashControl = css`

	.flashcontrol {
  position: absolute;
  width: 100%;
  max-width: 260px;
  top: 75%; left: 50%;
  display: flex;
  transform: translateX(-50%);
  box-sizing: border-box;
  justify-content: space-between;
}

.flashcontrol__flashbutton {
  width: 44px;
  height: 44px;
  background-image: url(./images/flash.svg);
}

#wrapper[data-color="white"] .flashcontrol__flashbutton:not(.flashcontrol__flashbutton--active) {
  background-image: url(./images/flash_black.svg);
}

.flashcontrol__flashbutton--active {
  background-image: url(./images/flash_active.svg);
}



`;

export const LedButton = css`

.led-button {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width: 128px;
  height: 128px;
  border-radius: 50%;
  overflow: hidden;
}

#wrapper:not([data-color="white"]) .led-button .button-circle {
  stroke: white;
}

#wrapper:not([data-color="white"]) .led-button .button-path {
  fill: white;
}

#wrapper[data-controls="picker"] .led-button .button-circle {
  stroke: transparent;
}

.led-button.active .button-circle {
  fill: rgba(0, 0, 0, 0.5);
  stroke: transparent;
  stroke-width: 0;
  r: 64;
}

.led-button.active .button-path {
  fill: white;
}



`;

export const ModelListItem = css`
	.modes-list-item {
  position: relative;
  height: 72px;
  padding-left: 72px;
  color: #212121;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

:host([platform="ios"]) .modes-list-item {
  box-shadow: 0 -1px 0 #C8C7CC, 0 1px 0 #C8C7CC;
  background-image: url(./images/chevron-icon.svg);
  background-repeat: no-repeat;
  background-position: calc(100% - 15px) 50%;
  margin-top: 1px;
}

.modes-list-item__icon {
  position: absolute;
  top: 50%;
  left: 32px;
  transform: translateX(-50%) translateY(-50%);
}

.modes-list-item__description {
  display: block;
  font-size: 14px;
  color: #747474;
  margin-top: 7px;
}

:host([platform="ios"]) .modes-list-item__description {
  font-size: 13px;
}



`;

export const SwitchControl = css`

	.onoffswitch {
		width:44px;
		height:44px;
	}

.checkbox {
  display: none;
}

.checkbox:checked + .switch-label{
  background-color: rgba(0,0,0,0.50);
  border-radius:3px;
}

#wrapper:not([data-color="white"]) .checkbox + .switch-label::before {
  background-image: url(./images/lock.svg);
}

#wrapper:not([data-color="white"]) .checkbox:checked + .switch-label::before {
  background-image: url(./images/lock_active.svg);
}

#wrapper[data-color="white"] .checkbox:checked + .switch-label:before {
  background-image: url(./images/lock_active.svg);
}


.switch-label {
  display: block;
  position: relative;
  overflow: hidden;
  width:44px;
  height:44px;
}

.switch-label::before {
  content:"";
  display: block;
  position: relative;
  top:50%;
  left:50%;
  transform: translateX(-50%) translateY(-50%);
  width:24px;
  height:24px;
  background-image: url(./images/lock_black.svg);
  background-repeat: no-repeat;
  background-size: auto 100%;
}




`;

export const ThemeButton = css`

	.theme-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333333;
  font-size: 14px;
}

.theme-button__icon-container {
  width: 80px;
  height: 80px;
  background-color: #DFDFDF;
  border-radius: 50%;
  position: relative;
  margin-bottom: 15px;
}

.theme-button--custom .theme-button__icon-container {
  background-color: #9B9B9B;
}

.theme-button--active .theme-button__icon-container {
  background-color: #D12F3D;
}

.theme-button__icon {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);
}



`;

export const Wheel = css`
.wheel {
  position: absolute;
  top: 50%; left: 50%;
  transform: translateX(-50%) translateY(-50%);
  width:100%;
  background-image: url(./images/color_wheel.png);
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: 50%;
}

.wheel svg path {
  opacity: 0;
}
.wheel svg circle:not([stroke="#ffffff"]) {
  opacity: 0 !important;
}



`;
