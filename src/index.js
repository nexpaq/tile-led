import 'reset-css/reset.css';
import './sass/styles.scss';

import headerPickerBlackIcon from './img/picker_black.svg';
import headerPickerIcon from './img/picker.svg';
import headerPaletteIcon from './img/palette.svg';

import WebViewTileHeader from 'webview-tile-header/WebViewTileHeader.js';
import LedPartState from './enums/LedPartState';
import ControlsType from './enums/ControlsType';
import ThemeType from './enums/ThemeType';
import predefinedColors from './predefined-colors';
import {isSameColor, adjustColor, setRgbColorWithTemperatureProtection as setRgbColor} from './utils';
import CommandBufferFilter from './lib/CommandBufferFilter';
import IosDeviceDetection from './lib/IosDeviceDetection';

import ThemePlayer from './lib/ThemePlayer';
import CandleFlickerTheme from './themes/CandleFlickerTheme';
import PoliceTheme from './themes/PoliceTheme';
import StrobeTheme from './themes/StrobeTheme';
import SOSTheme from './themes/SOSTheme';
import MeditationTheme from './themes/MeditationTheme';
import DiscoTheme from './themes/DiscoTheme';
import RomanceTheme from './themes/RomanceTheme';
import StudyTheme from './themes/StudyTheme';

import $ from 'jquery';
window.$ = $;
import Vue from 'vue';
import Color from 'color';

const maxFlashLedBrightness = 4000;
// Creating command filter to prevent tile from sending to many commands
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

const tile = new Vue({
  el: '#wrapper',
  data: {
    // State of 6 colour LEDs
    ledsState: LedPartState.Off,
    // States of left and right colour LEDs
    flashLedLeftState: LedPartState.Off,
    flashLedRightState: LedPartState.Off,
    // Lock mode state
    lockState: LedPartState.On,

    // Type of controls to show
    controlsType: ControlsType.Selector,//ControlsType.Themes,
    currentTheme: null, // ThemeType

    // Current user selected color for colour leds
    currentColor: Color('white'),
    lightness: 0, // -1 <= x <= 1
    predefinedColors: predefinedColors,
    rgbTemperatureProtection: false,
  },

  mounted: function () {
    const wrapper = document.querySelector('.wrapper');
    if (!this.getIos11DeviceAndAboveValue){
      wrapper.classList.add('ios-10-below');
    }
  },

  computed: {
    getIos11DeviceAndAboveValue: function () {
      return this.getIos11DeviceAndAboveValueMethod(this.isIosDevice);
    },

    isIosDevice: function () {
      let isIosDeviceValue = IosDeviceDetection.getIsIosDeviceValue();
      return isIosDeviceValue;
    },

    backgroundColor: function() {
      // Background color changes only for Simple mode
      if(this.controlsType != ControlsType.Simple) return 'white';

      // Looking in predefined colors
      for(let predefinedColorName in this.predefinedColors) {
        let predefinedColor = this.predefinedColors[predefinedColorName].moduleColor;

        // If current color is same as one of predefined colours
        if(isSameColor(this.currentColor, predefinedColor)) {
          // returning predefined colour name
          return predefinedColorName;
        }
      }

      return 'white';
    },

    // We are adjusting user selected colour with user selected lightness
    adjustedCurrentColor: function() {
      // We are not ajusting colour in simple mode
      if(this.controlsType == ControlsType.Simple) return this.currentColor;

      // Adjusting user selected colour with user selected lightness
      let adjustedColor = adjustColor(this.currentColor, this.lightness);
      return adjustedColor;
    }
  },
  watch: {
    controlsType: function(newControlsType) {
      if(newControlsType == ControlsType.Simple) {
        WebViewTileHeader.setTitle('Simple pallet');
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'PrioritizeColorBrightness', []);
      } else if(newControlsType == ControlsType.Picker) {
        WebViewTileHeader.setTitle('Color wheel');
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'PrioritizeColorAccuracy', []);
      } else if(newControlsType == ControlsType.Themes) {
        WebViewTileHeader.setTitle('Themes');
      } else {
        WebViewTileHeader.setTitle('LED');
      }
    },

    // Watching changes on background color to adjust header styles
    backgroundColor: function(newBackgroundColor) {
      // Getting colour by name
      const color = this.predefinedColors[newBackgroundColor].uiColor;

      // Changing colour of header and icons in it according to the background colour
      const [r, g, b] = [color.red(), color.green(), color.blue()];
      WebViewTileHeader.customize({ backgroundColor: `rgb(${r}, ${g}, ${b})` });
      if(newBackgroundColor == 'white') {
        WebViewTileHeader.customize({ color: 'black', iconColor: 'black' });
      } else {
        WebViewTileHeader.customize({ color: 'white', iconColor: 'white' });
      }
    },

    // Watching states of colour LEDS so we can send Moduware command when required
    ledsState: function(newState) {
      if(newState == LedPartState.On) {
        const [r, g, b] = [this.adjustedCurrentColor.red(), this.adjustedCurrentColor.green(), this.adjustedCurrentColor.blue()];
        setRgbColor(commandFilter, r, g, b);
      } else {
        // Turning LEDs off
        setRgbColor(commandFilter, 0, 0, 0);
      }
    },

    // Tracking changes to adjusted color, so we can send colour change command to module
    adjustedCurrentColor: function(newColor) {
      // We are sending command only if LEDs are on
      if(this.ledsState != LedPartState.On) return;

      const [r, g, b] = [this.adjustedCurrentColor.red(), this.adjustedCurrentColor.green(), this.adjustedCurrentColor.blue()];
      setRgbColor(commandFilter, r, g, b);
    },

    // When flash LEDs change sending appropriate Moduware commands
    flashLedLeftState: () => tile.watchFlashLedState(),
    flashLedRightState: () => tile.watchFlashLedState(),

    currentTheme: function(newTheme) {
      if(newTheme == null) {
        themePlayer.stop();
      } else {
        themePlayer.play(newTheme);
      }
    }
  },
  methods: {
    watchFlashLedState: function() {
      const left = this.flashLedLeftState ? maxFlashLedBrightness : 0;
      const right = this.flashLedRightState ? maxFlashLedBrightness : 0;
      if(left == 0 && right == 0) {
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'TurnOffFlashs', []);
      } else {
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [left, right]);
      }
    },

    // We are changing state of colour LEDs when user press main button
    ledButtonPressedHandler: function() {
      this.ledsState = !this.ledsState;
    },

    ledButtonReleasedHandler: function() {
      // When state isn't locked we are restoring value when user release the button
      if(this.lockState == LedPartState.Off) {
        this.ledsState = !this.ledsState;
      }
    },

    toggleTheme: function(themeName) {
      if(this.currentTheme == themeName) {
        this.currentTheme = null;
      } else {
        this.currentTheme = themeName;
      }
    },

    getIos11DeviceAndAboveValueMethod: function(isIosDevice) {
      return IosDeviceDetection.getIsIos11DeviceAndAbove(isIosDevice);
    }

    // toggleControls: function() {
    //   // We need to change header button icon when we are switching controls
    //   const headerIconElement = document.getElementById('headerControlsToggleButton').children[0];

    //   if(this.controlsType == ControlsType.Simple) {
    //     this.controlsType = ControlsType.Picker;
    //     headerIconElement.src = headerPaletteIcon;
    //   } else {
    //     this.controlsType = ControlsType.Simple;
    //     headerIconElement.src = headerPickerBlackIcon;
    //   }
    // }
  }
});



document.addEventListener('DOMContentLoaded', () => {
  /* Revealing UI */
  document.getElementById('wrapper').style.opacity = 1;

  WebViewTileHeader.create('LED');
  //Header Customization
  WebViewTileHeader.customize({
    backgroundColor: '#FFFFFF',
    color: 'black',
    iconColor: 'black',
    borderBottom: 'none'
  });

  WebViewTileHeader.addEventListener('BackButtonClicked', () => {
    if(tile.controlsType == ControlsType.Selector) {
      Moduware.v0.API.Exit();
    } else {
      tile.controlsType = ControlsType.Selector;
    }
  });
  // WebViewTileHeader.addButton({ image: headerPickerBlackIcon, id: 'headerControlsToggleButton' }, () => tile.toggleControls.call(tile));

  const colorWheelElement = document.getElementById('colorWheel');
  const colorWheel = Raphael.colorwheel(colorWheelElement, 220, 400);
  colorWheel.onchange(function(newColor) {
    tile.currentColor = Color.rgb(newColor.r, newColor.g, newColor.b);
  });
});
