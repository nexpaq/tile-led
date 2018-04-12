import 'reset-css/reset.css';
import './sass/styles.scss';

import headerPickerBlackIcon from './img/picker_black.svg';
import headerPickerIcon from './img/picker.svg';
import headerPaletteIcon from './img/palette.svg';

import 'webview-tile-header/WebViewTileHeader.js';

import $ from 'jquery';
window.$ = $;
import Vue from 'vue';

const tile = new Vue({
  el: '#wrapper',
  data: {
    color: [
      255, // R
      255, // G
      255  // B 
    ],
    predefinedColors: {
      white: [255, 255, 255],
      red: [255, 70, 70],
      green: [64, 215, 139],
      blue: [0, 191, 222],
      yellow: [251, 236, 0]
    }
  },
  methods: {
      
  },
  watch: {
      
  },
  computed: {
    
  },
});

document.addEventListener('DOMContentLoaded', () => {
  /* Revealing UI */
  //document.getElementById('wrapper').style.opacity = 1;

  Nexpaq.Header.create('LED');
  //Header Customization
  const headerStyles = {
    backgroundColor: '#FFFFFF',
    color: 'black',
    iconColor: 'black',
    borderBottom: 'none'
  };
  Nexpaq.Header.customize(headerStyles);
  // TODO: replace the original picker handler with refactored version
  // Nexpaq.Header.addButton({ image: headerPickerBlackIcon }, pickerHandler);

});

// TODO: the legacy code requires refactory
/* LEGACY CODE */

// var mode_on=false;

// var flash_lefton=false;
// var flash_righton=false;

// var max_flashled_power = 8000;
// var left=0;
// var right=0;

// var $main_button, $flashbutton_left, $flashbutton_right, $checkBox, $track, $midValue, $wheel;
// var torchStatus;
// var self;
// var color;
// var cw;
// var check = true;
// var RGB = {
//   r: 0, g: 0, b: 0
// };


// function torchCheck() {
// 	torchStatus = $checkBox.checked;
// };


// function mainButtonOn() {
// 	this.classList.add('active');
// 	mode_on=true;
//   Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetRGB', [led_color[0], led_color[1], led_color[2]]);
// };

// function mainButtonOff() {
// 	this.classList.remove('active');
// 	mode_on=false;
//   Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffLeds', []);
// };

// function mainButtonTouchEndHandler(e){
// 	self=this;
// 	torchCheck();
// 	if (!torchStatus) {
// 		mainButtonOff.call(self);
// 	};
// }

// function mainButtonTouchStartHandler(e) {
// 	self=this;
// 	if(!mode_on) {
// 		mainButtonOn.call(self);
// 	} else {
// 		mainButtonOff.call(self);
// 	};
// }


// function colorButtonClickHandler(e) {
// 	color = this.dataset.color;
// 	var backgroundColor = this.style.backgroundColor;
// 	document.getElementById('wrapper').dataset.color = color;
// 	//document.getElementById('wrapper').style.backgroundColor = backgroundColor;
//   Nexpaq.Header.customize({backgroundColor:backgroundColor,color:"#FFFFFF",iconColor:"#FFFFFF"});
//   Nexpaq.Header.cleanButtons();
//   Nexpaq.Header.addButton({image: headerPickerIcon}, pickerHandler);
  
// 	if(color == 'white') {
// 		led_color = [255, 255, 255];
//     Nexpaq.Header.customize({color:"black",iconColor:"black"});
//     Nexpaq.Header.cleanButtons();
//     Nexpaq.Header.addButton({image: headerPickerBlackIcon}, pickerHandler);
//     //change the fill color of picker;
// 	} else if(color == 'red') {
// 		led_color = [255, 0, 0];
// 	} else if(color == 'green') {
// 		led_color = [0, 255, 0];
// 	} else if(color == 'blue') {
// 		led_color = [0, 0, 255];
// 	} else if(color == 'yellow') {
// 		led_color = [255, 255, 0];
// 	}

// 	if (mode_on) {
// 		mainButtonOn.call(self);
// 	}
// }
// function flashButtonLeftHandler() {
//   this.classList.toggle('active');
  
//   if(!flash_lefton) {
//     left = max_flashled_power;
//   } else {
//     left = 0;
//   }

//   flash_lefton = !flash_lefton;
//   if(left == 0 && right == 0) {
//     Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffFlashs', []);
//   } else {
//     Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetFlashes', [left, right]);
//   }
  
// }

// function flashButtonRightHandler() {
//   this.classList.toggle('active');

//   if(!flash_righton) {
//     right = max_flashled_power;
//   } else {
//     right = 0;
//   }

//   flash_righton = !flash_righton;
//   if(left == 0 && right == 0) {
//     Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'TurnOffFlashs', []);
//   } else {
//     Nexpaq.API.Module.SendCommand(Nexpaq.Arguments[0], 'SetFlashes', [left, right]);  
//   }
// }

// function rgbToHsl(r, g, b){
//   r /= 255, g /= 255, b /= 255;
//   var max = Math.max(r, g, b), min = Math.min(r, g, b);
//   var h, s, l = (max + min) / 2;

//   if(max == min){
//     h = s = 0; 
//   }else{
//     var d = max - min;
//     s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
//     switch(max){
//       case r: h = (g - b) / d + (g < b ? 6 : 0); break;
//       case g: h = (b - r) / d + 2; break;
//       case b: h = (r - g) / d + 4; break;
//     }
//     h /= 6;
//   }

//   return [h, s, l];
// }
// function hslToRgb(h, s, l){
//   var r, g, b;

//   if(s == 0){
//     r = g = b = l; 
//   }else{
//     function hue2rgb(p, q, t){
//       if(t < 0) t += 1;
//       if(t > 1) t -= 1;
//       if(t < 1/6) return p + (q - p) * 6 * t;
//       if(t < 1/2) return q;
//       if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
//       return p;
//     }

//     var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
//     var p = 2 * l - q;
//     r = hue2rgb(p, q, h + 1/3);
//     g = hue2rgb(p, q, h);
//     b = hue2rgb(p, q, h - 1/3);
//   }

//   return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
// }

// function dragHandler() {
//   var output = document.getElementById("position");
//   var val = parseInt(this.value);

//   RGB.r= Math.round(RGB.r);
//   RGB.g= Math.round(RGB.g);
//   RGB.b= Math.round(RGB.b);

//  //converts to HSL
//   var HSL = rgbToHsl(RGB.r,RGB.g,RGB.b);

//   //changes the brightness
//   HSL = [HSL[0],HSL[1],(val/100)];
 
//   //converts back to RGB
//   var newRGB = hslToRgb(HSL[0],HSL[1],HSL[2]);
  
//   // //adjusts the color of the thumb based on the brightness
//   // document.styleSheets[0].addRule('.nxprange::-webkit-slider-thumb','color: '+ 'rgb('+newRGB[0]+','+newRGB[1]+ ','+newRGB[2]+ ')');
//   // document.styleSheets[0].insertRule('.nxprange::-webkit-slider-thumb { color: '+'rgb('+newRGB[0]+','+newRGB[1]+ ','+newRGB[2]+ ')'+' }', 0);
  
//   //Sets the color for data sending
//   led_color=[newRGB[0],newRGB[1],newRGB[2]];
//   if (mode_on) {
//       mainButtonOn.call(self);
//     }
 
// }

// function pickerHandler() {
//   document.getElementById('wrapper').dataset.color= 'white';
//   //document.getElementById('wrapper').style.backgroundColor = 'white';
//   Nexpaq.Header.customize({backgroundColor:"#FFFFFF",color:"black",iconColor:"black"});



//   document.getElementById("wheel-control").classList.toggle('hidden'); 
//   document.getElementById("color-control").classList.toggle('hidden'); 
  
//   //Changes the button title
//   Nexpaq.Header.cleanButtons();
//   if (check) {
//     Nexpaq.Header.addButton({image: headerPaletteIcon}, pickerHandler);
//   } else {
//     Nexpaq.Header.addButton({image: headerPickerBlackIcon}, pickerHandler);
//   }
//   check = !check;
  

//   var colorHex;
//   if(color == 'white') {
//     colorHex='#ee3696';
//     led_color=[ 238, 54, 150];

//   }
//   if(color == 'red') {
//     colorHex='#ff4646';
//   }
//   if(color == 'green') {
//     colorHex='#40d78b';
//   }
//   if(color == 'blue') {
//     colorHex='#00bfde';
//   }
//   if(color == 'yellow') {
//     colorHex='#fbec00';
//   } 
//   if(color == undefined) {
//     colorHex = '#ee3696';
//     led_color=[ 238, 54, 150];
//   }

//   //sets the picker to the color
//   cw.color(colorHex);

//   //Gets the RGB value of the color
//   var RGB = cw.color();

//   //sets brightness control to same color
//   $track.style.color = colorHex;
//   $track.value = $midValue;
//   document.styleSheets[0].addRule('.nxprange::-webkit-slider-thumb','color: '+ colorHex);
//   document.styleSheets[0].insertRule('.nxprange::-webkit-slider-thumb { color: '+colorHex+' }', 0);
 
// }
  

// function contextmenuHandler(e) {
// 	e.preventDefault();
// 	return false;
// }

// var led_color = [255, 255, 255],
// 		frequency = 1,
// 		duration_of_blink = 500,
// 		blinking_timeout;

// /** native.js */
// function backButtonClickHandler(e) {
// 	Nexpaq.API.Exit();
// }

// function turnLEDon(r, g, b) {
// 	if(!window.EmulateModule) window.nexpaqAPI.LED.setColorRGB(r, g, b);
// }
// function turnLEDoff() {
// 	if(!window.EmulateModule) window.nexpaqAPI.LED.turnOff();
// }
// function turnFlashOn (left,right) {
//   if(!window.EmulateModule) nexpaqAPI.LED.turnFlashTorch(left,right);
// }
// function startBlinking() {
// 	if(frequency === 0) return false;

// 	blinkLED(led_color[0], led_color[1], led_color[2]);
// 	blinking_timeout = setTimeout(startBlinking, frequency*1000);
// }
// function stopBlinking() {
// 	clearTimeout(blinking_timeout);
// }
// function blinkLED(r, g, b) {
// 	$main_button.classList.add('blink');
// 	if(!window.EmulateModule) window.nexpaqAPI.LED.setColorRGB(r, g, b);
// 	setTimeout(function () {
// 		$main_button.classList.remove('blink');
// 		if(!window.EmulateModule) turnLEDoff();
// 	}, duration_of_blink);
// }
// /** end: native.js */

// document.addEventListener('DOMContentLoaded', () => {
//   $main_button = document.getElementById('main-button');
// 	$checkBox = document.getElementById('myonoffswitch');
//   $flashbutton_left = document.getElementById('flashbutton_left');
//   $flashbutton_right = document.getElementById('flashbutton_right');
//   $track= document.getElementById('nxprange');
//   $midValue = $track.value;

//   document.getElementById("wheel").style.transform = "translateX(-50%) translateY(-50%) scale("+window.innerWidth/375+")";
 


// 	Nexpaq.Header.addEventListener('BackButtonClicked', backButtonClickHandler);
// 	$main_button.addEventListener('touchstart', mainButtonTouchStartHandler);
// 	$main_button.addEventListener('touchend', mainButtonTouchEndHandler);
//   $flashbutton_left.addEventListener('click', flashButtonLeftHandler);
//   $flashbutton_right.addEventListener('click', flashButtonRightHandler);
//   //Handles the color picker
//   $track.addEventListener('input', dragHandler);
//   // $track.addEventListener('input', dragHandler);

// 	//Clears the state when switching from torch ON to OFF when the LED is ON
// 	$checkBox.addEventListener('click', function(){mainButtonOff.call($main_button)});

// 	var color_buttons = document.getElementsByClassName('color-control')[0].children;
// 	for(var i=0; i < color_buttons.length; i++) {
// 		color_buttons[i].addEventListener('click', colorButtonClickHandler);
// 	}
  


//   //Creates the color-wheel
//   $wheel = document.getElementById('wheel');
//   cw = Raphael.colorwheel($wheel, 220, 400);

//   cw.onchange(function(colorID){
//     console.log(cw.color_hsb());
//     console.log(colorID+ "color object");
//     $track.style.color= colorID.hex;

//     colorID.r= Math.round(colorID.r);
//     colorID.g= Math.round(colorID.g);
//     colorID.b= Math.round(colorID.b);
//     RGB.r = colorID.r;
//     RGB.g = colorID.g;
//     RGB.b = colorID.b;

//     document.styleSheets[0].addRule('.nxprange::-webkit-slider-thumb','color: '+ 'rgb('+RGB.r+','+RGB.g+ ','+RGB.b+ ')');
//     document.styleSheets[0].insertRule('.nxprange::-webkit-slider-thumb { color: '+'rgb('+RGB.r+','+RGB.g+ ','+RGB.b+ ')'+' }', 0);
//     dragHandler.call($track);
//   });
 
// 	document.body.removeEventListener('contextmenu', contextmenuHandler);
// });

/* END OF LEGACY CODE */