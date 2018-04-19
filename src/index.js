import 'reset-css/reset.css';
import './sass/styles.scss';

import headerPickerBlackIcon from './img/picker_black.svg';
import headerPickerIcon from './img/picker.svg';
import headerPaletteIcon from './img/palette.svg';

import 'webview-tile-header/WebViewTileHeader.js';
import LedPartState from './enums/LedPartState';
import ControlsType from './enums/ControlsType';
import predefinedColors from './predefined-colors';
import {isSameColor, adjustColor} from './utils';

import $ from 'jquery';
window.$ = $;
import Vue from 'vue';
import Color from 'color';

const maxFlashLedBrightness = 8000;

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
    controlsType: ControlsType.Simple,

    // Current user selected color for colour leds
    currentColor: Color('white'),
    lightness: 0, // -1 <= x <= 1
    predefinedColors: predefinedColors
  },
  computed: {
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
    // Watching changes on background color to adjust header styles
    backgroundColor: function(newBackgroundColor) {
      // Getting colour by name
      const color = this.predefinedColors[newBackgroundColor].uiColor;
      
      // Changing colour of header and icons in it according to the background colour
      const [r, g, b] = [color.red(), color.green(), color.blue()]; 
      Nexpaq.Header.customize({ backgroundColor: `rgb(${r}, ${g}, ${b})` });
      if(newBackgroundColor == 'white') {
        Nexpaq.Header.customize({ color: 'black', iconColor: 'black' });
      } else {
        Nexpaq.Header.customize({ color: 'white', iconColor: 'white' });
      }

      // In simple mode we also need adjust header button icon color
      if(this.controlsType == ControlsType.Simple) {
        const headerIconElement = document.getElementById('headerControlsToggleButton').children[0];
        if(newBackgroundColor == 'white') {
          headerIconElement.src = headerPickerBlackIcon;
        } else {
          headerIconElement.src = headerPickerIcon;
        }
      }
    },

    // Watching states of colour LEDS so we can send Moduware command when required
    ledsState: function(newState) {
      if(newState == LedPartState.On) {
        const [r, g, b] = [this.adjustedCurrentColor.red(), this.adjustedCurrentColor.green(), this.adjustedCurrentColor.blue()]; 
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]);
      } else {
        // Turning LEDs off
        Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]);
      }
    },

    // Tracking changes to adjusted color, so we can send colour change command to module
    adjustedCurrentColor: function(newColor) {
      // We are sending command only if LEDs are on
      if(this.ledsState != LedPartState.On) return;
      
      const [r, g, b] = [this.adjustedCurrentColor.red(), this.adjustedCurrentColor.green(), this.adjustedCurrentColor.blue()]; 
      Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]);
    },

    // When flash LEDs change sending appropriate Moduware commands
    flashLedLeftState: () => tile.watchFlashLedState(),
    flashLedRightState: () => tile.watchFlashLedState()
  },
  methods: {
    watchFlashLedState: function() {
      const left = this.flashLedLeftState ? maxFlashLedBrightness : 0;
      const right = this.flashLedRightState ? maxFlashLedBrightness : 0;
      Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [left, right]);
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
    toggleControls: function() {
      // We need to change header button icon when we are switching controls
      const headerIconElement = document.getElementById('headerControlsToggleButton').children[0];
      
      if(this.controlsType == ControlsType.Simple) {
        this.controlsType = ControlsType.Picker;
        headerIconElement.src = headerPaletteIcon;
      } else {
        this.controlsType = ControlsType.Simple;
        headerIconElement.src = headerPickerBlackIcon;
      }
    }
  }
});



document.addEventListener('DOMContentLoaded', () => {
  /* Revealing UI */
  //document.getElementById('wrapper').style.opacity = 1;

  Nexpaq.Header.create('LED');
  //Header Customization
  Nexpaq.Header.customize({
    backgroundColor: '#FFFFFF',
    color: 'black',
    iconColor: 'black',
    borderBottom: 'none'
  });
  Nexpaq.Header.addButton({ image: headerPickerBlackIcon, id: 'headerControlsToggleButton' }, () => tile.toggleControls.call(tile));

  const colorWheelElement = document.getElementById('colorWheel');
  const colorWheel = Raphael.colorwheel(colorWheelElement, 220, 400);
  colorWheel.onchange(function(newColor) {
    tile.currentColor = Color.rgb(newColor.r, newColor.g, newColor.b);
  });
});