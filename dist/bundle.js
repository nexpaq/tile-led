/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js!./node_modules/reset-css/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/reset-css/reset.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/\n   v3.0 | 20180413\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n\tdisplay: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/sass/styles.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/sass/styles.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "* {\n  outline: none;\n  -webkit-tap-highlight-color: transparent; }\n\nsvg {\n  width: 100%;\n  height: auto; }\n\nimg {\n  max-width: 100%; }\n\nbody {\n  font-family: Roboto, Helvetica, Arial, sans-serif; }\n\nbutton {\n  color: inherit;\n  font-size: inherit;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border: 0;\n  padding: 0;\n  background-color: transparent; }\n\n.hidden, #templates, .app-screen:not(.active) {\n  display: none !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.no-overflow, #wrapper, .app-screen {\n  overflow: hidden; }\n\n.unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n#wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%; }\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Roboto-Light.woff */ "./src/fonts/Roboto-Light.woff")) + ") format(\"woff\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: Roboto;\n  src: url(" + escape(__webpack_require__(/*! ../fonts/Roboto-Regular.woff */ "./src/fonts/Roboto-Regular.woff")) + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'fontello';\n  src: url(" + escape(__webpack_require__(/*! ../fonts/fontello.woff */ "./src/fonts/fontello.woff")) + ") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga'; }\n\n.icon-off:before {\n  content: '\\E800'; }\n\n.led-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  width: 35.55vw;\n  height: 35.55vw;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  border: 1.5vw solid currentColor;\n  border-radius: 50%; }\n  #wrapper[data-color=\"white\"] .led-button {\n    color: #606060; }\n  #wrapper:not([data-color=\"white\"]) .led-button.active {\n    box-shadow: 0 0 5px currentColor, inset 0 0 5px currentColor;\n    background-color: white;\n    color: white; }\n  .led-button:not(.active) {\n    color: white; }\n  .led-button.active {\n    background-color: #606060; }\n  #wrapper[data-color=\"white\"] .led-button::after, .led-button.active::after {\n    color: #606060; }\n  #wrapper[data-color=\"white\"] .led-button.active::after {\n    color: white; }\n  .led-button::after {\n    font-family: 'fontello';\n    content: '\\E800';\n    font-size: 16vw;\n    color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    -moz-transform: translateX(-50%) translateY(-50%);\n    -ms-transform: translateX(-50%) translateY(-50%);\n    -o-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%); }\n\n.flashcontrol {\n  position: absolute;\n  top: 75%;\n  left: 12.5%;\n  display: block; }\n\n.flashbutton_left {\n  position: absolute;\n  left: 3vw;\n  width: 44px;\n  height: 44px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/flash.svg */ "./src/img/flash.svg")) + "); }\n  #wrapper[data-color=\"white\"] .flashbutton_left:not(.active) {\n    background-image: url(" + escape(__webpack_require__(/*! ../img/flash_black.svg */ "./src/img/flash_black.svg")) + "); }\n  .flashbutton_left.active {\n    background-image: url(" + escape(__webpack_require__(/*! ../img/flash_active.svg */ "./src/img/flash_active.svg")) + "); }\n\n.flashbutton_right {\n  position: absolute;\n  left: 61vw;\n  width: 44px;\n  height: 44px;\n  background-image: url(" + escape(__webpack_require__(/*! ../img/flash.svg */ "./src/img/flash.svg")) + "); }\n  #wrapper[data-color=\"white\"] .flashbutton_right:not(.active) {\n    background-image: url(" + escape(__webpack_require__(/*! ../img/flash_black.svg */ "./src/img/flash_black.svg")) + "); }\n  .flashbutton_right.active {\n    background-image: url(" + escape(__webpack_require__(/*! ../img/flash_active.svg */ "./src/img/flash_active.svg")) + "); }\n\n.brightness-control .alignleft {\n  position: relative;\n  float: left;\n  font-size: 14px;\n  color: #333333;\n  top: 148vw;\n  margin-left: 7vw;\n  font-weight: 500; }\n\n.brightness-control .alignright {\n  position: relative;\n  float: right;\n  font-size: 14px;\n  color: #333333;\n  top: 148vw;\n  margin-right: 7vw;\n  font-weight: 500; }\n\n.brightness-control .nxprange {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  -webkit-appearance: none;\n  background-color: transparent;\n  width: 100%;\n  color: red; }\n  .brightness-control .nxprange:focus {\n    outline: none; }\n  .brightness-control .nxprange::-webkit-slider-runnable-track {\n    background: -webkit-linear-gradient(90deg, transparent, transparent 7%, rgba(0, 0, 0, 0.26) 7%, rgba(0, 0, 0, 0.26) 93%, transparent 93%, transparent);\n    background: linear-gradient(90deg, transparent, transparent 7%, rgba(0, 0, 0, 0.26) 7%, rgba(0, 0, 0, 0.26) 93%, transparent 93%, transparent);\n    width: 100%;\n    height: 2px;\n    cursor: pointer;\n    animate: 0.2s;\n    box-shadow: none; }\n  .brightness-control .nxprange::before {\n    display: block;\n    height: 2px;\n    content: '';\n    background: #000000;\n    top: 0px;\n    right: 50%;\n    position: absolute;\n    width: 43%; }\n  .brightness-control .nxprange::-webkit-slider-thumb {\n    position: relative;\n    top: -29px;\n    box-shadow: none;\n    border-style: none;\n    background: -webkit-radial-gradient(circle, black, black 14%, transparent 14%, transparent);\n    background: radial-gradient(circle, black, black 14%, transparent 14%, transparent);\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    -webkit-appearance: none;\n    cursor: pointer;\n    z-index: 1; }\n\n.onoffswitch {\n  position: absolute;\n  left: 32vw;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  width: 44px;\n  height: 44px; }\n  .onoffswitch .checkbox {\n    display: none; }\n    .onoffswitch .checkbox:checked + .switch-label {\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 3px; }\n    #wrapper:not([data-color=\"white\"]) .onoffswitch .checkbox + .switch-label::before {\n      background-image: url(" + escape(__webpack_require__(/*! ../img/lock.svg */ "./src/img/lock.svg")) + "); }\n    #wrapper:not([data-color=\"white\"]) .onoffswitch .checkbox:checked + .switch-label::before {\n      background-image: url(" + escape(__webpack_require__(/*! ../img/lock_active.svg */ "./src/img/lock_active.svg")) + "); }\n    #wrapper[data-color=\"white\"] .onoffswitch .checkbox:checked + .switch-label:before {\n      background-image: url(" + escape(__webpack_require__(/*! ../img/lock_active.svg */ "./src/img/lock_active.svg")) + "); }\n  .onoffswitch .switch-label {\n    display: block;\n    position: relative;\n    overflow: hidden;\n    width: 44px;\n    height: 44px; }\n    .onoffswitch .switch-label::before {\n      content: \"\";\n      display: block;\n      position: relative;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translateX(-50%) translateY(-50%);\n      -moz-transform: translateX(-50%) translateY(-50%);\n      -ms-transform: translateX(-50%) translateY(-50%);\n      -o-transform: translateX(-50%) translateY(-50%);\n      transform: translateX(-50%) translateY(-50%);\n      width: 24px;\n      height: 24px;\n      background-image: url(" + escape(__webpack_require__(/*! ../img/lock_black.svg */ "./src/img/lock_black.svg")) + ");\n      background-repeat: no-repeat;\n      background-size: auto 100%; }\n\n.color-control {\n  position: absolute;\n  width: 100%;\n  height: 20vw;\n  left: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-content: stretch; }\n  .color-control button {\n    flex-grow: 1;\n    margin: 0;\n    border-radius: 0; }\n\n.wheel {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  width: 100%;\n  z-index: -1; }\n\n.wrapper[data-color='white'] {\n  color: white; }\n\n.wrapper[data-color='red'] {\n  color: #ff4646; }\n\n.wrapper[data-color='green'] {\n  color: #40d78b; }\n\n.wrapper[data-color='blue'] {\n  color: #00bfde; }\n\n.wrapper[data-color='yellow'] {\n  color: #fbec00; }\n", "", {"version":3,"sources":["/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/_global.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/_variables.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/node_modules/bourbon/app/assets/stylesheets/addons/_prefixer.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/node_modules/bourbon/app/assets/stylesheets/addons/_position.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/_fonts.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/styles.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_led-button.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_flash.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_brightness-control.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_switch-control.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_color-control.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/partial/_wheel.scss","/Users/alexchernov/github/tiles/tile-led/src/sass/src/sass/screen/_main.scss"],"names":[],"mappings":"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","file":"styles.scss","sourcesContent":["* {\n\toutline: none;\n\t-webkit-tap-highlight-color: rgba(0,0,0,0);\n}\nsvg {\n\twidth: 100%;\n\theight: auto;\n}\nimg {\n\tmax-width: 100%;\n}\nbody {\n\tfont-family: $main-font;\n}\nbutton {\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-family: $main-font;\n\tborder: 0;\n\tpadding: 0;\n\tbackground-color: transparent;\n}\n.hidden {\n\tdisplay: none !important;\n}\n.invisible {\n\tvisibility: hidden !important;\n}\n.no-overflow {\n\toverflow: hidden;\n}\n.unselectable {\n  @include user-select(none);\n}\n#templates {\n\t@extend .hidden;\n}\n#wrapper {\n\t@extend .no-overflow;\n\t@include position(fixed, 0 0 null null);\n\twidth: 100%;\n\theight: 100%;\n}\n.app-screen {\n\t@extend .no-overflow;\n}\n.app-screen:not(.active) {\n\t@extend .hidden;\n}\n","$main-font: Roboto, Helvetica, Arial, sans-serif;\n\n// SIZES\n$font-size: 16px;\n\n// COLORS\n$hr-color: rgb(82, 80, 88);\n$text-color: rgb(255, 255, 255);\n$white: rgb(255, 255, 255);\n$black: rgb(42, 42, 42);\n$red: rgb(255, 70, 70);\n$green: rgb(64, 215, 139);\n$blue: rgb(0, 191, 222);\n$yellow: rgb(251, 236, 0);\n\n@mixin flashplace($left) {\n  position:absolute;\n  left: $left;\n  width: 44px; \n  height: 44px;\n  background-image: url(../img/flash.svg);\n}\n\n\n","@charset \"UTF-8\";\n\n/// A mixin for generating vendor prefixes on non-standardized properties.\n///\n/// @param {String} $property\n///   Property to prefix\n///\n/// @param {*} $value\n///   Value to use\n///\n/// @param {List} $prefixes\n///   Prefixes to define\n///\n/// @example scss - Usage\n///   .element {\n///     @include prefixer(border-radius, 10px, webkit ms spec);\n///   }\n///\n/// @example css - CSS Output\n///   .element {\n///     -webkit-border-radius: 10px;\n///     -moz-border-radius: 10px;\n///     border-radius: 10px;\n///   }\n///\n/// @require {variable} $prefix-for-webkit\n/// @require {variable} $prefix-for-mozilla\n/// @require {variable} $prefix-for-microsoft\n/// @require {variable} $prefix-for-opera\n/// @require {variable} $prefix-for-spec\n\n@mixin prefixer($property, $value, $prefixes) {\n  @each $prefix in $prefixes {\n    @if $prefix == webkit {\n      @if $prefix-for-webkit {\n        -webkit-#{$property}: $value;\n      }\n    } @else if $prefix == moz {\n      @if $prefix-for-mozilla {\n        -moz-#{$property}: $value;\n      }\n    } @else if $prefix == ms {\n      @if $prefix-for-microsoft {\n        -ms-#{$property}: $value;\n      }\n    } @else if $prefix == o {\n      @if $prefix-for-opera {\n        -o-#{$property}: $value;\n      }\n    } @else if $prefix == spec {\n      @if $prefix-for-spec {\n        #{$property}: $value;\n      }\n    } @else  {\n      @warn \"Unrecognized prefix: #{$prefix}\";\n    }\n  }\n}\n\n@mixin disable-prefix-for-all() {\n  $prefix-for-webkit:    false !global;\n  $prefix-for-mozilla:   false !global;\n  $prefix-for-microsoft: false !global;\n  $prefix-for-opera:     false !global;\n  $prefix-for-spec:      false !global;\n}\n","@charset \"UTF-8\";\n\n/// Provides a quick method for setting an element’s position. Use a `null` value to “skip” a side.\n///\n/// @param {Position} $position [relative]\n///   A CSS position value\n///\n/// @param {Arglist} $coordinates [null null null null]\n///   List of values that correspond to the 4-value syntax for the edges of a box\n///\n/// @example scss - Usage\n///   .element {\n///     @include position(absolute, 0 null null 10em);\n///   }\n///\n/// @example css - CSS Output\n///   .element {\n///     left: 10em;\n///     position: absolute;\n///     top: 0;\n///   }\n///\n/// @require {function} is-length\n/// @require {function} unpack\n\n@mixin position($position: relative, $coordinates: null null null null) {\n  @if type-of($position) == list {\n    $coordinates: $position;\n    $position: relative;\n  }\n\n  $user-deprecation-warnings-setting: $output-bourbon-deprecation-warnings;\n  $output-bourbon-deprecation-warnings: false !global;\n  $coordinates: unpack($coordinates);\n\n  $offsets: (\n    top:    nth($coordinates, 1),\n    right:  nth($coordinates, 2),\n    bottom: nth($coordinates, 3),\n    left:   nth($coordinates, 4)\n  );\n\n  position: $position;\n\n  @each $offset, $value in $offsets {\n    @if is-length($value) {\n      #{$offset}: $value;\n    }\n  }\n  $output-bourbon-deprecation-warnings: $user-deprecation-warnings-setting !global;\n}\n","@font-face {\n  font-family: Roboto;\n  src: url('../fonts/Roboto-Light.woff') format('woff');\n  font-weight: 300;\n  font-style: normal;\n}\n@font-face {\n  font-family: Roboto;\n  src: url('../fonts/Roboto-Regular.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n@font-face {\n  font-family:'fontello';\n  src: url('../fonts/fontello.woff') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga';\n}\n\n.icon-off:before { content: '\\e800'; }\n\n","* {\n  outline: none;\n  -webkit-tap-highlight-color: transparent; }\n\nsvg {\n  width: 100%;\n  height: auto; }\n\nimg {\n  max-width: 100%; }\n\nbody {\n  font-family: Roboto, Helvetica, Arial, sans-serif; }\n\nbutton {\n  color: inherit;\n  font-size: inherit;\n  font-family: Roboto, Helvetica, Arial, sans-serif;\n  border: 0;\n  padding: 0;\n  background-color: transparent; }\n\n.hidden, #templates, .app-screen:not(.active) {\n  display: none !important; }\n\n.invisible {\n  visibility: hidden !important; }\n\n.no-overflow, #wrapper, .app-screen {\n  overflow: hidden; }\n\n.unselectable {\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n\n#wrapper {\n  position: fixed;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%; }\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"../fonts/Roboto-Light.woff\") format(\"woff\");\n  font-weight: 300;\n  font-style: normal; }\n\n@font-face {\n  font-family: Roboto;\n  src: url(\"../fonts/Roboto-Regular.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n@font-face {\n  font-family: 'fontello';\n  src: url(\"../fonts/fontello.woff\") format(\"woff\");\n  font-weight: 400;\n  font-style: normal; }\n\n[class^=\"icon-\"]:before, [class*=\" icon-\"]:before {\n  font-family: \"fontello\";\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;\n  /* Preferred icon size */\n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n  /* Support for all WebKit browsers. */\n  -webkit-font-smoothing: antialiased;\n  /* Support for Safari and Chrome. */\n  text-rendering: optimizeLegibility;\n  /* Support for Firefox. */\n  -moz-osx-font-smoothing: grayscale;\n  /* Support for IE. */\n  font-feature-settings: 'liga'; }\n\n.icon-off:before {\n  content: '\\e800'; }\n\n.led-button {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  width: 35.55vw;\n  height: 35.55vw;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  border: 1.5vw solid currentColor;\n  border-radius: 50%; }\n  #wrapper[data-color=\"white\"] .led-button {\n    color: #606060; }\n  #wrapper:not([data-color=\"white\"]) .led-button.active {\n    box-shadow: 0 0 5px currentColor, inset 0 0 5px currentColor;\n    background-color: white;\n    color: white; }\n  .led-button:not(.active) {\n    color: white; }\n  .led-button.active {\n    background-color: #606060; }\n  #wrapper[data-color=\"white\"] .led-button::after, .led-button.active::after {\n    color: #606060; }\n  #wrapper[data-color=\"white\"] .led-button.active::after {\n    color: white; }\n  .led-button::after {\n    font-family: 'fontello';\n    content: '\\e800';\n    font-size: 16vw;\n    color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n    -moz-transform: translateX(-50%) translateY(-50%);\n    -ms-transform: translateX(-50%) translateY(-50%);\n    -o-transform: translateX(-50%) translateY(-50%);\n    transform: translateX(-50%) translateY(-50%); }\n\n.flashcontrol {\n  position: absolute;\n  top: 75%;\n  left: 12.5%;\n  display: block; }\n\n.flashbutton_left {\n  position: absolute;\n  left: 3vw;\n  width: 44px;\n  height: 44px;\n  background-image: url(../img/flash.svg); }\n  #wrapper[data-color=\"white\"] .flashbutton_left:not(.active) {\n    background-image: url(../img/flash_black.svg); }\n  .flashbutton_left.active {\n    background-image: url(../img/flash_active.svg); }\n\n.flashbutton_right {\n  position: absolute;\n  left: 61vw;\n  width: 44px;\n  height: 44px;\n  background-image: url(../img/flash.svg); }\n  #wrapper[data-color=\"white\"] .flashbutton_right:not(.active) {\n    background-image: url(../img/flash_black.svg); }\n  .flashbutton_right.active {\n    background-image: url(../img/flash_active.svg); }\n\n.brightness-control .alignleft {\n  position: relative;\n  float: left;\n  font-size: 14px;\n  color: #333333;\n  top: 148vw;\n  margin-left: 7vw;\n  font-weight: 500; }\n\n.brightness-control .alignright {\n  position: relative;\n  float: right;\n  font-size: 14px;\n  color: #333333;\n  top: 148vw;\n  margin-right: 7vw;\n  font-weight: 500; }\n\n.brightness-control .nxprange {\n  position: absolute;\n  top: 90%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  -webkit-appearance: none;\n  background-color: transparent;\n  width: 100%;\n  color: red; }\n  .brightness-control .nxprange:focus {\n    outline: none; }\n  .brightness-control .nxprange::-webkit-slider-runnable-track {\n    background: -webkit-linear-gradient(90deg, transparent, transparent 7%, rgba(0, 0, 0, 0.26) 7%, rgba(0, 0, 0, 0.26) 93%, transparent 93%, transparent);\n    background: linear-gradient(90deg, transparent, transparent 7%, rgba(0, 0, 0, 0.26) 7%, rgba(0, 0, 0, 0.26) 93%, transparent 93%, transparent);\n    width: 100%;\n    height: 2px;\n    cursor: pointer;\n    animate: 0.2s;\n    box-shadow: none; }\n  .brightness-control .nxprange::before {\n    display: block;\n    height: 2px;\n    content: '';\n    background: #000000;\n    top: 0px;\n    right: 50%;\n    position: absolute;\n    width: 43%; }\n  .brightness-control .nxprange::-webkit-slider-thumb {\n    position: relative;\n    top: -29px;\n    box-shadow: none;\n    border-style: none;\n    background: -webkit-radial-gradient(circle, black, black 14%, transparent 14%, transparent);\n    background: radial-gradient(circle, black, black 14%, transparent 14%, transparent);\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n    -webkit-appearance: none;\n    cursor: pointer;\n    z-index: 1; }\n\n.onoffswitch {\n  position: absolute;\n  left: 32vw;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  width: 44px;\n  height: 44px; }\n  .onoffswitch .checkbox {\n    display: none; }\n    .onoffswitch .checkbox:checked + .switch-label {\n      background-color: rgba(0, 0, 0, 0.5);\n      border-radius: 3px; }\n    #wrapper:not([data-color=\"white\"]) .onoffswitch .checkbox + .switch-label::before {\n      background-image: url(../img/lock.svg); }\n    #wrapper:not([data-color=\"white\"]) .onoffswitch .checkbox:checked + .switch-label::before {\n      background-image: url(../img/lock_active.svg); }\n    #wrapper[data-color=\"white\"] .onoffswitch .checkbox:checked + .switch-label:before {\n      background-image: url(../img/lock_active.svg); }\n  .onoffswitch .switch-label {\n    display: block;\n    position: relative;\n    overflow: hidden;\n    width: 44px;\n    height: 44px; }\n    .onoffswitch .switch-label::before {\n      content: \"\";\n      display: block;\n      position: relative;\n      top: 50%;\n      left: 50%;\n      -webkit-transform: translateX(-50%) translateY(-50%);\n      -moz-transform: translateX(-50%) translateY(-50%);\n      -ms-transform: translateX(-50%) translateY(-50%);\n      -o-transform: translateX(-50%) translateY(-50%);\n      transform: translateX(-50%) translateY(-50%);\n      width: 24px;\n      height: 24px;\n      background-image: url(../img/lock_black.svg);\n      background-repeat: no-repeat;\n      background-size: auto 100%; }\n\n.color-control {\n  position: absolute;\n  width: 100%;\n  height: 20vw;\n  left: 0;\n  bottom: 0;\n  color: white;\n  display: flex;\n  align-content: stretch; }\n  .color-control button {\n    flex-grow: 1;\n    margin: 0;\n    border-radius: 0; }\n\n.wheel {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  -moz-transform: translateX(-50%) translateY(-50%);\n  -ms-transform: translateX(-50%) translateY(-50%);\n  -o-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  width: 100%;\n  z-index: -1; }\n\n.wrapper[data-color='white'] {\n  color: white; }\n\n.wrapper[data-color='red'] {\n  color: #ff4646; }\n\n.wrapper[data-color='green'] {\n  color: #40d78b; }\n\n.wrapper[data-color='blue'] {\n  color: #00bfde; }\n\n.wrapper[data-color='yellow'] {\n  color: #fbec00; }\n",".led-button {\n  @include position(absolute, 50% null null 50%);\n  @include transform(translateX(-50%) translateY(-50%));\n  width: 35.55vw; height: 35.55vw;\n  background-size: 100%;\n  background-repeat: no-repeat;\n  border: 1.5vw solid currentColor;\n  border-radius: 50%;\n \n \n  #wrapper[data-color=\"white\"] & {\n    color: #606060;;\n  }\n  #wrapper:not([data-color=\"white\"]) &.active {\n    box-shadow: 0 0 5px currentColor, inset 0 0 5px currentColor;\n    background-color:white;\n    color:$white;\n  }\n  &:not(.active) {\n    color: $white;\n  }\n  &.active{\n    background-color:#606060;;\n  }\n  \n  #wrapper[data-color=\"white\"] &::after, &.active::after {\n    color:#606060;;\n  }\n  #wrapper[data-color=\"white\"] &.active::after {\n  color: white;;\n  }\n\n  &::after {\n    font-family: 'fontello';\n    content: '\\e800';\n    font-size: 16vw;\n    color: white;\n    @include position(absolute, 50% null null 50%);\n    @include transform(translateX(-50%) translateY(-50%));\n  }\n}\n",".flashcontrol {\n  @include position(absolute, 75% null null 12.5%);\n  display: block;\n}\n\n.flashbutton_left {\n@include flashplace(3vw);\n#wrapper[data-color=\"white\"] &:not(.active) {\n  background-image: url(../img/flash_black.svg);\n}\n\n&.active {\n  background-image: url(../img/flash_active.svg);\n}\n\n}\n\n.flashbutton_right {\n@include flashplace(61vw);\n#wrapper[data-color=\"white\"] &:not(.active) {\n  background-image: url(../img/flash_black.svg);\n}\n&.active {\n  background-image: url(../img/flash_active.svg);\n}\n}",".brightness-control {\n\n  .alignleft {\n    position:relative;\n    float:left;\n    font-size: 14px;\n    color:#333333;\n    top: 148vw;\n    margin-left:7vw;\n    font-weight:500;\n\n  }\n  .alignright {\n    position:relative;\n    float:right;\n    font-size:14px;\n    color:#333333;\n    top:148vw;\n    margin-right:7vw;\n    font-weight:500;\n  }\n  .nxprange {\n    @include position(absolute, 90% null null 50%);\n    @include transform(translateX(-50%) translateY(-50%));\n    -webkit-appearance: none;\n    background-color: transparent;\n    width: 100%;\n    color: red;\n    \n    \n    &:focus {\n      outline: none;\n    }\n    \n    &::-webkit-slider-runnable-track {\n      background: -webkit-linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0) 7%, rgba(0,0,0,0.26) 7%, rgba(0,0,0,0.26) 93%,rgba(0,0,0,0) 93%, rgba(0,0,0,0));\n      background: linear-gradient(90deg, rgba(0,0,0,0), rgba(0,0,0,0) 7%, rgba(0,0,0,0.26) 7%, rgba(0,0,0,0.26) 93%,rgba(0,0,0,0) 93%, rgba(0,0,0,0));\n      width: 100%;\n      height: 2px;\n      cursor: pointer;\n      animate: 0.2s;\n      box-shadow: none;\n    }\n\n    &::before {\n      display:block;\n      height:2px;\n      content:'';\n      background:#000000;\n      top:0px;\n      right: 50%;\n      position:absolute;\n      width: 43%;\n    }\n\n    &::-webkit-slider-thumb {\n      position: relative;\n      top:-29px;\n      box-shadow: none;\n      border-style: none;\n      background: -webkit-radial-gradient(circle, black, black 14%, rgba(0,0,0,0) 14%, rgba(0,0,0,0));\n      background: radial-gradient(circle, black, black 14%, rgba(0,0,0,0) 14%, rgba(0,0,0,0));\n      width: 60px;\n      height: 60px;\n      border-radius: 50%;\n      -webkit-appearance: none;\n      cursor: pointer;\n      z-index: 1;\n    }\n  }\n}",".onoffswitch {\n  position:absolute;\n  left: 32vw;\n  -webkit-user-select:none; \n  -moz-user-select:none;\n  -ms-user-select: none;\n  width:44px;\n  height:44px;\n\n\n  .checkbox {\n    display: none;\n    &:checked + .switch-label{\n    background-color: rgba(0,0,0,0.50);\n    border-radius:3px;\n    }\n    \n    #wrapper:not([data-color=\"white\"]) & + .switch-label::before {\n     background-image: url(../img/lock.svg);\n    }\n\n    #wrapper:not([data-color=\"white\"]) &:checked + .switch-label::before {\n    background-image: url(../img/lock_active.svg);\n    }\n    \n\n    #wrapper[data-color=\"white\"] &:checked + .switch-label:before {\n    background-image: url(../img/lock_active.svg);\n    }\n\n  }\n\n  .switch-label {\n    display: block; \n    position: relative;\n    overflow: hidden; \n    width:44px;\n    height:44px; \n    \n\n    &::before {\n      content:\"\";\n      display: block; \n      position: relative;\n      top:50%;\n      left:50%;\n      @include transform(translateX(-50%) translateY(-50%));\n      width:24px;\n      height:24px; \n      background-image: url(../img/lock_black.svg);\n      background-repeat: no-repeat;\n      background-size: auto 100%;\n    }\n  }\n}\n\n\n",".color-control {\n  position:absolute;\n  width: 100%;\n  height:20vw;\n  left:0;\n  bottom:0;\n  color: $text-color;\n  display:flex;\n  align-content: stretch;\n\n\n    button {\n     flex-grow: 1;\n     margin: 0;\n     border-radius: 0;\n    }\n\n}\n",".wheel {\n  @include position(absolute, 50% null null 50%);\n  @include transform(translateX(-50%) translateY(-50%));\n  width:100%;\n  z-index: -1;\n}",".wrapper {\n  &[data-color='white'] {\n    color: $white;\n  }\n  &[data-color='red'] {\n    color: $red;\n  }\n  &[data-color='green'] {\n    color: $green;\n  }\n  &[data-color='blue'] {\n    color: $blue;\n  }\n  &[data-color='yellow'] {\n    color: $yellow;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/reset-css/reset.css":
/*!******************************************!*\
  !*** ./node_modules/reset-css/reset.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../css-loader!./reset.css */ "./node_modules/css-loader/index.js!./node_modules/reset-css/reset.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/webview-tile-header/WebViewTileHeader.js":
/*!***************************************************************!*\
  !*** ./node_modules/webview-tile-header/WebViewTileHeader.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* Event system */
if(typeof NexpaqEvent == "undefined") {
	// Event with name and callbacks
	window.NexpaqEvent = function(name) {
		this.name = name;
		this.callbacks = [];
	};

	// We can register callbacks for our event
	NexpaqEvent.prototype.registerCallback = function(callback){
		this.callbacks.push(callback);
	};

	// We can remove callbacks for our event
	NexpaqEvent.prototype.removeCallback = function(callback){
		var index = this.callbacks.indexOf(callback);
		if(index >= 0) {
			this.callbacks.splice(index, 1);
		}
	};
}

var NexpaqHeader = {
	version: '1.0.9',
	Events: {
		BackButtonClicked: new NexpaqEvent('BackButtonClicked')
	},
	_node: null,
	_buttons: null,
	_backButton: null,
	_title: '',
	_titleArray: [],

	addEventListener: function(eventName, callback) {
		this.Events[eventName].registerCallback(callback);
	},

	removeEventListener: function(eventName, callback) {
		this.Events[eventName].removeCallback(callback);
	},

	dispatchEvent: function(eventName, eventArgs) {
		this.Events[eventName].callbacks.forEach(function(callback){
			callback(eventArgs);
		});
	},

	_detectCurrentPlatform : function() {
		var platform = (function getMobileOperatingSystem() {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;
			// Windows Phone must come first because its UA also contains "Android"
			if (/windows phone/i.test(userAgent)) {
				return "winphone";
			}

			if (/android/i.test(userAgent)) {
				return "android";
			}

			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				return "ios";
			}

			return "unknown";
		})();

		document.body.classList.add('platform-' + platform);
		console.log("platform is: " + platform);
	},

	_backButtonClickHandler: function(e) {
		console.log("back button clicked");
	},

	exists: function() {
		return this._node != null;
	},

	create: function(title, root) {
		title = title || '';
		root = root || document.body;
		if(this.exists()) throw "NexpaqHeader already exists!";

		this._title = title;

		// HTML
		var node = document.createElement('div');
		node.id = 'nexpaq-header';
		node.innerHTML = atob(nxp_header_html);
		node.children[0].textContent = this._title;
		var header = this;
		node.children[1].addEventListener('click', function(e) {
			header._backButtonClickHandler();
			header.dispatchEvent('BackButtonClicked', e);
		});
		
		this._node = node;
		root.insertBefore(this._node, null);
		this._buttons = document.getElementById('nxp-buttons-container');
		this._backButton = document.getElementById('nxp-button-back');

		// CSS
		var header_style = document.createElement('style');
		header_style.appendChild(document.createTextNode(''));
		header_style.textContent = atob(nxp_header_css);
		document.head.appendChild(header_style);
	},

	/**
	 * Show header
	 * @param {string} title [title to be shown in header]
	 * @return {void}
	 */
	show: function() {
		if(!this.exists()) {
			this.create();
		}
		
		this.node.classList.remove('nxp-hidden');
	},

	setTitle: function(title) {
		title = title || '';
		this._title = title;

		this._node.children[0].textContent = this._title;
	},

	/**
	 * Hide header
	 * @return {void}
	 */
	hide: function() {
		if(this.exists()) this.node.classList.add('nxp-hidden');
	},

	remove: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";

		this._node.parentNode.removeChild(this._node);
	},

	/**
	 * Show shadow of header
	 * @return {void}
	 */
	showShadow: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		this._node.classList.remove('nxp-no-shadow');
	},
	/**
	 * Hide shadow of header
	 * @return {void}
	 */
	hideShadow: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		this._node.classList.add('nxp-no-shadow');
	},
	/**
	 * Add new button to header
	 * @param {string} settings [can be a simple url to icon image]
	 * @param {object} settings [or an object with optional fields title and image]
	 * @param {function} handler [js function to handle button tap event]
	 * @return {void}
	 */
	addButton: function(settings, handler) {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		var default_settings = {
			id: null,
			title: 'action',
			image: null,
			width: null,
			height: null,
			number: 0
		};

		settings = settings || default_settings;

		var button = document.createElement('button');
		// We can assign ID to button so we can refer to it in future
		if(settings.id != null) {
			button.id = settings.id;
		}
		// We can set title to our button with or instead of image
		if(settings.title != null) {
			button.textContent = settings.title;
		}
		// We can set number of notifications for the button on creation
		if(settings.number != null) {
			var number = document.createElement('div');
			number.classList.add('nxp-button-number');
			var value = parseInt(settings.number);
			number.textContent = value == 0 ? '' : value;

			button.insertBefore(number, null);
		}		
		// We can set image for our button
		if(settings.image != null) {
			var image = document.createElement('img');
			image.src = settings.image;
			// And specify custom with and\or height for it
			if(settings.width != null) image.width = settings.width;
			if(settings.height != null) image.height = settings.height;
			
			button.insertBefore(image, null);
		}
		

		// insterting created button
		button.addEventListener('click', handler);
		this._buttons.insertBefore(button, null);
	},
	/**
	 * Make buttons of header untappable
	 * @return {void}
	 */
	disableButtons: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		this._buttons.classList.add('nxp-buttons-container--disabled');
	},
	/**
	 * Enable buttons of header back and make them tappable
	 * @return {void}
	 */
	enableButtons: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		this._buttons.classList.remove('nxp-buttons-container--disabled');
	},
	/**
	 * Remeve all buttons from header
	 * @return {void}
	 */
	cleanButtons: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		this._buttons.innerHTML = '';
	},

	/**
	 * Add new button to header
	 * @param {string} id [id of button, can be set during button creation]
	 * @param {int} number [number to show for button, 0 is hidden]
	 * @return {void}
	 */
	setButtonNumber: function(id, number) {
		var button = document.getElementById(id);
		if(button == null) throw "Cannot find button with specified ID";

		var number = button.children[0];
		var value = parseInt(number);

		number.textContent = value == 0 ? '' : value
	},
	/**
	 * Make back button invisible
	 * @return {void}
	 */
	hideBackButton: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";
		
		this._node.classList.add('nxp-back-button-hidden');
		this._backButton.classList.add('nxp-hidden');
	},
	/**
	 * Make back button visible
	 * @return {void}
	 */
	showBackButton: function() {
		if(!this.exists()) throw "NexpaqHeader not exists!";

		this._node.classList.remove('nxp-back-button-hidden');
		this._backButton.classList.remove('nxp-hidden');
	},
	
	/**
	 * Set custom icon for back button
	 * @param {string} icon [url of icon to be used instead of default icon]
	 * @return {void}
	 */
	setBackButtonIcon: function(icon) {
		if(!this.exists()) throw "NexpaqHeader not exists!";

		var image = this._node.getElementsByClassName('npx-button-back-custom')[0];
		image.src = icon;

		this._node.classList.add('nxp-custom-back-button');
	},
	/**
	 * Restore standard icon for back button
	 * @return {void}
	 */
	resetBackButtonIcon: function() {
		this._node.classList.remove('nxp-custom-back-button');
	},
	/**
	* @param {object} {
		color: {string},
		backgroundColor: {string},
		opacity: {number} (0.0-1.0),
		borderBottom(box-shadow): {string},
		iconColor: {string}
	}
	*/
	customize: function(data) {
		if(!this.exists()) throw "NexpaqHeader not exists!";

		if(typeof data !== "object") {
			throw "Data must be an object";
		} else {
			if(data.hasOwnProperty('color')) {
				if(typeof data.color !== "string") {throw "Color has to be string."}
				this._node.style.color = data.color;
			}
			if(data.hasOwnProperty('backgroundColor')) {
				if(typeof data.backgroundColor !== "string") {throw "Background color has to be string."}
				this._node.style.backgroundColor = data.backgroundColor;
			}
			if(data.hasOwnProperty('opacity')) {
				if(typeof data.opacity !== "number" || data.opacity < 0.0 || data.opacity > 1.0) {throw "Opacity has to be number and needs to be between 0.0 - 1.0"};
				this._node.style.opacity = data.opacity;
			}
			if(data.hasOwnProperty('borderBottom')) {
				if(typeof data.borderBottom !== "string") {throw "Border-bottom has to be string."}
				document.querySelector("#nexpaq-header:not(.nxp-no-shadow)").style.boxShadow = data.borderBottom;
			}
			if(data.hasOwnProperty('iconColor')) {
				if(typeof data.iconColor !== "string") {throw "Icon color has to be string."}
				if (document.getElementsByTagName('body')[0].classList.contains("platform-android")) {
					document.querySelector('.nxp-svg-shape').setAttribute("fill",data.iconColor);
				}
				if (document.getElementsByTagName('body')[0].classList.contains("platform-ios")) {
					document.getElementById("Combined-Shape").setAttribute("fill",data.iconColor);
				}
			}
		}
	}
};

// If header initialized after API just plugging in, otherwise creating main Nexpaq object
if(typeof(Nexpaq) != 'undefined') {
	Nexpaq.Header = NexpaqHeader;
} else {
	window.Nexpaq = {
		Header: NexpaqHeader
	};
}

// Nexpaq.API will call 'NexpaqAPIReady function when it is ready, turning it into document event
var NexpaqAPIReadyEvent = new Event('NexpaqAPIReady');
window.NexpaqAPIReady = function() {
	document.dispatchEvent(NexpaqAPIReadyEvent);
}

// When API is ready it can override main Nexpaq object we initialized, so plugging back
document.addEventListener('NexpaqAPIReady', function(event) {
	Nexpaq.Header = NexpaqHeader;
	Nexpaq.API.addEventListener('HardwareBackButtonPressed', function() {
		NexpaqHeader.dispatchEvent('BackButtonClicked', {
			source: 'HardwareBackButtonPressed'
		});
	});
});

document.addEventListener('DOMContentLoaded', function(event) {
	NexpaqHeader._detectCurrentPlatform();
	var injector_js = atob(svg_injector);
	eval(injector_js);
});

// Default back button handler tries to close current instance, 
// if there are any other callback for back button click, it will do nothing
NexpaqHeader.addEventListener('BackButtonClicked', function(event) {
	if(NexpaqHeader.Events.BackButtonClicked.callbacks.length > 1) return;
	Nexpaq.API.Exit();
});


// =========== nexpaq header built-in resources ====
var nxp_header_html = 'PGgxPlRpdGxlPC9oMT4gPGJ1dHRvbiBjbGFzcz1ueHAtYnRuLWJhY2sgaWQ9bnhwLWJ1dHRvbi1iYWNrPiA8c3ZnIHdpZHRoPTEycHggaGVpZ2h0PTE1cHggdmlld0JveD0iOCAzNSAxMiAxNSIgY2xhc3M9bnhwLWJ1dHRvbi1iYWNrLWlvcz4gPHBhdGggZD0iTTEwLjAxNTg3MDMsNDEuOTkwNDg4MyBDOS45NjIyNTM3LDQxLjYwMDI4MjggMTAuMDg0NzY1OSw0MS4xOTA5NDY5IDEwLjM3OTgyNTQsNDAuODk1ODg3MyBMMTUuODk1ODg3MywzNS4zNzk4MjU0IEMxNi40MDE2MTgyLDM0Ljg3NDA5NDUgMTcuMjE5MjU0OSwzNC44NzE3Nzk0IDE3LjczMDAyODYsMzUuMzgyNTUzMSBDMTguMjM3MjY1OSwzNS44ODk3OTA0IDE4LjIzMjM3ODksMzYuNzE3MDcxNiAxNy43MzI3NTYyLDM3LjIxNjY5NDMgTDEyLjk0NzY0MjQsNDIuMDAxODA4MiBMMTcuNzMyNzU2Miw0Ni43ODY5MjIgQzE4LjIzODQ4NzEsNDcuMjkyNjUyOSAxOC4yNDA4MDIzLDQ4LjExMDI4OTYgMTcuNzMwMDI4Niw0OC42MjEwNjMzIEMxNy4yMjI3OTEzLDQ5LjEyODMwMDYgMTYuMzk1NTEsNDkuMTIzNDEzNSAxNS44OTU4ODczLDQ4LjYyMzc5MDkgTDEwLjM3OTgyNTQsNDMuMTA3NzI5IEMxMC4wNzU0MzI0LDQyLjgwMzMzNTkgOS45NTM0MTA5NCw0Mi4zODU5NDkyIDEwLjAxNTg3MDMsNDEuOTkwNDg4MyBaIiBpZD1Db21iaW5lZC1TaGFwZSBzdHJva2U9bm9uZSBmaWxsPSNEMDJFM0QgZmlsbC1ydWxlPWV2ZW5vZGQ+PC9wYXRoPiA8L3N2Zz4gPHN2ZyB3aWR0aD0xNnB4IGhlaWdodD0xNnB4IHZpZXdCb3g9IjAgMCAxNiAxNiIgY2xhc3M9bnhwLWJ1dHRvbi1iYWNrLWFuZHJvaWQ+IDxwb2x5Z29uIGNsYXNzPW54cC1zdmctc2hhcGUgdHJhbnNmb3JtPXRyYW5zbGF0ZSgtNCwtNCkgZmlsbC1ydWxlPWV2ZW5vZGQgZmlsbD0jRDAyRTNEIHBvaW50cz0iMjAgMTEgNy44IDExIDEzLjQgNS40IDEyIDQgNCAxMiAxMiAyMCAxMy40IDE4LjYgNy44IDEzIDIwIDEzIj48L3BvbHlnb24+IDwvc3ZnPiA8aW1nIHNyYz0iIiBjbGFzcz1ucHgtYnV0dG9uLWJhY2stY3VzdG9tPiA8L2J1dHRvbj4gPGRpdiBjbGFzcz1ueHAtYnV0dG9ucy1jb250YWluZXIgaWQ9bnhwLWJ1dHRvbnMtY29udGFpbmVyPjwvZGl2PiA8dWwgY2xhc3M9bnhwLWhlYWRlci10aXRsZXMgaWQ9bnhwLWhlYWRlci10aXRsZXM+PC91bD4g';
var nxp_header_css = 'I25leHBhcS1oZWFkZXJ7ei1pbmRleDoxMDAwMDtwb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7d2lkdGg6MTAwdnc7aGVpZ2h0OjQ0cHg7cGFkZGluZzowO2ZvbnQtc2l6ZToxNnB4O2ZvbnQtd2VpZ2h0Om5vcm1hbDtsaW5lLWhlaWdodDo0NHB4O2NvbG9yOiM2MDYwNjA7Zm9udC1mYW1pbHk6Um9ib3RvLCJSb2JvdG8gUmVndWxhciIsVGFob21hLHNhbnMtc2VyaWY7dGV4dC1hbGlnbjpyaWdodDtiYWNrZ3JvdW5kLWNvbG9yOndoaXRlOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfWJvZHkucGxhdGZvcm0taW9zICNuZXhwYXEtaGVhZGVyOm5vdCgubnhwLW5vLXNoYWRvdyl7Ym9yZGVyLWNvbG9yOiNjOGM3Y2M7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDowIDAgLjVweCAwfWJvZHkucGxhdGZvcm0tYW5kcm9pZCAjbmV4cGFxLWhlYWRlcntoZWlnaHQ6NTVweDtwYWRkaW5nOjAgM3Z3O2xpbmUtaGVpZ2h0OjU1cHg7Y29sb3I6IzYwNjA2MDtmb250LXNpemU6MTVweDtmb250LXdlaWdodDozMDB9Ym9keS5wbGF0Zm9ybS1hbmRyb2lkICNuZXhwYXEtaGVhZGVyOm5vdCgubnhwLW5vLXNoYWRvdyl7Ym94LXNoYWRvdzowIDJweCA0cHggcmdiYSgwLDAsMCwwLjEyKX0jbmV4cGFxLWhlYWRlciBzdmd7d2lkdGg6YXV0b30jbmV4cGFxLWhlYWRlciwjbmV4cGFxLWhlYWRlciAqLCNuZXhwYXEtaGVhZGVyICogKntib3gtc2l6aW5nOmJvcmRlci1ib3h9I25leHBhcS1oZWFkZXIubnhwLWhpZGRlbiwjbmV4cGFxLWhlYWRlciAubnhwLWhpZGRlbntkaXNwbGF5Om5vbmV9I25leHBhcS1oZWFkZXIgYnV0dG9ue3BhZGRpbmc6MDttYXJnaW46MDtiYWNrZ3JvdW5kOjA7Ym9yZGVyOjA7b3V0bGluZTowfSNuZXhwYXEtaGVhZGVyPmgxe3otaW5kZXg6LTE7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7bWFyZ2luOjA7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjE3cHg7bGluZS1oZWlnaHQ6aW5oZXJpdDt0ZXh0LXRyYW5zZm9ybTppbmhlcml0O2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NDAwO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnR9Ym9keS5wbGF0Zm9ybS1hbmRyb2lkICNuZXhwYXEtaGVhZGVyPmgxe3RleHQtYWxpZ246bGVmdDtmb250LXNpemU6MjBweDtwYWRkaW5nLWxlZnQ6NzBweH1ib2R5LnBsYXRmb3JtLWFuZHJvaWQgI25leHBhcS1oZWFkZXIubnhwLWJhY2stYnV0dG9uLWhpZGRlbj5oMXtwYWRkaW5nLWxlZnQ6MTZweH0jbmV4cGFxLWhlYWRlciAubnhwLWJ0bi1iYWNre3BhZGRpbmc6MCAzdncgIWltcG9ydGFudDtsaW5lLWhlaWdodDppbmhlcml0fWJvZHk6bm90KC5wbGF0Zm9ybS1hbmRyb2lkKSAjbmV4cGFxLWhlYWRlciAubnhwLWJ1dHRvbi1iYWNrLWFuZHJvaWQsYm9keS5wbGF0Zm9ybS1hbmRyb2lkICNuZXhwYXEtaGVhZGVyIC5ueHAtYnV0dG9uLWJhY2staW9ze2Rpc3BsYXk6bm9uZX1ib2R5LnBsYXRmb3JtLWFuZHJvaWQgI25leHBhcS1oZWFkZXIgLm54cC1idG4tYmFjayBzdmd7bWFyZ2luLXRvcDotNHB4fSNuZXhwYXEtaGVhZGVyIC5ucHgtYnV0dG9uLWJhY2stY3VzdG9te2Rpc3BsYXk6bm9uZX0jbmV4cGFxLWhlYWRlci5ueHAtY3VzdG9tLWJhY2stYnV0dG9uIC5ucHgtYnV0dG9uLWJhY2stY3VzdG9te2Rpc3BsYXk6aW5saW5lLWJsb2NrfSNuZXhwYXEtaGVhZGVyLm54cC1jdXN0b20tYmFjay1idXR0b24gLm54cC1idXR0b24tYmFjay1hbmRyb2lkLCNuZXhwYXEtaGVhZGVyLm54cC1jdXN0b20tYmFjay1idXR0b24gLm54cC1idXR0b24tYmFjay1pb3N7ZGlzcGxheTpub25lfSNuZXhwYXEtaGVhZGVyIC5ueHAtYnV0dG9ucy1jb250YWluZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2t9I25leHBhcS1oZWFkZXIgLm54cC1idXR0b25zLWNvbnRhaW5lci5ueHAtYnV0dG9ucy1jb250YWluZXItLWRpc2FibGVke29wYWNpdHk6LjM7cG9pbnRlci1ldmVudHM6bm9uZX0jbmV4cGFxLWhlYWRlciAubnhwLWJ1dHRvbnMtY29udGFpbmVyPmJ1dHRvbntsaW5lLWhlaWdodDppbmhlcml0O3BhZGRpbmc6MCA0dncgIWltcG9ydGFudDtwb3NpdGlvbjpyZWxhdGl2ZX1ib2R5LnBsYXRmb3JtLWlvcyAjbmV4cGFxLWhlYWRlciAubnhwLWJ1dHRvbnMtY29udGFpbmVyPmJ1dHRvbntjb2xvcjojZDAyZTNkO2ZvbnQtc2l6ZToxN3B4fSNuZXhwYXEtaGVhZGVyIC5ueHAtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uIC5ueHAtYnV0dG9uLW51bWJlcntwb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3RyYW5zZm9ybTp0cmFuc2xhdGVYKDE1JSkgdHJhbnNsYXRlWSgtODUlKTtwYWRkaW5nLXJpZ2h0OjFweDtkaXNwbGF5OmZsZXg7anVzdGlmeS1jb250ZW50OmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7aGVpZ2h0OjE4cHg7bWluLXdpZHRoOjE4cHg7Ym9yZGVyOjJweCBzb2xpZCB3aGl0ZTtib3JkZXItcmFkaXVzOjlweDtiYWNrZ3JvdW5kLWNvbG9yOiMwMWNmOWY7Zm9udC1zaXplOjEwcHg7Y29sb3I6d2hpdGU7bGluZS1oZWlnaHQ6MWVtfSNuZXhwYXEtaGVhZGVyIC5ueHAtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uIC5ueHAtYnV0dG9uLW51bWJlcjplbXB0eXtkaXNwbGF5Om5vbmV9I25leHBhcS1oZWFkZXIgLm54cC1idXR0b25zLWNvbnRhaW5lcj5idXR0b246bGFzdC1jaGlsZHtwYWRkaW5nLXJpZ2h0OjN2dyAhaW1wb3J0YW50fSNuZXhwYXEtaGVhZGVyIC5ueHAtYnRuLWJhY2sgc3ZnLCNuZXhwYXEtaGVhZGVyIC5ueHAtYnRuLWJhY2sgaW1nLCNuZXhwYXEtaGVhZGVyIC5ueHAtYnV0dG9ucy1jb250YWluZXI+YnV0dG9uPnN2ZywjbmV4cGFxLWhlYWRlciAubnhwLWJ1dHRvbnMtY29udGFpbmVyPmJ1dHRvbj5pbWd7dmVydGljYWwtYWxpZ246bWlkZGxlfSNuZXhwYXEtaGVhZGVyIC5ueHAtYnRuLWJhY2t7ZmxvYXQ6bGVmdDttYXgtd2lkdGg6NDRweH0jbmV4cGFxLWhlYWRlci5tdWx0aS10aXRsZT5oMTo6YWZ0ZXJ7ZGlzcGxheTppbmxpbmUtYmxvY2s7Y29udGVudDonJzt3aWR0aDowO2hlaWdodDowO21hcmdpbi1sZWZ0OjEwcHg7Ym9yZGVyOjRweCBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItd2lkdGg6NXB4IDRweCAwO2JvcmRlci10b3AtY29sb3I6Y3VycmVudENvbG9yfSNuZXhwYXEtaGVhZGVyLm11bHRpLXRpdGxlLnRpdGxlLXNlbGVjdGluZz5oMTo6YWZ0ZXJ7Ym9yZGVyLXRvcDowO2JvcmRlci1ib3R0b206NXB4IHNvbGlkICM2MDYwNjB9I25leHBhcS1oZWFkZXIgLm54cC1oZWFkZXItdGl0bGVze3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbjowO2ZvbnQtc2l6ZToxN3B4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojNjA2MDYwO2JhY2tncm91bmQtY29sb3I6d2hpdGU7bGlzdC1zdHlsZTpub25lO3BhZGRpbmc6MCAwIDEwcHggMDt3aWR0aDoxMDB2dztoZWlnaHQ6Y2FsYygxMDB2aCAtIDQ0cHgpO21hcmdpbi1sZWZ0Oi0zdnd9I25leHBhcS1oZWFkZXIgLm54cC1oZWFkZXItdGl0bGVzIGxpe2xpbmUtaGVpZ2h0OjQ1cHg7cGFkZGluZzowIDN2dztib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZTRlNGU0fSNuZXhwYXEtaGVhZGVyIC50aXRsZS1zZWxlY3Rpbmd7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2U0ZTRlNH0jbmV4cGFxLWhlYWRlcjpub3QoLnRpdGxlLXNlbGVjdGluZykgLm54cC1oZWFkZXItdGl0bGVze2Rpc3BsYXk6bm9uZX0=';
var svg_injector = 'IWZ1bmN0aW9uKHQsZSl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIHIodCl7dD10LnNwbGl0KCIgIik7Zm9yKHZhciBlPXt9LHI9dC5sZW5ndGgsbj1bXTtyLS07KWUuaGFzT3duUHJvcGVydHkodFtyXSl8fChlW3Rbcl1dPTEsbi51bnNoaWZ0KHRbcl0pKTtyZXR1cm4gbi5qb2luKCIgIil9dmFyIG49ImZpbGU6Ij09PXQubG9jYXRpb24ucHJvdG9jb2wsaT1lLmltcGxlbWVudGF0aW9uLmhhc0ZlYXR1cmUoImh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjQmFzaWNTdHJ1Y3R1cmUiLCIxLjEiKSxvPUFycmF5LnByb3RvdHlwZS5mb3JFYWNofHxmdW5jdGlvbih0LGUpe2lmKHZvaWQgMD09PXRoaXN8fG51bGw9PT10aGlzfHwiZnVuY3Rpb24iIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yO3ZhciByLG49dGhpcy5sZW5ndGg+Pj4wO2ZvcihyPTA7bj5yOysrcilyIGluIHRoaXMmJnQuY2FsbChlLHRoaXNbcl0scix0aGlzKX0sYT17fSxsPTAscz1bXSx1PVtdLGM9e30sZj1mdW5jdGlvbih0KXtyZXR1cm4gdC5jbG9uZU5vZGUoITApfSxwPWZ1bmN0aW9uKHQsZSl7dVt0XT11W3RdfHxbXSx1W3RdLnB1c2goZSl9LGQ9ZnVuY3Rpb24odCl7Zm9yKHZhciBlPTAscj11W3RdLmxlbmd0aDtyPmU7ZSsrKSFmdW5jdGlvbihlKXtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dVt0XVtlXShmKGFbdF0pKX0sMCl9KGUpfSx2PWZ1bmN0aW9uKGUscil7aWYodm9pZCAwIT09YVtlXSlhW2VdaW5zdGFuY2VvZiBTVkdTVkdFbGVtZW50P3IoZihhW2VdKSk6cChlLHIpO2Vsc2V7aWYoIXQuWE1MSHR0cFJlcXVlc3QpcmV0dXJuIHIoIkJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBYTUxIdHRwUmVxdWVzdCIpLCExO2FbZV09e30scChlLHIpO3ZhciBpPW5ldyBYTUxIdHRwUmVxdWVzdDtpLm9ucmVhZHlzdGF0ZWNoYW5nZT1mdW5jdGlvbigpe2lmKDQ9PT1pLnJlYWR5U3RhdGUpe2lmKDQwND09PWkuc3RhdHVzfHxudWxsPT09aS5yZXNwb25zZVhNTClyZXR1cm4gcigiVW5hYmxlIHRvIGxvYWQgU1ZHIGZpbGU6ICIrZSksbiYmcigiTm90ZTogU1ZHIGluamVjdGlvbiBhamF4IGNhbGxzIGRvIG5vdCB3b3JrIGxvY2FsbHkgd2l0aG91dCBhZGp1c3Rpbmcgc2VjdXJpdHkgc2V0dGluZyBpbiB5b3VyIGJyb3dzZXIuIE9yIGNvbnNpZGVyIHVzaW5nIGEgbG9jYWwgd2Vic2VydmVyLiIpLHIoKSwhMTtpZighKDIwMD09PWkuc3RhdHVzfHxuJiYwPT09aS5zdGF0dXMpKXJldHVybiByKCJUaGVyZSB3YXMgYSBwcm9ibGVtIGluamVjdGluZyB0aGUgU1ZHOiAiK2kuc3RhdHVzKyIgIitpLnN0YXR1c1RleHQpLCExO2lmKGkucmVzcG9uc2VYTUwgaW5zdGFuY2VvZiBEb2N1bWVudClhW2VdPWkucmVzcG9uc2VYTUwuZG9jdW1lbnRFbGVtZW50O2Vsc2UgaWYoRE9NUGFyc2VyJiZET01QYXJzZXIgaW5zdGFuY2VvZiBGdW5jdGlvbil7dmFyIHQ7dHJ5e3ZhciBvPW5ldyBET01QYXJzZXI7dD1vLnBhcnNlRnJvbVN0cmluZyhpLnJlc3BvbnNlVGV4dCwidGV4dC94bWwiKX1jYXRjaChsKXt0PXZvaWQgMH1pZighdHx8dC5nZXRFbGVtZW50c0J5VGFnTmFtZSgicGFyc2VyZXJyb3IiKS5sZW5ndGgpcmV0dXJuIHIoIlVuYWJsZSB0byBwYXJzZSBTVkcgZmlsZTogIitlKSwhMTthW2VdPXQuZG9jdW1lbnRFbGVtZW50fWQoZSl9fSxpLm9wZW4oIkdFVCIsZSksaS5vdmVycmlkZU1pbWVUeXBlJiZpLm92ZXJyaWRlTWltZVR5cGUoInRleHQveG1sIiksaS5zZW5kKCl9fSxoPWZ1bmN0aW9uKGUsbixhLHUpe3ZhciBmPWUuZ2V0QXR0cmlidXRlKCJkYXRhLXNyYyIpfHxlLmdldEF0dHJpYnV0ZSgic3JjIik7aWYoIS9cLnN2Zy9pLnRlc3QoZikpcmV0dXJuIHZvaWQgdSgiQXR0ZW1wdGVkIHRvIGluamVjdCBhIGZpbGUgd2l0aCBhIG5vbi1zdmcgZXh0ZW5zaW9uOiAiK2YpO2lmKCFpKXt2YXIgcD1lLmdldEF0dHJpYnV0ZSgiZGF0YS1mYWxsYmFjayIpfHxlLmdldEF0dHJpYnV0ZSgiZGF0YS1wbmciKTtyZXR1cm4gdm9pZChwPyhlLnNldEF0dHJpYnV0ZSgic3JjIixwKSx1KG51bGwpKTphPyhlLnNldEF0dHJpYnV0ZSgic3JjIixhKyIvIitmLnNwbGl0KCIvIikucG9wKCkucmVwbGFjZSgiLnN2ZyIsIi5wbmciKSksdShudWxsKSk6dSgiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgU1ZHIGFuZCBubyBQTkcgZmFsbGJhY2sgd2FzIGRlZmluZWQuIikpfS0xPT09cy5pbmRleE9mKGUpJiYocy5wdXNoKGUpLGUuc2V0QXR0cmlidXRlKCJzcmMiLCIiKSx2KGYsZnVuY3Rpb24oaSl7aWYoInVuZGVmaW5lZCI9PXR5cGVvZiBpfHwic3RyaW5nIj09dHlwZW9mIGkpcmV0dXJuIHUoaSksITE7dmFyIGE9ZS5nZXRBdHRyaWJ1dGUoImlkIik7YSYmaS5zZXRBdHRyaWJ1dGUoImlkIixhKTt2YXIgcD1lLmdldEF0dHJpYnV0ZSgidGl0bGUiKTtwJiZpLnNldEF0dHJpYnV0ZSgidGl0bGUiLHApO3ZhciBkPVtdLmNvbmNhdChpLmdldEF0dHJpYnV0ZSgiY2xhc3MiKXx8W10sImluamVjdGVkLXN2ZyIsZS5nZXRBdHRyaWJ1dGUoImNsYXNzIil8fFtdKS5qb2luKCIgIik7aS5zZXRBdHRyaWJ1dGUoImNsYXNzIixyKGQpKTt2YXIgdj1lLmdldEF0dHJpYnV0ZSgic3R5bGUiKTt2JiZpLnNldEF0dHJpYnV0ZSgic3R5bGUiLHYpO3ZhciBoPVtdLmZpbHRlci5jYWxsKGUuYXR0cmlidXRlcyxmdW5jdGlvbih0KXtyZXR1cm4vXmRhdGEtXHdbXHdcLV0qJC8udGVzdCh0Lm5hbWUpfSk7by5jYWxsKGgsZnVuY3Rpb24odCl7dC5uYW1lJiZ0LnZhbHVlJiZpLnNldEF0dHJpYnV0ZSh0Lm5hbWUsdC52YWx1ZSl9KTt2YXIgZyxtLGIseSxBLHc9e2NsaXBQYXRoOlsiY2xpcC1wYXRoIl0sImNvbG9yLXByb2ZpbGUiOlsiY29sb3ItcHJvZmlsZSJdLGN1cnNvcjpbImN1cnNvciJdLGZpbHRlcjpbImZpbHRlciJdLGxpbmVhckdyYWRpZW50OlsiZmlsbCIsInN0cm9rZSJdLG1hcmtlcjpbIm1hcmtlciIsIm1hcmtlci1zdGFydCIsIm1hcmtlci1taWQiLCJtYXJrZXItZW5kIl0sbWFzazpbIm1hc2siXSxwYXR0ZXJuOlsiZmlsbCIsInN0cm9rZSJdLHJhZGlhbEdyYWRpZW50OlsiZmlsbCIsInN0cm9rZSJdfTtPYmplY3Qua2V5cyh3KS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2c9dCxiPXdbdF0sbT1pLnF1ZXJ5U2VsZWN0b3JBbGwoImRlZnMgIitnKyJbaWRdIik7Zm9yKHZhciBlPTAscj1tLmxlbmd0aDtyPmU7ZSsrKXt5PW1bZV0uaWQsQT15KyItIitsO3ZhciBuO28uY2FsbChiLGZ1bmN0aW9uKHQpe249aS5xdWVyeVNlbGVjdG9yQWxsKCJbIit0KycqPSInK3krJyJdJyk7Zm9yKHZhciBlPTAscj1uLmxlbmd0aDtyPmU7ZSsrKW5bZV0uc2V0QXR0cmlidXRlKHQsInVybCgjIitBKyIpIil9KSxtW2VdLmlkPUF9fSksaS5yZW1vdmVBdHRyaWJ1dGUoInhtbG5zOmEiKTtmb3IodmFyIHgsUyxrPWkucXVlcnlTZWxlY3RvckFsbCgic2NyaXB0Iiksaj1bXSxHPTAsVD1rLmxlbmd0aDtUPkc7RysrKVM9a1tHXS5nZXRBdHRyaWJ1dGUoInR5cGUiKSxTJiYiYXBwbGljYXRpb24vZWNtYXNjcmlwdCIhPT1TJiYiYXBwbGljYXRpb24vamF2YXNjcmlwdCIhPT1TfHwoeD1rW0ddLmlubmVyVGV4dHx8a1tHXS50ZXh0Q29udGVudCxqLnB1c2goeCksaS5yZW1vdmVDaGlsZChrW0ddKSk7aWYoai5sZW5ndGg+MCYmKCJhbHdheXMiPT09bnx8Im9uY2UiPT09biYmIWNbZl0pKXtmb3IodmFyIE09MCxWPWoubGVuZ3RoO1Y+TTtNKyspbmV3IEZ1bmN0aW9uKGpbTV0pKHQpO2NbZl09ITB9dmFyIEU9aS5xdWVyeVNlbGVjdG9yQWxsKCJzdHlsZSIpO28uY2FsbChFLGZ1bmN0aW9uKHQpe3QudGV4dENvbnRlbnQrPSIifSksZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChpLGUpLGRlbGV0ZSBzW3MuaW5kZXhPZihlKV0sZT1udWxsLGwrKyx1KGkpfSkpfSxnPWZ1bmN0aW9uKHQsZSxyKXtlPWV8fHt9O3ZhciBuPWUuZXZhbFNjcmlwdHN8fCJhbHdheXMiLGk9ZS5wbmdGYWxsYmFja3x8ITEsYT1lLmVhY2g7aWYodm9pZCAwIT09dC5sZW5ndGgpe3ZhciBsPTA7by5jYWxsKHQsZnVuY3Rpb24oZSl7aChlLG4saSxmdW5jdGlvbihlKXthJiYiZnVuY3Rpb24iPT10eXBlb2YgYSYmYShlKSxyJiZ0Lmxlbmd0aD09PSsrbCYmcihsKX0pfSl9ZWxzZSB0P2godCxuLGksZnVuY3Rpb24oZSl7YSYmImZ1bmN0aW9uIj09dHlwZW9mIGEmJmEoZSksciYmcigxKSx0PW51bGx9KTpyJiZyKDApfTsib2JqZWN0Ij09dHlwZW9mIG1vZHVsZSYmIm9iamVjdCI9PXR5cGVvZiBtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1leHBvcnRzPWc6ImZ1bmN0aW9uIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUoZnVuY3Rpb24oKXtyZXR1cm4gZ30pOiJvYmplY3QiPT10eXBlb2YgdCYmKHQuU1ZHSW5qZWN0b3I9Zyl9KHdpbmRvdyxkb2N1bWVudCk7';


/***/ }),

/***/ "./src/fonts/Roboto-Light.woff":
/*!*************************************!*\
  !*** ./src/fonts/Roboto-Light.woff ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/Roboto-Light.woff";

/***/ }),

/***/ "./src/fonts/Roboto-Regular.woff":
/*!***************************************!*\
  !*** ./src/fonts/Roboto-Regular.woff ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/Roboto-Regular.woff";

/***/ }),

/***/ "./src/fonts/fontello.woff":
/*!*********************************!*\
  !*** ./src/fonts/fontello.woff ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./fonts/fontello.woff";

/***/ }),

/***/ "./src/img/flash.svg":
/*!***************************!*\
  !*** ./src/img/flash.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/053aefd8acac31345d7eb706419c2c48.svg";

/***/ }),

/***/ "./src/img/flash_active.svg":
/*!**********************************!*\
  !*** ./src/img/flash_active.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/b00cfe37ad419f5939493ba8f39c774f.svg";

/***/ }),

/***/ "./src/img/flash_black.svg":
/*!*********************************!*\
  !*** ./src/img/flash_black.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/6fa53578130a7cf09d99e6631336b63b.svg";

/***/ }),

/***/ "./src/img/lock.svg":
/*!**************************!*\
  !*** ./src/img/lock.svg ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/a36d7c88557683322a704b71f77e5c6c.svg";

/***/ }),

/***/ "./src/img/lock_active.svg":
/*!*********************************!*\
  !*** ./src/img/lock_active.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/779a13811e9c9cd11928192438128177.svg";

/***/ }),

/***/ "./src/img/lock_black.svg":
/*!********************************!*\
  !*** ./src/img/lock_black.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/a087e2e2f279895f3c1608163651ab09.svg";

/***/ }),

/***/ "./src/img/picker_black.svg":
/*!**********************************!*\
  !*** ./src/img/picker_black.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/9e088d72988c4d99891357b8431a77d7.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! reset-css/reset.css */ "./node_modules/reset-css/reset.css");

__webpack_require__(/*! ./sass/styles.scss */ "./src/sass/styles.scss");

var _picker_black = __webpack_require__(/*! ./img/picker_black.svg */ "./src/img/picker_black.svg");

var _picker_black2 = _interopRequireDefault(_picker_black);

__webpack_require__(/*! webview-tile-header/WebViewTileHeader.js */ "./node_modules/webview-tile-header/WebViewTileHeader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  /* Revealing UI */
  //document.getElementById('wrapper').style.opacity = 1;

  Nexpaq.Header.create('LED');
  //Header Customization
  var headerStyles = {
    backgroundColor: '#FFFFFF',
    color: 'black',
    iconColor: 'black',
    borderBottom: 'none'
  };
  Nexpaq.Header.customize(headerStyles);
  Nexpaq.Header.addButton({ image: _picker_black2.default }, pickerClickHandler);
});

function pickerClickHandler() {}

/***/ }),

/***/ "./src/sass/styles.scss":
/*!******************************!*\
  !*** ./src/sass/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--4-1!../../node_modules/sass-loader/lib/loader.js??ref--4-2!./styles.scss */ "./node_modules/css-loader/index.js??ref--4-1!./node_modules/sass-loader/lib/loader.js??ref--4-2!./src/sass/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Jlc2V0LWNzcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nhc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi91cmwvZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9yZXNldC1jc3MvcmVzZXQuY3NzP2U5Y2IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3dlYnZpZXctdGlsZS1oZWFkZXIvV2ViVmlld1RpbGVIZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZvbnRzL1JvYm90by1MaWdodC53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9Sb2JvdG8tUmVndWxhci53b2ZmIiwid2VicGFjazovLy8uL3NyYy9mb250cy9mb250ZWxsby53b2ZmIiwid2VicGFjazovLy8uL3NyYy9pbWcvZmxhc2guc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvZmxhc2hfYWN0aXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2ZsYXNoX2JsYWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1nL2xvY2suc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9ja19hY3RpdmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbWcvbG9ja19ibGFjay5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltZy9waWNrZXJfYmxhY2suc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2Fzcy9zdHlsZXMuc2Nzcz9iNjdhIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIk5leHBhcSIsIkhlYWRlciIsImNyZWF0ZSIsImhlYWRlclN0eWxlcyIsImJhY2tncm91bmRDb2xvciIsImNvbG9yIiwiaWNvbkNvbG9yIiwiYm9yZGVyQm90dG9tIiwiY3VzdG9taXplIiwiYWRkQnV0dG9uIiwiaW1hZ2UiLCJwaWNrZXJDbGlja0hhbmRsZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRUE7QUFDQTs7O0FBR0E7QUFDQSxpb0JBQWtvQixjQUFjLGVBQWUsY0FBYyxvQkFBb0Isa0JBQWtCLDZCQUE2QixHQUFHLHFKQUFxSixtQkFBbUIsR0FBRyxrRUFBa0Usb0JBQW9CLEdBQUcsUUFBUSxtQkFBbUIsR0FBRyxVQUFVLHFCQUFxQixHQUFHLGlCQUFpQixpQkFBaUIsR0FBRywyREFBMkQsZ0JBQWdCLGtCQUFrQixHQUFHLFNBQVMsOEJBQThCLHNCQUFzQixHQUFHOztBQUU1dkM7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSw0QkFBNkIsa0JBQWtCLDZDQUE2QyxFQUFFLFNBQVMsZ0JBQWdCLGlCQUFpQixFQUFFLFNBQVMsb0JBQW9CLEVBQUUsVUFBVSxzREFBc0QsRUFBRSxZQUFZLG1CQUFtQix1QkFBdUIsc0RBQXNELGNBQWMsZUFBZSxrQ0FBa0MsRUFBRSxtREFBbUQsNkJBQTZCLEVBQUUsZ0JBQWdCLGtDQUFrQyxFQUFFLHlDQUF5QyxxQkFBcUIsRUFBRSxtQkFBbUIsOEJBQThCLDJCQUEyQiwwQkFBMEIsc0JBQXNCLEVBQUUsY0FBYyxvQkFBb0IsV0FBVyxhQUFhLGdCQUFnQixpQkFBaUIsRUFBRSxnQkFBZ0Isd0JBQXdCLHNJQUFxRixxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLHdCQUF3QiwwSUFBdUYscUJBQXFCLHVCQUF1QixFQUFFLGdCQUFnQiw0QkFBNEIsOEhBQWlGLHFCQUFxQix1QkFBdUIsRUFBRSwyREFBMkQsOEJBQThCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLHVEQUF1RCxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0Isd0JBQXdCLG1CQUFtQixrRkFBa0YsK0VBQStFLHFFQUFxRSwyREFBMkQsRUFBRSxzQkFBc0Isc0JBQXNCLEVBQUUsaUJBQWlCLHVCQUF1QixhQUFhLGNBQWMseURBQXlELHNEQUFzRCxxREFBcUQsb0RBQW9ELGlEQUFpRCxtQkFBbUIsb0JBQW9CLDBCQUEwQixpQ0FBaUMscUNBQXFDLHVCQUF1QixFQUFFLGdEQUFnRCxxQkFBcUIsRUFBRSw2REFBNkQsbUVBQW1FLDhCQUE4QixtQkFBbUIsRUFBRSw4QkFBOEIsbUJBQW1CLEVBQUUsd0JBQXdCLGdDQUFnQyxFQUFFLGtGQUFrRixxQkFBcUIsRUFBRSw4REFBOEQsbUJBQW1CLEVBQUUsd0JBQXdCLDhCQUE4Qix3QkFBd0Isc0JBQXNCLG1CQUFtQix5QkFBeUIsZUFBZSxnQkFBZ0IsMkRBQTJELHdEQUF3RCx1REFBdUQsc0RBQXNELG1EQUFtRCxFQUFFLG1CQUFtQix1QkFBdUIsYUFBYSxnQkFBZ0IsbUJBQW1CLEVBQUUsdUJBQXVCLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsOEdBQXVFLEVBQUUsbUVBQW1FLDRIQUErRSxFQUFFLDhCQUE4Qiw4SEFBZ0YsRUFBRSx3QkFBd0IsdUJBQXVCLGVBQWUsZ0JBQWdCLGlCQUFpQiw4R0FBdUUsRUFBRSxvRUFBb0UsNEhBQStFLEVBQUUsK0JBQStCLDhIQUFnRixFQUFFLG9DQUFvQyx1QkFBdUIsZ0JBQWdCLG9CQUFvQixtQkFBbUIsZUFBZSxxQkFBcUIscUJBQXFCLEVBQUUscUNBQXFDLHVCQUF1QixpQkFBaUIsb0JBQW9CLG1CQUFtQixlQUFlLHNCQUFzQixxQkFBcUIsRUFBRSxtQ0FBbUMsdUJBQXVCLGFBQWEsY0FBYyx5REFBeUQsc0RBQXNELHFEQUFxRCxvREFBb0QsaURBQWlELDZCQUE2QixrQ0FBa0MsZ0JBQWdCLGVBQWUsRUFBRSx5Q0FBeUMsb0JBQW9CLEVBQUUsa0VBQWtFLDZKQUE2SixxSkFBcUosa0JBQWtCLGtCQUFrQixzQkFBc0Isb0JBQW9CLHVCQUF1QixFQUFFLDJDQUEyQyxxQkFBcUIsa0JBQWtCLGtCQUFrQiwwQkFBMEIsZUFBZSxpQkFBaUIseUJBQXlCLGlCQUFpQixFQUFFLHlEQUF5RCx5QkFBeUIsaUJBQWlCLHVCQUF1Qix5QkFBeUIsa0dBQWtHLDBGQUEwRixrQkFBa0IsbUJBQW1CLHlCQUF5QiwrQkFBK0Isc0JBQXNCLGlCQUFpQixFQUFFLGtCQUFrQix1QkFBdUIsZUFBZSw4QkFBOEIsMkJBQTJCLDBCQUEwQixnQkFBZ0IsaUJBQWlCLEVBQUUsNEJBQTRCLG9CQUFvQixFQUFFLHNEQUFzRCw2Q0FBNkMsMkJBQTJCLEVBQUUsMkZBQTJGLGdIQUEwRSxFQUFFLG1HQUFtRyw4SEFBaUYsRUFBRSw0RkFBNEYsOEhBQWlGLEVBQUUsZ0NBQWdDLHFCQUFxQix5QkFBeUIsdUJBQXVCLGtCQUFrQixtQkFBbUIsRUFBRSwwQ0FBMEMsc0JBQXNCLHVCQUF1QiwyQkFBMkIsaUJBQWlCLGtCQUFrQiw2REFBNkQsMERBQTBELHlEQUF5RCx3REFBd0QscURBQXFELG9CQUFvQixxQkFBcUIsNEhBQWdGLHFDQUFxQyxtQ0FBbUMsRUFBRSxvQkFBb0IsdUJBQXVCLGdCQUFnQixpQkFBaUIsWUFBWSxjQUFjLGlCQUFpQixrQkFBa0IsMkJBQTJCLEVBQUUsMkJBQTJCLG1CQUFtQixnQkFBZ0IsdUJBQXVCLEVBQUUsWUFBWSx1QkFBdUIsYUFBYSxjQUFjLHlEQUF5RCxzREFBc0QscURBQXFELG9EQUFvRCxpREFBaUQsZ0JBQWdCLGdCQUFnQixFQUFFLGtDQUFrQyxpQkFBaUIsRUFBRSxnQ0FBZ0MsbUJBQW1CLEVBQUUsa0NBQWtDLG1CQUFtQixFQUFFLGlDQUFpQyxtQkFBbUIsRUFBRSxtQ0FBbUMsbUJBQW1CLEVBQUUsVUFBVSx3cENBQXdwQyxVQUFVLG1CQUFtQixLQUFLLFVBQVUsZ0JBQWdCLEtBQUssaUJBQWlCLEtBQUssbUJBQW1CLEtBQUssVUFBVSxZQUFZLGNBQWMsWUFBWSxVQUFVLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLG1CQUFtQixLQUFLLFlBQVksYUFBYSxhQUFhLHNCQUFzQixLQUFLLFlBQVksWUFBWSxZQUFZLFdBQVcsZ0JBQWdCLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE1BQU0sWUFBWSxhQUFhLGFBQWEsbUJBQW1CLE9BQU8sYUFBYSxhQUFhLGFBQWEsWUFBWSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxvQkFBb0IsS0FBSyxtQkFBbUIsT0FBTyxjQUFjLGNBQWMsY0FBYyxlQUFlLGVBQWUsZUFBZSxlQUFlLGVBQWUsV0FBVyxXQUFXLGFBQWEsYUFBYSxhQUFhLG9CQUFvQixNQUFNLGVBQWUsS0FBSyxZQUFZLGFBQWEsa0JBQWtCLE1BQU0sa0JBQWtCLE1BQU0sbUJBQW1CLEtBQUssZUFBZSxLQUFLLGVBQWUsTUFBTSxhQUFhLGFBQWEsWUFBWSxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsb0JBQW9CLE1BQU0sY0FBYyxjQUFjLGNBQWMsaUJBQWlCLEtBQUssWUFBWSxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsS0FBSyxrQkFBa0IsS0FBSyxtQkFBbUIsS0FBSyxZQUFZLFlBQVksV0FBVyxVQUFVLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLG1CQUFtQixNQUFNLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLGtCQUFrQixLQUFLLFlBQVksV0FBVyxXQUFXLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLGNBQWMsY0FBYyxjQUFjLGFBQWEsZUFBZSxlQUFlLGVBQWUsZUFBZSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxhQUFhLGFBQWEsV0FBVyxVQUFVLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGdCQUFnQixNQUFNLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsWUFBWSxnQkFBZ0IsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxnQkFBZ0IsTUFBTSxnQkFBZ0IsTUFBTSxZQUFZLG1CQUFtQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixNQUFNLFdBQVcsWUFBWSxhQUFhLFdBQVcsZ0JBQWdCLE1BQU0sV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLG9CQUFvQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLG1CQUFtQixLQUFLLGNBQWMsY0FBYyxjQUFjLGVBQWUsZUFBZSxlQUFlLGVBQWUsZUFBZSxXQUFXLGdCQUFnQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLGtCQUFrQixLQUFLLDZEQUE2RCxrQkFBa0IsK0NBQStDLEdBQUcsT0FBTyxnQkFBZ0IsaUJBQWlCLEdBQUcsT0FBTyxvQkFBb0IsR0FBRyxRQUFRLDRCQUE0QixHQUFHLFVBQVUsbUJBQW1CLHVCQUF1Qiw0QkFBNEIsY0FBYyxlQUFlLGtDQUFrQyxHQUFHLFdBQVcsNkJBQTZCLEdBQUcsY0FBYyxrQ0FBa0MsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcsaUJBQWlCLCtCQUErQixHQUFHLGNBQWMsb0JBQW9CLEdBQUcsWUFBWSx5QkFBeUIsNENBQTRDLGdCQUFnQixpQkFBaUIsR0FBRyxlQUFlLHlCQUF5QixHQUFHLDRCQUE0QixvQkFBb0IsR0FBRyxzREFBc0QsK0JBQStCLDBDQUEwQyxrQ0FBa0MsNkJBQTZCLDBCQUEwQix5QkFBeUIsNEJBQTRCLDBCQUEwQiw0QkFBNEIsOEJBQThCLHNCQUFzQixnQkFBZ0IsZ0JBQWdCLGtCQUFrQiw0Q0FBNEMsR0FBRyw0QkFBNEIsaUdBQWlHLE9BQU8sdURBQXVELEVBQUUsOENBQThDLEtBQUssc0ZBQXNGLGlFQUFpRSxTQUFTLHNEQUFzRCxzQ0FBc0MsbUNBQW1DLDhCQUE4QixTQUFTLHFCQUFxQixTQUFTLG1DQUFtQyxTQUFTLG9DQUFvQyxTQUFTLHNDQUFzQyxTQUFTLGtDQUFrQyxTQUFTLG9FQUFvRSxnQ0FBZ0MsNkJBQTZCLGdDQUFnQyxvQkFBb0IsVUFBVSxTQUFTLFNBQVMsT0FBTywwQkFBMEIsaUNBQWlDLGlCQUFpQixVQUFVLFNBQVMsU0FBUyxPQUFPLHlCQUF5QixtQ0FBbUMsZ0JBQWdCLFVBQVUsU0FBUyxTQUFTLE9BQU8sd0JBQXdCLCtCQUErQixlQUFlLFVBQVUsU0FBUyxTQUFTLE9BQU8sMkJBQTJCLDhCQUE4QixZQUFZLFVBQVUsU0FBUyxTQUFTLE9BQU8sU0FBUyx1Q0FBdUMsUUFBUSxHQUFHLE9BQU8sS0FBSyxHQUFHLHFDQUFxQyx5Q0FBeUMseUNBQXlDLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLEdBQUcsd0JBQXdCLDBIQUEwSCxTQUFTLG9FQUFvRSxRQUFRLHdLQUF3Syx3REFBd0QsU0FBUyxzREFBc0QscUJBQXFCLDZCQUE2QixpQkFBaUIsU0FBUyxxQkFBcUIsU0FBUywwQkFBMEIsU0FBUyxvRkFBb0Ysb0NBQW9DLDhCQUE4QiwwQkFBMEIsS0FBSywrRUFBK0Usd0RBQXdELHVDQUF1QyxrS0FBa0ssMEJBQTBCLHlDQUF5Qyw2QkFBNkIsVUFBVSxRQUFRLFNBQVMsT0FBTyxLQUFLLHFGQUFxRixHQUFHLGlCQUFpQix3QkFBd0IsMERBQTBELHFCQUFxQix1QkFBdUIsR0FBRyxjQUFjLHdCQUF3Qiw0REFBNEQscUJBQXFCLHVCQUF1QixHQUFHLGdCQUFnQiwyQkFBMkIsc0RBQXNELHFCQUFxQix1QkFBdUIsR0FBRyx5REFBeUQsOEJBQThCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLHVEQUF1RCxtQkFBbUIseUJBQXlCLDJCQUEyQixzQkFBc0Isd0JBQXdCLG1CQUFtQixrRkFBa0YsK0VBQStFLHFFQUFxRSwyREFBMkQsR0FBRyxzQkFBc0IsbUJBQW1CLEVBQUUsVUFBVSxrQkFBa0IsNkNBQTZDLEVBQUUsU0FBUyxnQkFBZ0IsaUJBQWlCLEVBQUUsU0FBUyxvQkFBb0IsRUFBRSxVQUFVLHNEQUFzRCxFQUFFLFlBQVksbUJBQW1CLHVCQUF1QixzREFBc0QsY0FBYyxlQUFlLGtDQUFrQyxFQUFFLG1EQUFtRCw2QkFBNkIsRUFBRSxnQkFBZ0Isa0NBQWtDLEVBQUUseUNBQXlDLHFCQUFxQixFQUFFLG1CQUFtQiw4QkFBOEIsMkJBQTJCLDBCQUEwQixzQkFBc0IsRUFBRSxjQUFjLG9CQUFvQixXQUFXLGFBQWEsZ0JBQWdCLGlCQUFpQixFQUFFLGdCQUFnQix3QkFBd0IsOERBQThELHFCQUFxQix1QkFBdUIsRUFBRSxnQkFBZ0Isd0JBQXdCLGdFQUFnRSxxQkFBcUIsdUJBQXVCLEVBQUUsZ0JBQWdCLDRCQUE0QiwwREFBMEQscUJBQXFCLHVCQUF1QixFQUFFLDJEQUEyRCw4QkFBOEIsd0JBQXdCLHVCQUF1QixvQkFBb0IsdURBQXVELG1CQUFtQix5QkFBeUIsMkJBQTJCLHNCQUFzQix3QkFBd0IsbUJBQW1CLGtGQUFrRiwrRUFBK0UscUVBQXFFLDJEQUEyRCxFQUFFLHNCQUFzQixzQkFBc0IsRUFBRSxpQkFBaUIsdUJBQXVCLGFBQWEsY0FBYyx5REFBeUQsc0RBQXNELHFEQUFxRCxvREFBb0QsaURBQWlELG1CQUFtQixvQkFBb0IsMEJBQTBCLGlDQUFpQyxxQ0FBcUMsdUJBQXVCLEVBQUUsZ0RBQWdELHFCQUFxQixFQUFFLDZEQUE2RCxtRUFBbUUsOEJBQThCLG1CQUFtQixFQUFFLDhCQUE4QixtQkFBbUIsRUFBRSx3QkFBd0IsZ0NBQWdDLEVBQUUsa0ZBQWtGLHFCQUFxQixFQUFFLDhEQUE4RCxtQkFBbUIsRUFBRSx3QkFBd0IsOEJBQThCLHdCQUF3QixzQkFBc0IsbUJBQW1CLHlCQUF5QixlQUFlLGdCQUFnQiwyREFBMkQsd0RBQXdELHVEQUF1RCxzREFBc0QsbURBQW1ELEVBQUUsbUJBQW1CLHVCQUF1QixhQUFhLGdCQUFnQixtQkFBbUIsRUFBRSx1QkFBdUIsdUJBQXVCLGNBQWMsZ0JBQWdCLGlCQUFpQiw0Q0FBNEMsRUFBRSxtRUFBbUUsb0RBQW9ELEVBQUUsOEJBQThCLHFEQUFxRCxFQUFFLHdCQUF3Qix1QkFBdUIsZUFBZSxnQkFBZ0IsaUJBQWlCLDRDQUE0QyxFQUFFLG9FQUFvRSxvREFBb0QsRUFBRSwrQkFBK0IscURBQXFELEVBQUUsb0NBQW9DLHVCQUF1QixnQkFBZ0Isb0JBQW9CLG1CQUFtQixlQUFlLHFCQUFxQixxQkFBcUIsRUFBRSxxQ0FBcUMsdUJBQXVCLGlCQUFpQixvQkFBb0IsbUJBQW1CLGVBQWUsc0JBQXNCLHFCQUFxQixFQUFFLG1DQUFtQyx1QkFBdUIsYUFBYSxjQUFjLHlEQUF5RCxzREFBc0QscURBQXFELG9EQUFvRCxpREFBaUQsNkJBQTZCLGtDQUFrQyxnQkFBZ0IsZUFBZSxFQUFFLHlDQUF5QyxvQkFBb0IsRUFBRSxrRUFBa0UsNkpBQTZKLHFKQUFxSixrQkFBa0Isa0JBQWtCLHNCQUFzQixvQkFBb0IsdUJBQXVCLEVBQUUsMkNBQTJDLHFCQUFxQixrQkFBa0Isa0JBQWtCLDBCQUEwQixlQUFlLGlCQUFpQix5QkFBeUIsaUJBQWlCLEVBQUUseURBQXlELHlCQUF5QixpQkFBaUIsdUJBQXVCLHlCQUF5QixrR0FBa0csMEZBQTBGLGtCQUFrQixtQkFBbUIseUJBQXlCLCtCQUErQixzQkFBc0IsaUJBQWlCLEVBQUUsa0JBQWtCLHVCQUF1QixlQUFlLDhCQUE4QiwyQkFBMkIsMEJBQTBCLGdCQUFnQixpQkFBaUIsRUFBRSw0QkFBNEIsb0JBQW9CLEVBQUUsc0RBQXNELDZDQUE2QywyQkFBMkIsRUFBRSwyRkFBMkYsK0NBQStDLEVBQUUsbUdBQW1HLHNEQUFzRCxFQUFFLDRGQUE0RixzREFBc0QsRUFBRSxnQ0FBZ0MscUJBQXFCLHlCQUF5Qix1QkFBdUIsa0JBQWtCLG1CQUFtQixFQUFFLDBDQUEwQyxzQkFBc0IsdUJBQXVCLDJCQUEyQixpQkFBaUIsa0JBQWtCLDZEQUE2RCwwREFBMEQseURBQXlELHdEQUF3RCxxREFBcUQsb0JBQW9CLHFCQUFxQixxREFBcUQscUNBQXFDLG1DQUFtQyxFQUFFLG9CQUFvQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixZQUFZLGNBQWMsaUJBQWlCLGtCQUFrQiwyQkFBMkIsRUFBRSwyQkFBMkIsbUJBQW1CLGdCQUFnQix1QkFBdUIsRUFBRSxZQUFZLHVCQUF1QixhQUFhLGNBQWMseURBQXlELHNEQUFzRCxxREFBcUQsb0RBQW9ELGlEQUFpRCxnQkFBZ0IsZ0JBQWdCLEVBQUUsa0NBQWtDLGlCQUFpQixFQUFFLGdDQUFnQyxtQkFBbUIsRUFBRSxrQ0FBa0MsbUJBQW1CLEVBQUUsaUNBQWlDLG1CQUFtQixFQUFFLG1DQUFtQyxtQkFBbUIsRUFBRSxrQkFBa0IsbURBQW1ELDBEQUEwRCxtQkFBbUIsaUJBQWlCLDBCQUEwQixpQ0FBaUMscUNBQXFDLHVCQUF1Qiw0Q0FBNEMsc0JBQXNCLEtBQUssbURBQW1ELG1FQUFtRSw2QkFBNkIsbUJBQW1CLEtBQUssb0JBQW9CLG9CQUFvQixLQUFLLGFBQWEsZ0NBQWdDLEtBQUssa0VBQWtFLHFCQUFxQixLQUFLLG9EQUFvRCxrQkFBa0IsS0FBSyxnQkFBZ0IsOEJBQThCLHdCQUF3QixzQkFBc0IsbUJBQW1CLHFEQUFxRCw0REFBNEQsS0FBSyxHQUFHLG9CQUFvQixxREFBcUQsbUJBQW1CLEdBQUcsdUJBQXVCLDJCQUEyQixpREFBaUQsa0RBQWtELEdBQUcsY0FBYyxtREFBbUQsR0FBRyxLQUFLLHdCQUF3Qiw0QkFBNEIsaURBQWlELGtEQUFrRCxHQUFHLFlBQVksbURBQW1ELEdBQUcsR0FBRyx3QkFBd0Isa0JBQWtCLHdCQUF3QixpQkFBaUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsc0JBQXNCLHNCQUFzQixPQUFPLGlCQUFpQix3QkFBd0Isa0JBQWtCLHFCQUFxQixvQkFBb0IsZ0JBQWdCLHVCQUF1QixzQkFBc0IsS0FBSyxlQUFlLHFEQUFxRCw0REFBNEQsK0JBQStCLG9DQUFvQyxrQkFBa0IsaUJBQWlCLDJCQUEyQixzQkFBc0IsT0FBTyw4Q0FBOEMsZ0tBQWdLLHdKQUF3SixvQkFBb0Isb0JBQW9CLHdCQUF3QixzQkFBc0IseUJBQXlCLE9BQU8sbUJBQW1CLHNCQUFzQixtQkFBbUIsbUJBQW1CLDJCQUEyQixnQkFBZ0IsbUJBQW1CLDBCQUEwQixtQkFBbUIsT0FBTyxpQ0FBaUMsMkJBQTJCLGtCQUFrQix5QkFBeUIsMkJBQTJCLHdHQUF3RyxnR0FBZ0csb0JBQW9CLHFCQUFxQiwyQkFBMkIsaUNBQWlDLHdCQUF3QixtQkFBbUIsT0FBTyxLQUFLLEdBQUcsaUJBQWlCLHNCQUFzQixlQUFlLDZCQUE2QiwyQkFBMkIsMEJBQTBCLGVBQWUsZ0JBQWdCLG1CQUFtQixvQkFBb0IsZ0NBQWdDLHlDQUF5Qyx3QkFBd0IsT0FBTyw0RUFBNEUsOENBQThDLE9BQU8sZ0ZBQWdGLG9EQUFvRCxPQUFPLCtFQUErRSxvREFBb0QsT0FBTyxPQUFPLHFCQUFxQixxQkFBcUIsMEJBQTBCLHVCQUF1QixrQkFBa0Isa0JBQWtCLDBCQUEwQixxQkFBcUIsdUJBQXVCLDRCQUE0QixnQkFBZ0IsaUJBQWlCLDhEQUE4RCxtQkFBbUIsb0JBQW9CLHNEQUFzRCxxQ0FBcUMsbUNBQW1DLE9BQU8sS0FBSyxHQUFHLHlCQUF5QixzQkFBc0IsZ0JBQWdCLGdCQUFnQixXQUFXLGFBQWEsdUJBQXVCLGlCQUFpQiwyQkFBMkIsa0JBQWtCLG9CQUFvQixpQkFBaUIsd0JBQXdCLE9BQU8sS0FBSyxhQUFhLG1EQUFtRCwwREFBMEQsZUFBZSxnQkFBZ0IsR0FBRyxhQUFhLDJCQUEyQixvQkFBb0IsS0FBSyx5QkFBeUIsa0JBQWtCLEtBQUssMkJBQTJCLG9CQUFvQixLQUFLLDBCQUEwQixtQkFBbUIsS0FBSyw0QkFBNEIscUJBQXFCLEtBQUssR0FBRyxxQkFBcUI7O0FBRXJyZ0M7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsZ0JBQWdCO0FBQ25ELElBQUk7QUFDSjtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsaUJBQWlCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxvQkFBb0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7O0FBRWxFO0FBQ0E7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBLGVBQWU7O0FBRWY7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxZOzs7Ozs7Ozs7OztBQ25CQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixzQkFBc0I7QUFDdkM7O0FBRUE7QUFDQSxtQkFBbUIsMkJBQTJCOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLG1CQUFtQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBOztBQUVBLFFBQVEsdUJBQXVCO0FBQy9CO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBOztBQUVBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixpQkFBaUI7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7O0FBRWQsa0RBQWtELHNCQUFzQjtBQUN4RTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUEsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDs7QUFFQSw2QkFBNkIsbUJBQW1COztBQUVoRDs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdFhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxXQUFXLEVBQUU7QUFDckQsd0NBQXdDLFdBQVcsRUFBRTs7QUFFckQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxzQ0FBc0M7QUFDdEMsR0FBRztBQUNIO0FBQ0EsOERBQThEO0FBQzlEOztBQUVBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtB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O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7O0FDQUEsdUY7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7O0FBRUE7Ozs7QUFFQTs7OztBQUVBQSxTQUFTQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRDtBQUNBOztBQUVBQyxTQUFPQyxNQUFQLENBQWNDLE1BQWQsQ0FBcUIsS0FBckI7QUFDQTtBQUNBLE1BQU1DLGVBQWU7QUFDbkJDLHFCQUFpQixTQURFO0FBRW5CQyxXQUFPLE9BRlk7QUFHbkJDLGVBQVcsT0FIUTtBQUluQkMsa0JBQWM7QUFKSyxHQUFyQjtBQU1BUCxTQUFPQyxNQUFQLENBQWNPLFNBQWQsQ0FBd0JMLFlBQXhCO0FBQ0FILFNBQU9DLE1BQVAsQ0FBY1EsU0FBZCxDQUF3QixFQUFFQyw2QkFBRixFQUF4QixFQUFxREMsa0JBQXJEO0FBQ0QsQ0FkRDs7QUFnQkEsU0FBU0Esa0JBQVQsR0FBOEIsQ0FBRSxDOzs7Ozs7Ozs7Ozs7QUN0QmhDOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQSxlQUFlOztBQUVmO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsWSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC9cXG4gICB2My4wIHwgMjAxODA0MTNcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1haW4sIG1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWFpbiwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLyogSFRNTDUgaGlkZGVuLWF0dHJpYnV0ZSBmaXggZm9yIG5ld2VyIGJyb3dzZXJzICovXFxuKltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcbiIsInZhciBlc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL3VybC9lc2NhcGUuanNcIik7XG5leHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbnN2ZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bzsgfVxcblxcbmltZyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7IH1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7IH1cXG5cXG5idXR0b24ge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyB9XFxuXFxuLmhpZGRlbiwgI3RlbXBsYXRlcywgLmFwcC1zY3JlZW46bm90KC5hY3RpdmUpIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblxcbi5pbnZpc2libGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7IH1cXG5cXG4ubm8tb3ZlcmZsb3csICN3cmFwcGVyLCAuYXBwLXNjcmVlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuOyB9XFxuXFxuLnVuc2VsZWN0YWJsZSB7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lOyB9XFxuXFxuI3dyYXBwZXIge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bztcXG4gIHNyYzogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9mb250cy9Sb2JvdG8tTGlnaHQud29mZlwiKSkgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ZvbnRzL1JvYm90by1SZWd1bGFyLndvZmZcIikpICsgXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XFxuICBzcmM6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vZm9udHMvZm9udGVsbG8ud29mZlwiKSkgKyBcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsOyB9XFxuXFxuW2NsYXNzXj1cXFwiaWNvbi1cXFwiXTpiZWZvcmUsIFtjbGFzcyo9XFxcIiBpY29uLVxcXCJdOmJlZm9yZSB7XFxuICBmb250LWZhbWlseTogXFxcImZvbnRlbGxvXFxcIjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICAvKiBQcmVmZXJyZWQgaWNvbiBzaXplICovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcXG4gIHdvcmQtd3JhcDogbm9ybWFsO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgLyogU3VwcG9ydCBmb3IgYWxsIFdlYktpdCBicm93c2Vycy4gKi9cXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbiAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcbiAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxuICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2xpZ2EnOyB9XFxuXFxuLmljb24tb2ZmOmJlZm9yZSB7XFxuICBjb250ZW50OiAnXFxcXEU4MDAnOyB9XFxuXFxuLmxlZC1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMzUuNTV2dztcXG4gIGhlaWdodDogMzUuNTV2dztcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXI6IDEuNXZ3IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTsgfVxcbiAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAubGVkLWJ1dHRvbiB7XFxuICAgIGNvbG9yOiAjNjA2MDYwOyB9XFxuICAjd3JhcHBlcjpub3QoW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0pIC5sZWQtYnV0dG9uLmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggY3VycmVudENvbG9yLCBpbnNldCAwIDAgNXB4IGN1cnJlbnRDb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmxlZC1idXR0b246bm90KC5hY3RpdmUpIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAubGVkLWJ1dHRvbi5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjA2MDYwOyB9XFxuICAjd3JhcHBlcltkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIC5sZWQtYnV0dG9uOjphZnRlciwgLmxlZC1idXR0b24uYWN0aXZlOjphZnRlciB7XFxuICAgIGNvbG9yOiAjNjA2MDYwOyB9XFxuICAjd3JhcHBlcltkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIC5sZWQtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5sZWQtYnV0dG9uOjphZnRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZm9udGVsbG8nO1xcbiAgICBjb250ZW50OiAnXFxcXEU4MDAnO1xcbiAgICBmb250LXNpemU6IDE2dnc7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTsgfVxcblxcbi5mbGFzaGNvbnRyb2wge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3NSU7XFxuICBsZWZ0OiAxMi41JTtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuLmZsYXNoYnV0dG9uX2xlZnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogM3Z3O1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy9mbGFzaC5zdmdcIikpICsgXCIpOyB9XFxuICAjd3JhcHBlcltkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIC5mbGFzaGJ1dHRvbl9sZWZ0Om5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2ZsYXNoX2JsYWNrLnN2Z1wiKSkgKyBcIik7IH1cXG4gIC5mbGFzaGJ1dHRvbl9sZWZ0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2ZsYXNoX2FjdGl2ZS5zdmdcIikpICsgXCIpOyB9XFxuXFxuLmZsYXNoYnV0dG9uX3JpZ2h0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDYxdnc7XFxuICB3aWR0aDogNDRweDtcXG4gIGhlaWdodDogNDRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2ZsYXNoLnN2Z1wiKSkgKyBcIik7IH1cXG4gICN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gLmZsYXNoYnV0dG9uX3JpZ2h0Om5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2ZsYXNoX2JsYWNrLnN2Z1wiKSkgKyBcIik7IH1cXG4gIC5mbGFzaGJ1dHRvbl9yaWdodC5hY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy9mbGFzaF9hY3RpdmUuc3ZnXCIpKSArIFwiKTsgfVxcblxcbi5icmlnaHRuZXNzLWNvbnRyb2wgLmFsaWdubGVmdCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMzMzMzMzO1xcbiAgdG9wOiAxNDh2dztcXG4gIG1hcmdpbi1sZWZ0OiA3dnc7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmJyaWdodG5lc3MtY29udHJvbCAuYWxpZ25yaWdodCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIHRvcDogMTQ4dnc7XFxuICBtYXJnaW4tcmlnaHQ6IDd2dztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG5cXG4uYnJpZ2h0bmVzcy1jb250cm9sIC5ueHByYW5nZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDkwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogcmVkOyB9XFxuICAuYnJpZ2h0bmVzcy1jb250cm9sIC5ueHByYW5nZTpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7IH1cXG4gIC5icmlnaHRuZXNzLWNvbnRyb2wgLm54cHJhbmdlOjotd2Via2l0LXNsaWRlci1ydW5uYWJsZS10cmFjayB7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNyUsIHJnYmEoMCwgMCwgMCwgMC4yNikgNyUsIHJnYmEoMCwgMCwgMCwgMC4yNikgOTMlLCB0cmFuc3BhcmVudCA5MyUsIHRyYW5zcGFyZW50KTtcXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCB0cmFuc3BhcmVudCwgdHJhbnNwYXJlbnQgNyUsIHJnYmEoMCwgMCwgMCwgMC4yNikgNyUsIHJnYmEoMCwgMCwgMCwgMC4yNikgOTMlLCB0cmFuc3BhcmVudCA5MyUsIHRyYW5zcGFyZW50KTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGFuaW1hdGU6IDAuMnM7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7IH1cXG4gIC5icmlnaHRuZXNzLWNvbnRyb2wgLm54cHJhbmdlOjpiZWZvcmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBiYWNrZ3JvdW5kOiAjMDAwMDAwO1xcbiAgICB0b3A6IDBweDtcXG4gICAgcmlnaHQ6IDUwJTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogNDMlOyB9XFxuICAuYnJpZ2h0bmVzcy1jb250cm9sIC5ueHByYW5nZTo6LXdlYmtpdC1zbGlkZXItdGh1bWIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogLTI5cHg7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1yYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBibGFjaywgYmxhY2sgMTQlLCB0cmFuc3BhcmVudCAxNCUsIHRyYW5zcGFyZW50KTtcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgYmxhY2ssIGJsYWNrIDE0JSwgdHJhbnNwYXJlbnQgMTQlLCB0cmFuc3BhcmVudCk7XFxuICAgIHdpZHRoOiA2MHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHotaW5kZXg6IDE7IH1cXG5cXG4ub25vZmZzd2l0Y2gge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMzJ2dztcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7IH1cXG4gIC5vbm9mZnN3aXRjaCAuY2hlY2tib3gge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAgIC5vbm9mZnN3aXRjaCAuY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2gtbGFiZWwge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7IH1cXG4gICAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAub25vZmZzd2l0Y2ggLmNoZWNrYm94ICsgLnN3aXRjaC1sYWJlbDo6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBlc2NhcGUocmVxdWlyZShcIi4uL2ltZy9sb2NrLnN2Z1wiKSkgKyBcIik7IH1cXG4gICAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAub25vZmZzd2l0Y2ggLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoLWxhYmVsOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIGVzY2FwZShyZXF1aXJlKFwiLi4vaW1nL2xvY2tfYWN0aXZlLnN2Z1wiKSkgKyBcIik7IH1cXG4gICAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAub25vZmZzd2l0Y2ggLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoLWxhYmVsOmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvbG9ja19hY3RpdmUuc3ZnXCIpKSArIFwiKTsgfVxcbiAgLm9ub2Zmc3dpdGNoIC5zd2l0Y2gtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB3aWR0aDogNDRweDtcXG4gICAgaGVpZ2h0OiA0NHB4OyB9XFxuICAgIC5vbm9mZnN3aXRjaCAuc3dpdGNoLWxhYmVsOjpiZWZvcmUge1xcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB0b3A6IDUwJTtcXG4gICAgICBsZWZ0OiA1MCU7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgZXNjYXBlKHJlcXVpcmUoXCIuLi9pbWcvbG9ja19ibGFjay5zdmdcIikpICsgXCIpO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7IH1cXG5cXG4uY29sb3ItY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjB2dztcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgfVxcbiAgLmNvbG9yLWNvbnRyb2wgYnV0dG9uIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4ud2hlZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC0xOyB9XFxuXFxuLndyYXBwZXJbZGF0YS1jb2xvcj0nd2hpdGUnXSB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSdyZWQnXSB7XFxuICBjb2xvcjogI2ZmNDY0NjsgfVxcblxcbi53cmFwcGVyW2RhdGEtY29sb3I9J2dyZWVuJ10ge1xcbiAgY29sb3I6ICM0MGQ3OGI7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSdibHVlJ10ge1xcbiAgY29sb3I6ICMwMGJmZGU7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSd5ZWxsb3cnXSB7XFxuICBjb2xvcjogI2ZiZWMwMDsgfVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWxleGNoZXJub3YvZ2l0aHViL3RpbGVzL3RpbGUtbGVkL3NyYy9zYXNzL3NyYy9zYXNzL19nbG9iYWwuc2Nzc1wiLFwiL1VzZXJzL2FsZXhjaGVybm92L2dpdGh1Yi90aWxlcy90aWxlLWxlZC9zcmMvc2Fzcy9zcmMvc2Fzcy9fdmFyaWFibGVzLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvbm9kZV9tb2R1bGVzL2JvdXJib24vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9hZGRvbnMvX3ByZWZpeGVyLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvbm9kZV9tb2R1bGVzL2JvdXJib24vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9hZGRvbnMvX3Bvc2l0aW9uLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3JjL3Nhc3MvX2ZvbnRzLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3R5bGVzLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3JjL3Nhc3MvcGFydGlhbC9fbGVkLWJ1dHRvbi5zY3NzXCIsXCIvVXNlcnMvYWxleGNoZXJub3YvZ2l0aHViL3RpbGVzL3RpbGUtbGVkL3NyYy9zYXNzL3NyYy9zYXNzL3BhcnRpYWwvX2ZsYXNoLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3JjL3Nhc3MvcGFydGlhbC9fYnJpZ2h0bmVzcy1jb250cm9sLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3JjL3Nhc3MvcGFydGlhbC9fc3dpdGNoLWNvbnRyb2wuc2Nzc1wiLFwiL1VzZXJzL2FsZXhjaGVybm92L2dpdGh1Yi90aWxlcy90aWxlLWxlZC9zcmMvc2Fzcy9zcmMvc2Fzcy9wYXJ0aWFsL19jb2xvci1jb250cm9sLnNjc3NcIixcIi9Vc2Vycy9hbGV4Y2hlcm5vdi9naXRodWIvdGlsZXMvdGlsZS1sZWQvc3JjL3Nhc3Mvc3JjL3Nhc3MvcGFydGlhbC9fd2hlZWwuc2Nzc1wiLFwiL1VzZXJzL2FsZXhjaGVybm92L2dpdGh1Yi90aWxlcy90aWxlLWxlZC9zcmMvc2Fzcy9zcmMvc2Fzcy9zY3JlZW4vX21haW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNDLGNBQWE7RUFDYix5Q0FBMEMsRUFDMUM7O0FBQ0Q7RUFDQyxZQUFXO0VBQ1gsYUFBWSxFQUNaOztBQUNEO0VBQ0MsZ0JBQWUsRUFDZjs7QUFDRDtFQUNDLGtEQ1orQyxFRGEvQzs7QUFDRDtFQUNDLGVBQWM7RUFDZCxtQkFBa0I7RUFDbEIsa0RDakIrQztFRGtCL0MsVUFBUztFQUNULFdBQVU7RUFDViw4QkFBNkIsRUFDN0I7O0FBQ0Q7RUFDQyx5QkFBd0IsRUFDeEI7O0FBQ0Q7RUFDQyw4QkFBNkIsRUFDN0I7O0FBQ0Q7RUFDQyxpQkFBZ0IsRUFDaEI7O0FBQ0Q7RUVJUSwwQkZIbUI7RUVPbkIsdUJGUG1CO0VFV25C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QkQ7SUFZSyxhQUFZO0lBQ1osVUFBUztJQUNULGlCQUFnQixFQUNoQjs7QUNmTDtFUjBDRSxtQlF6QzBCO0VSNkN0QixTUTdDMkI7RVI2QzNCLFVRN0N5QztFVGtDdkMscURTakM4QztFVHFDOUMsa0RTckM4QztFVHlDOUMsaURTekM4QztFVDZDOUMsZ0RTN0M4QztFVGlEOUMsNkNTakQ4QztFQUNwRCxZQUFVO0VBQ1YsWUFBVyxFQUNaOztBQ0xEO0VBRUksYVhNc0IsRVdMdkI7O0FBSEg7RUFLSSxlWEtrQixFV0puQjs7QUFOSDtFQVFJLGVYR3FCLEVXRnRCOztBQVRIO0VBV0ksZVhDbUIsRVdBcEI7O0FBWkg7RUFjSSxlWERxQixFV0V0QlwiLFwiZmlsZVwiOlwic3R5bGVzLnNjc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuXFx0b3V0bGluZTogbm9uZTtcXG5cXHQtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XFxufVxcbnN2ZyB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5pbWcge1xcblxcdG1heC13aWR0aDogMTAwJTtcXG59XFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6ICRtYWluLWZvbnQ7XFxufVxcbmJ1dHRvbiB7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGZvbnQtZmFtaWx5OiAkbWFpbi1mb250O1xcblxcdGJvcmRlcjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uaGlkZGVuIHtcXG5cXHRkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxufVxcbi5pbnZpc2libGUge1xcblxcdHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50O1xcbn1cXG4ubm8tb3ZlcmZsb3cge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi51bnNlbGVjdGFibGUge1xcbiAgQGluY2x1ZGUgdXNlci1zZWxlY3Qobm9uZSk7XFxufVxcbiN0ZW1wbGF0ZXMge1xcblxcdEBleHRlbmQgLmhpZGRlbjtcXG59XFxuI3dyYXBwZXIge1xcblxcdEBleHRlbmQgLm5vLW92ZXJmbG93O1xcblxcdEBpbmNsdWRlIHBvc2l0aW9uKGZpeGVkLCAwIDAgbnVsbCBudWxsKTtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHRoZWlnaHQ6IDEwMCU7XFxufVxcbi5hcHAtc2NyZWVuIHtcXG5cXHRAZXh0ZW5kIC5uby1vdmVyZmxvdztcXG59XFxuLmFwcC1zY3JlZW46bm90KC5hY3RpdmUpIHtcXG5cXHRAZXh0ZW5kIC5oaWRkZW47XFxufVxcblwiLFwiJG1haW4tZm9udDogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO1xcblxcbi8vIFNJWkVTXFxuJGZvbnQtc2l6ZTogMTZweDtcXG5cXG4vLyBDT0xPUlNcXG4kaHItY29sb3I6IHJnYig4MiwgODAsIDg4KTtcXG4kdGV4dC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiR3aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiRibGFjazogcmdiKDQyLCA0MiwgNDIpO1xcbiRyZWQ6IHJnYigyNTUsIDcwLCA3MCk7XFxuJGdyZWVuOiByZ2IoNjQsIDIxNSwgMTM5KTtcXG4kYmx1ZTogcmdiKDAsIDE5MSwgMjIyKTtcXG4keWVsbG93OiByZ2IoMjUxLCAyMzYsIDApO1xcblxcbkBtaXhpbiBmbGFzaHBsYWNlKCRsZWZ0KSB7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIGxlZnQ6ICRsZWZ0O1xcbiAgd2lkdGg6IDQ0cHg7IFxcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9mbGFzaC5zdmcpO1xcbn1cXG5cXG5cXG5cIixcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuXFxuLy8vIEEgbWl4aW4gZm9yIGdlbmVyYXRpbmcgdmVuZG9yIHByZWZpeGVzIG9uIG5vbi1zdGFuZGFyZGl6ZWQgcHJvcGVydGllcy5cXG4vLy9cXG4vLy8gQHBhcmFtIHtTdHJpbmd9ICRwcm9wZXJ0eVxcbi8vLyAgIFByb3BlcnR5IHRvIHByZWZpeFxcbi8vL1xcbi8vLyBAcGFyYW0geyp9ICR2YWx1ZVxcbi8vLyAgIFZhbHVlIHRvIHVzZVxcbi8vL1xcbi8vLyBAcGFyYW0ge0xpc3R9ICRwcmVmaXhlc1xcbi8vLyAgIFByZWZpeGVzIHRvIGRlZmluZVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcXG4vLy8gICAuZWxlbWVudCB7XFxuLy8vICAgICBAaW5jbHVkZSBwcmVmaXhlcihib3JkZXItcmFkaXVzLCAxMHB4LCB3ZWJraXQgbXMgc3BlYyk7XFxuLy8vICAgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBjc3MgLSBDU1MgT3V0cHV0XFxuLy8vICAgLmVsZW1lbnQge1xcbi8vLyAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbi8vLyAgICAgLW1vei1ib3JkZXItcmFkaXVzOiAxMHB4O1xcbi8vLyAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4vLy8gICB9XFxuLy8vXFxuLy8vIEByZXF1aXJlIHt2YXJpYWJsZX0gJHByZWZpeC1mb3Itd2Via2l0XFxuLy8vIEByZXF1aXJlIHt2YXJpYWJsZX0gJHByZWZpeC1mb3ItbW96aWxsYVxcbi8vLyBAcmVxdWlyZSB7dmFyaWFibGV9ICRwcmVmaXgtZm9yLW1pY3Jvc29mdFxcbi8vLyBAcmVxdWlyZSB7dmFyaWFibGV9ICRwcmVmaXgtZm9yLW9wZXJhXFxuLy8vIEByZXF1aXJlIHt2YXJpYWJsZX0gJHByZWZpeC1mb3Itc3BlY1xcblxcbkBtaXhpbiBwcmVmaXhlcigkcHJvcGVydHksICR2YWx1ZSwgJHByZWZpeGVzKSB7XFxuICBAZWFjaCAkcHJlZml4IGluICRwcmVmaXhlcyB7XFxuICAgIEBpZiAkcHJlZml4ID09IHdlYmtpdCB7XFxuICAgICAgQGlmICRwcmVmaXgtZm9yLXdlYmtpdCB7XFxuICAgICAgICAtd2Via2l0LSN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgIH1cXG4gICAgfSBAZWxzZSBpZiAkcHJlZml4ID09IG1veiB7XFxuICAgICAgQGlmICRwcmVmaXgtZm9yLW1vemlsbGEge1xcbiAgICAgICAgLW1vei0jeyRwcm9wZXJ0eX06ICR2YWx1ZTtcXG4gICAgICB9XFxuICAgIH0gQGVsc2UgaWYgJHByZWZpeCA9PSBtcyB7XFxuICAgICAgQGlmICRwcmVmaXgtZm9yLW1pY3Jvc29mdCB7XFxuICAgICAgICAtbXMtI3skcHJvcGVydHl9OiAkdmFsdWU7XFxuICAgICAgfVxcbiAgICB9IEBlbHNlIGlmICRwcmVmaXggPT0gbyB7XFxuICAgICAgQGlmICRwcmVmaXgtZm9yLW9wZXJhIHtcXG4gICAgICAgIC1vLSN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgIH1cXG4gICAgfSBAZWxzZSBpZiAkcHJlZml4ID09IHNwZWMge1xcbiAgICAgIEBpZiAkcHJlZml4LWZvci1zcGVjIHtcXG4gICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgIH1cXG4gICAgfSBAZWxzZSAge1xcbiAgICAgIEB3YXJuIFxcXCJVbnJlY29nbml6ZWQgcHJlZml4OiAjeyRwcmVmaXh9XFxcIjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5AbWl4aW4gZGlzYWJsZS1wcmVmaXgtZm9yLWFsbCgpIHtcXG4gICRwcmVmaXgtZm9yLXdlYmtpdDogICAgZmFsc2UgIWdsb2JhbDtcXG4gICRwcmVmaXgtZm9yLW1vemlsbGE6ICAgZmFsc2UgIWdsb2JhbDtcXG4gICRwcmVmaXgtZm9yLW1pY3Jvc29mdDogZmFsc2UgIWdsb2JhbDtcXG4gICRwcmVmaXgtZm9yLW9wZXJhOiAgICAgZmFsc2UgIWdsb2JhbDtcXG4gICRwcmVmaXgtZm9yLXNwZWM6ICAgICAgZmFsc2UgIWdsb2JhbDtcXG59XFxuXCIsXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcblxcbi8vLyBQcm92aWRlcyBhIHF1aWNrIG1ldGhvZCBmb3Igc2V0dGluZyBhbiBlbGVtZW504oCZcyBwb3NpdGlvbi4gVXNlIGEgYG51bGxgIHZhbHVlIHRvIOKAnHNraXDigJ0gYSBzaWRlLlxcbi8vL1xcbi8vLyBAcGFyYW0ge1Bvc2l0aW9ufSAkcG9zaXRpb24gW3JlbGF0aXZlXVxcbi8vLyAgIEEgQ1NTIHBvc2l0aW9uIHZhbHVlXFxuLy8vXFxuLy8vIEBwYXJhbSB7QXJnbGlzdH0gJGNvb3JkaW5hdGVzIFtudWxsIG51bGwgbnVsbCBudWxsXVxcbi8vLyAgIExpc3Qgb2YgdmFsdWVzIHRoYXQgY29ycmVzcG9uZCB0byB0aGUgNC12YWx1ZSBzeW50YXggZm9yIHRoZSBlZGdlcyBvZiBhIGJveFxcbi8vL1xcbi8vLyBAZXhhbXBsZSBzY3NzIC0gVXNhZ2VcXG4vLy8gICAuZWxlbWVudCB7XFxuLy8vICAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwgMCBudWxsIG51bGwgMTBlbSk7XFxuLy8vICAgfVxcbi8vL1xcbi8vLyBAZXhhbXBsZSBjc3MgLSBDU1MgT3V0cHV0XFxuLy8vICAgLmVsZW1lbnQge1xcbi8vLyAgICAgbGVmdDogMTBlbTtcXG4vLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4vLy8gICAgIHRvcDogMDtcXG4vLy8gICB9XFxuLy8vXFxuLy8vIEByZXF1aXJlIHtmdW5jdGlvbn0gaXMtbGVuZ3RoXFxuLy8vIEByZXF1aXJlIHtmdW5jdGlvbn0gdW5wYWNrXFxuXFxuQG1peGluIHBvc2l0aW9uKCRwb3NpdGlvbjogcmVsYXRpdmUsICRjb29yZGluYXRlczogbnVsbCBudWxsIG51bGwgbnVsbCkge1xcbiAgQGlmIHR5cGUtb2YoJHBvc2l0aW9uKSA9PSBsaXN0IHtcXG4gICAgJGNvb3JkaW5hdGVzOiAkcG9zaXRpb247XFxuICAgICRwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB9XFxuXFxuICAkdXNlci1kZXByZWNhdGlvbi13YXJuaW5ncy1zZXR0aW5nOiAkb3V0cHV0LWJvdXJib24tZGVwcmVjYXRpb24td2FybmluZ3M7XFxuICAkb3V0cHV0LWJvdXJib24tZGVwcmVjYXRpb24td2FybmluZ3M6IGZhbHNlICFnbG9iYWw7XFxuICAkY29vcmRpbmF0ZXM6IHVucGFjaygkY29vcmRpbmF0ZXMpO1xcblxcbiAgJG9mZnNldHM6IChcXG4gICAgdG9wOiAgICBudGgoJGNvb3JkaW5hdGVzLCAxKSxcXG4gICAgcmlnaHQ6ICBudGgoJGNvb3JkaW5hdGVzLCAyKSxcXG4gICAgYm90dG9tOiBudGgoJGNvb3JkaW5hdGVzLCAzKSxcXG4gICAgbGVmdDogICBudGgoJGNvb3JkaW5hdGVzLCA0KVxcbiAgKTtcXG5cXG4gIHBvc2l0aW9uOiAkcG9zaXRpb247XFxuXFxuICBAZWFjaCAkb2Zmc2V0LCAkdmFsdWUgaW4gJG9mZnNldHMge1xcbiAgICBAaWYgaXMtbGVuZ3RoKCR2YWx1ZSkge1xcbiAgICAgICN7JG9mZnNldH06ICR2YWx1ZTtcXG4gICAgfVxcbiAgfVxcbiAgJG91dHB1dC1ib3VyYm9uLWRlcHJlY2F0aW9uLXdhcm5pbmdzOiAkdXNlci1kZXByZWNhdGlvbi13YXJuaW5ncy1zZXR0aW5nICFnbG9iYWw7XFxufVxcblwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL1JvYm90by1MaWdodC53b2ZmJykgZm9ybWF0KCd3b2ZmJyk7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybCgnLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTonZm9udGVsbG8nO1xcbiAgc3JjOiB1cmwoJy4uL2ZvbnRzL2ZvbnRlbGxvLndvZmYnKSBmb3JtYXQoJ3dvZmYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbltjbGFzc149XFxcImljb24tXFxcIl06YmVmb3JlLCBbY2xhc3MqPVxcXCIgaWNvbi1cXFwiXTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250ZWxsb1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcXG59XFxuXFxuLmljb24tb2ZmOmJlZm9yZSB7IGNvbnRlbnQ6ICdcXFxcZTgwMCc7IH1cXG5cXG5cIixcIioge1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7IH1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87IH1cXG5cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlOyB9XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmOyB9XFxuXFxuYnV0dG9uIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgfVxcblxcbi5oaWRkZW4sICN0ZW1wbGF0ZXMsIC5hcHAtc2NyZWVuOm5vdCguYWN0aXZlKSB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cXG4uaW52aXNpYmxlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbiAhaW1wb3J0YW50OyB9XFxuXFxuLm5vLW92ZXJmbG93LCAjd3JhcHBlciwgLmFwcC1zY3JlZW4ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxcblxcbi51bnNlbGVjdGFibGUge1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTsgfVxcblxcbiN3cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUm9ib3RvLUxpZ2h0LndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG87XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XFxuICBzcmM6IHVybChcXFwiLi4vZm9udHMvZm9udGVsbG8ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDsgfVxcblxcbltjbGFzc149XFxcImljb24tXFxcIl06YmVmb3JlLCBbY2xhc3MqPVxcXCIgaWNvbi1cXFwiXTpiZWZvcmUge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJmb250ZWxsb1xcXCI7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XFxuICB3b3JkLXdyYXA6IG5vcm1hbDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG4gIC8qIFN1cHBvcnQgZm9yIFNhZmFyaSBhbmQgQ2hyb21lLiAqL1xcbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcXG4gIC8qIFN1cHBvcnQgZm9yIEZpcmVmb3guICovXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcbiAgLyogU3VwcG9ydCBmb3IgSUUuICovXFxuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJzsgfVxcblxcbi5pY29uLW9mZjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFxlODAwJzsgfVxcblxcbi5sZWQtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgd2lkdGg6IDM1LjU1dnc7XFxuICBoZWlnaHQ6IDM1LjU1dnc7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiAxLjV2dyBzb2xpZCBjdXJyZW50Q29sb3I7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7IH1cXG4gICN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gLmxlZC1idXR0b24ge1xcbiAgICBjb2xvcjogIzYwNjA2MDsgfVxcbiAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAubGVkLWJ1dHRvbi5hY3RpdmUge1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IGN1cnJlbnRDb2xvciwgaW5zZXQgMCAwIDVweCBjdXJyZW50Q29sb3I7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBjb2xvcjogd2hpdGU7IH1cXG4gIC5sZWQtYnV0dG9uOm5vdCguYWN0aXZlKSB7XFxuICAgIGNvbG9yOiB3aGl0ZTsgfVxcbiAgLmxlZC1idXR0b24uYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwNjA2MDsgfVxcbiAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAubGVkLWJ1dHRvbjo6YWZ0ZXIsIC5sZWQtYnV0dG9uLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICBjb2xvcjogIzYwNjA2MDsgfVxcbiAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAubGVkLWJ1dHRvbi5hY3RpdmU6OmFmdGVyIHtcXG4gICAgY29sb3I6IHdoaXRlOyB9XFxuICAubGVkLWJ1dHRvbjo6YWZ0ZXIge1xcbiAgICBmb250LWZhbWlseTogJ2ZvbnRlbGxvJztcXG4gICAgY29udGVudDogJ1xcXFxlODAwJztcXG4gICAgZm9udC1zaXplOiAxNnZ3O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7IH1cXG5cXG4uZmxhc2hjb250cm9sIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbi5mbGFzaGJ1dHRvbl9sZWZ0IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDN2dztcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiA0NHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9mbGFzaC5zdmcpOyB9XFxuICAjd3JhcHBlcltkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIC5mbGFzaGJ1dHRvbl9sZWZ0Om5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZmxhc2hfYmxhY2suc3ZnKTsgfVxcbiAgLmZsYXNoYnV0dG9uX2xlZnQuYWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9mbGFzaF9hY3RpdmUuc3ZnKTsgfVxcblxcbi5mbGFzaGJ1dHRvbl9yaWdodCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA2MXZ3O1xcbiAgd2lkdGg6IDQ0cHg7XFxuICBoZWlnaHQ6IDQ0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2ZsYXNoLnN2Zyk7IH1cXG4gICN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gLmZsYXNoYnV0dG9uX3JpZ2h0Om5vdCguYWN0aXZlKSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZmxhc2hfYmxhY2suc3ZnKTsgfVxcbiAgLmZsYXNoYnV0dG9uX3JpZ2h0LmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvZmxhc2hfYWN0aXZlLnN2Zyk7IH1cXG5cXG4uYnJpZ2h0bmVzcy1jb250cm9sIC5hbGlnbmxlZnQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIHRvcDogMTQ4dnc7XFxuICBtYXJnaW4tbGVmdDogN3Z3O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcblxcbi5icmlnaHRuZXNzLWNvbnRyb2wgLmFsaWducmlnaHQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICB0b3A6IDE0OHZ3O1xcbiAgbWFyZ2luLXJpZ2h0OiA3dnc7XFxuICBmb250LXdlaWdodDogNTAwOyB9XFxuXFxuLmJyaWdodG5lc3MtY29udHJvbCAubnhwcmFuZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA5MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJlZDsgfVxcbiAgLmJyaWdodG5lc3MtY29udHJvbCAubnhwcmFuZ2U6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lOyB9XFxuICAuYnJpZ2h0bmVzcy1jb250cm9sIC5ueHByYW5nZTo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDclLCByZ2JhKDAsIDAsIDAsIDAuMjYpIDclLCByZ2JhKDAsIDAsIDAsIDAuMjYpIDkzJSwgdHJhbnNwYXJlbnQgOTMlLCB0cmFuc3BhcmVudCk7XFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDclLCByZ2JhKDAsIDAsIDAsIDAuMjYpIDclLCByZ2JhKDAsIDAsIDAsIDAuMjYpIDkzJSwgdHJhbnNwYXJlbnQgOTMlLCB0cmFuc3BhcmVudCk7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBhbmltYXRlOiAwLjJzO1xcbiAgICBib3gtc2hhZG93OiBub25lOyB9XFxuICAuYnJpZ2h0bmVzcy1jb250cm9sIC5ueHByYW5nZTo6YmVmb3JlIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgYmFja2dyb3VuZDogIzAwMDAwMDtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHJpZ2h0OiA1MCU7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDQzJTsgfVxcbiAgLmJyaWdodG5lc3MtY29udHJvbCAubnhwcmFuZ2U6Oi13ZWJraXQtc2xpZGVyLXRodW1iIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IC0yOXB4O1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtcmFkaWFsLWdyYWRpZW50KGNpcmNsZSwgYmxhY2ssIGJsYWNrIDE0JSwgdHJhbnNwYXJlbnQgMTQlLCB0cmFuc3BhcmVudCk7XFxuICAgIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUsIGJsYWNrLCBibGFjayAxNCUsIHRyYW5zcGFyZW50IDE0JSwgdHJhbnNwYXJlbnQpO1xcbiAgICB3aWR0aDogNjBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4OiAxOyB9XFxuXFxuLm9ub2Zmc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDMydnc7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOiA0NHB4O1xcbiAgaGVpZ2h0OiA0NHB4OyB9XFxuICAub25vZmZzd2l0Y2ggLmNoZWNrYm94IHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgICAub25vZmZzd2l0Y2ggLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoLWxhYmVsIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuICAgICN3cmFwcGVyOm5vdChbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSkgLm9ub2Zmc3dpdGNoIC5jaGVja2JveCArIC5zd2l0Y2gtbGFiZWw6OmJlZm9yZSB7XFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sb2NrLnN2Zyk7IH1cXG4gICAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAub25vZmZzd2l0Y2ggLmNoZWNrYm94OmNoZWNrZWQgKyAuc3dpdGNoLWxhYmVsOjpiZWZvcmUge1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbG9ja19hY3RpdmUuc3ZnKTsgfVxcbiAgICAjd3JhcHBlcltkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdIC5vbm9mZnN3aXRjaCAuY2hlY2tib3g6Y2hlY2tlZCArIC5zd2l0Y2gtbGFiZWw6YmVmb3JlIHtcXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xvY2tfYWN0aXZlLnN2Zyk7IH1cXG4gIC5vbm9mZnN3aXRjaCAuc3dpdGNoLWxhYmVsIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgd2lkdGg6IDQ0cHg7XFxuICAgIGhlaWdodDogNDRweDsgfVxcbiAgICAub25vZmZzd2l0Y2ggLnN3aXRjaC1sYWJlbDo6YmVmb3JlIHtcXG4gICAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgdG9wOiA1MCU7XFxuICAgICAgbGVmdDogNTAlO1xcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgICAgd2lkdGg6IDI0cHg7XFxuICAgICAgaGVpZ2h0OiAyNHB4O1xcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi9pbWcvbG9ja19ibGFjay5zdmcpO1xcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICAgICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDEwMCU7IH1cXG5cXG4uY29sb3ItY29udHJvbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjB2dztcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgfVxcbiAgLmNvbG9yLWNvbnRyb2wgYnV0dG9uIHtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cXG5cXG4ud2hlZWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgLW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKTtcXG4gIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IC0xOyB9XFxuXFxuLndyYXBwZXJbZGF0YS1jb2xvcj0nd2hpdGUnXSB7XFxuICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSdyZWQnXSB7XFxuICBjb2xvcjogI2ZmNDY0NjsgfVxcblxcbi53cmFwcGVyW2RhdGEtY29sb3I9J2dyZWVuJ10ge1xcbiAgY29sb3I6ICM0MGQ3OGI7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSdibHVlJ10ge1xcbiAgY29sb3I6ICMwMGJmZGU7IH1cXG5cXG4ud3JhcHBlcltkYXRhLWNvbG9yPSd5ZWxsb3cnXSB7XFxuICBjb2xvcjogI2ZiZWMwMDsgfVxcblwiLFwiLmxlZC1idXR0b24ge1xcbiAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIDUwJSBudWxsIG51bGwgNTAlKTtcXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkpO1xcbiAgd2lkdGg6IDM1LjU1dnc7IGhlaWdodDogMzUuNTV2dztcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBib3JkZXI6IDEuNXZ3IHNvbGlkIGN1cnJlbnRDb2xvcjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gXFxuIFxcbiAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAmIHtcXG4gICAgY29sb3I6ICM2MDYwNjA7O1xcbiAgfVxcbiAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAmLmFjdGl2ZSB7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggY3VycmVudENvbG9yLCBpbnNldCAwIDAgNXB4IGN1cnJlbnRDb2xvcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcXG4gICAgY29sb3I6JHdoaXRlO1xcbiAgfVxcbiAgJjpub3QoLmFjdGl2ZSkge1xcbiAgICBjb2xvcjogJHdoaXRlO1xcbiAgfVxcbiAgJi5hY3RpdmV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IzYwNjA2MDs7XFxuICB9XFxuICBcXG4gICN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gJjo6YWZ0ZXIsICYuYWN0aXZlOjphZnRlciB7XFxuICAgIGNvbG9yOiM2MDYwNjA7O1xcbiAgfVxcbiAgI3dyYXBwZXJbZGF0YS1jb2xvcj1cXFwid2hpdGVcXFwiXSAmLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgY29sb3I6IHdoaXRlOztcXG4gIH1cXG5cXG4gICY6OmFmdGVyIHtcXG4gICAgZm9udC1mYW1pbHk6ICdmb250ZWxsbyc7XFxuICAgIGNvbnRlbnQ6ICdcXFxcZTgwMCc7XFxuICAgIGZvbnQtc2l6ZTogMTZ2dztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwgNTAlIG51bGwgbnVsbCA1MCUpO1xcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpKTtcXG4gIH1cXG59XFxuXCIsXCIuZmxhc2hjb250cm9sIHtcXG4gIEBpbmNsdWRlIHBvc2l0aW9uKGFic29sdXRlLCA3NSUgbnVsbCBudWxsIDEyLjUlKTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZmxhc2hidXR0b25fbGVmdCB7XFxuQGluY2x1ZGUgZmxhc2hwbGFjZSgzdncpO1xcbiN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gJjpub3QoLmFjdGl2ZSkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9mbGFzaF9ibGFjay5zdmcpO1xcbn1cXG5cXG4mLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2ZsYXNoX2FjdGl2ZS5zdmcpO1xcbn1cXG5cXG59XFxuXFxuLmZsYXNoYnV0dG9uX3JpZ2h0IHtcXG5AaW5jbHVkZSBmbGFzaHBsYWNlKDYxdncpO1xcbiN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gJjpub3QoLmFjdGl2ZSkge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9mbGFzaF9ibGFjay5zdmcpO1xcbn1cXG4mLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2ZsYXNoX2FjdGl2ZS5zdmcpO1xcbn1cXG59XCIsXCIuYnJpZ2h0bmVzcy1jb250cm9sIHtcXG5cXG4gIC5hbGlnbmxlZnQge1xcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gICAgZmxvYXQ6bGVmdDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBjb2xvcjojMzMzMzMzO1xcbiAgICB0b3A6IDE0OHZ3O1xcbiAgICBtYXJnaW4tbGVmdDo3dnc7XFxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcXG5cXG4gIH1cXG4gIC5hbGlnbnJpZ2h0IHtcXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XFxuICAgIGZsb2F0OnJpZ2h0O1xcbiAgICBmb250LXNpemU6MTRweDtcXG4gICAgY29sb3I6IzMzMzMzMztcXG4gICAgdG9wOjE0OHZ3O1xcbiAgICBtYXJnaW4tcmlnaHQ6N3Z3O1xcbiAgICBmb250LXdlaWdodDo1MDA7XFxuICB9XFxuICAubnhwcmFuZ2Uge1xcbiAgICBAaW5jbHVkZSBwb3NpdGlvbihhYnNvbHV0ZSwgOTAlIG51bGwgbnVsbCA1MCUpO1xcbiAgICBAaW5jbHVkZSB0cmFuc2Zvcm0odHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpKTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIFxcbiAgICBcXG4gICAgJjpmb2N1cyB7XFxuICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgJjo6LXdlYmtpdC1zbGlkZXItcnVubmFibGUtdHJhY2sge1xcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApIDclLCByZ2JhKDAsMCwwLDAuMjYpIDclLCByZ2JhKDAsMCwwLDAuMjYpIDkzJSxyZ2JhKDAsMCwwLDApIDkzJSwgcmdiYSgwLDAsMCwwKSk7XFxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDApLCByZ2JhKDAsMCwwLDApIDclLCByZ2JhKDAsMCwwLDAuMjYpIDclLCByZ2JhKDAsMCwwLDAuMjYpIDkzJSxyZ2JhKDAsMCwwLDApIDkzJSwgcmdiYSgwLDAsMCwwKSk7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgaGVpZ2h0OiAycHg7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIGFuaW1hdGU6IDAuMnM7XFxuICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgfVxcblxcbiAgICAmOjpiZWZvcmUge1xcbiAgICAgIGRpc3BsYXk6YmxvY2s7XFxuICAgICAgaGVpZ2h0OjJweDtcXG4gICAgICBjb250ZW50OicnO1xcbiAgICAgIGJhY2tncm91bmQ6IzAwMDAwMDtcXG4gICAgICB0b3A6MHB4O1xcbiAgICAgIHJpZ2h0OiA1MCU7XFxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XFxuICAgICAgd2lkdGg6IDQzJTtcXG4gICAgfVxcblxcbiAgICAmOjotd2Via2l0LXNsaWRlci10aHVtYiB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDotMjlweDtcXG4gICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LXJhZGlhbC1ncmFkaWVudChjaXJjbGUsIGJsYWNrLCBibGFjayAxNCUsIHJnYmEoMCwwLDAsMCkgMTQlLCByZ2JhKDAsMCwwLDApKTtcXG4gICAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlLCBibGFjaywgYmxhY2sgMTQlLCByZ2JhKDAsMCwwLDApIDE0JSwgcmdiYSgwLDAsMCwwKSk7XFxuICAgICAgd2lkdGg6IDYwcHg7XFxuICAgICAgaGVpZ2h0OiA2MHB4O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHotaW5kZXg6IDE7XFxuICAgIH1cXG4gIH1cXG59XCIsXCIub25vZmZzd2l0Y2gge1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICBsZWZ0OiAzMnZ3O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDpub25lOyBcXG4gIC1tb3otdXNlci1zZWxlY3Q6bm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHdpZHRoOjQ0cHg7XFxuICBoZWlnaHQ6NDRweDtcXG5cXG5cXG4gIC5jaGVja2JveCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICY6Y2hlY2tlZCArIC5zd2l0Y2gtbGFiZWx7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41MCk7XFxuICAgIGJvcmRlci1yYWRpdXM6M3B4O1xcbiAgICB9XFxuICAgIFxcbiAgICAjd3JhcHBlcjpub3QoW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0pICYgKyAuc3dpdGNoLWxhYmVsOjpiZWZvcmUge1xcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sb2NrLnN2Zyk7XFxuICAgIH1cXG5cXG4gICAgI3dyYXBwZXI6bm90KFtkYXRhLWNvbG9yPVxcXCJ3aGl0ZVxcXCJdKSAmOmNoZWNrZWQgKyAuc3dpdGNoLWxhYmVsOjpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xvY2tfYWN0aXZlLnN2Zyk7XFxuICAgIH1cXG4gICAgXFxuXFxuICAgICN3cmFwcGVyW2RhdGEtY29sb3I9XFxcIndoaXRlXFxcIl0gJjpjaGVja2VkICsgLnN3aXRjaC1sYWJlbDpiZWZvcmUge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vaW1nL2xvY2tfYWN0aXZlLnN2Zyk7XFxuICAgIH1cXG5cXG4gIH1cXG5cXG4gIC5zd2l0Y2gtbGFiZWwge1xcbiAgICBkaXNwbGF5OiBibG9jazsgXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgXFxuICAgIHdpZHRoOjQ0cHg7XFxuICAgIGhlaWdodDo0NHB4OyBcXG4gICAgXFxuXFxuICAgICY6OmJlZm9yZSB7XFxuICAgICAgY29udGVudDpcXFwiXFxcIjtcXG4gICAgICBkaXNwbGF5OiBibG9jazsgXFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHRvcDo1MCU7XFxuICAgICAgbGVmdDo1MCU7XFxuICAgICAgQGluY2x1ZGUgdHJhbnNmb3JtKHRyYW5zbGF0ZVgoLTUwJSkgdHJhbnNsYXRlWSgtNTAlKSk7XFxuICAgICAgd2lkdGg6MjRweDtcXG4gICAgICBoZWlnaHQ6MjRweDsgXFxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9sb2NrX2JsYWNrLnN2Zyk7XFxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8gMTAwJTtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG5cXG5cIixcIi5jb2xvci1jb250cm9sIHtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6MjB2dztcXG4gIGxlZnQ6MDtcXG4gIGJvdHRvbTowO1xcbiAgY29sb3I6ICR0ZXh0LWNvbG9yO1xcbiAgZGlzcGxheTpmbGV4O1xcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDtcXG5cXG5cXG4gICAgYnV0dG9uIHtcXG4gICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgIG1hcmdpbjogMDtcXG4gICAgIGJvcmRlci1yYWRpdXM6IDA7XFxuICAgIH1cXG5cXG59XFxuXCIsXCIud2hlZWwge1xcbiAgQGluY2x1ZGUgcG9zaXRpb24oYWJzb2x1dGUsIDUwJSBudWxsIG51bGwgNTAlKTtcXG4gIEBpbmNsdWRlIHRyYW5zZm9ybSh0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSkpO1xcbiAgd2lkdGg6MTAwJTtcXG4gIHotaW5kZXg6IC0xO1xcbn1cIixcIi53cmFwcGVyIHtcXG4gICZbZGF0YS1jb2xvcj0nd2hpdGUnXSB7XFxuICAgIGNvbG9yOiAkd2hpdGU7XFxuICB9XFxuICAmW2RhdGEtY29sb3I9J3JlZCddIHtcXG4gICAgY29sb3I6ICRyZWQ7XFxuICB9XFxuICAmW2RhdGEtY29sb3I9J2dyZWVuJ10ge1xcbiAgICBjb2xvcjogJGdyZWVuO1xcbiAgfVxcbiAgJltkYXRhLWNvbG9yPSdibHVlJ10ge1xcbiAgICBjb2xvcjogJGJsdWU7XFxuICB9XFxuICAmW2RhdGEtY29sb3I9J3llbGxvdyddIHtcXG4gICAgY29sb3I6ICR5ZWxsb3c7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odXNlU291cmNlTWFwKSB7XG5cdHZhciBsaXN0ID0gW107XG5cblx0Ly8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG5cdFx0XHR2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblx0XHRcdGlmKGl0ZW1bMl0pIHtcblx0XHRcdFx0cmV0dXJuIFwiQG1lZGlhIFwiICsgaXRlbVsyXSArIFwie1wiICsgY29udGVudCArIFwifVwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdFx0XHR9XG5cdFx0fSkuam9pbihcIlwiKTtcblx0fTtcblxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXHRsaXN0LmkgPSBmdW5jdGlvbihtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG5cdFx0aWYodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG5cdFx0dmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcblx0XHRcdGlmKHR5cGVvZiBpZCA9PT0gXCJudW1iZXJcIilcblx0XHRcdFx0YWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuXHRcdH1cblx0XHRmb3IoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IG1vZHVsZXNbaV07XG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG5cdFx0XHQvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuXHRcdFx0Ly8gIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cdFx0XHRpZih0eXBlb2YgaXRlbVswXSAhPT0gXCJudW1iZXJcIiB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuXHRcdFx0XHRpZihtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XG5cdFx0XHRcdH0gZWxzZSBpZihtZWRpYVF1ZXJ5KSB7XG5cdFx0XHRcdFx0aXRlbVsyXSA9IFwiKFwiICsgaXRlbVsyXSArIFwiKSBhbmQgKFwiICsgbWVkaWFRdWVyeSArIFwiKVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3QucHVzaChpdGVtKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcblx0dmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuXHR2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cdGlmICghY3NzTWFwcGluZykge1xuXHRcdHJldHVybiBjb250ZW50O1xuXHR9XG5cblx0aWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuXHRcdHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG5cdFx0XHRyZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nXG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcblx0fVxuXG5cdHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59XG5cbi8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuXHR2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuXG5cdHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwpIHtcbiAgICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAgICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgICB9XG4gICAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAgIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gICAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInXG4gICAgfVxuXG4gICAgcmV0dXJuIHVybFxufVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yZXNldC5jc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vY3NzLWxvYWRlci9pbmRleC5qcyEuL3Jlc2V0LmNzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uL2Nzcy1sb2FkZXIvaW5kZXguanMhLi9yZXNldC5jc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCkge1xuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvICsgXCIgXCIgKyBvcHRpb25zLmluc2VydEF0LmJlZm9yZSk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsIi8qIEV2ZW50IHN5c3RlbSAqL1xuaWYodHlwZW9mIE5leHBhcUV2ZW50ID09IFwidW5kZWZpbmVkXCIpIHtcblx0Ly8gRXZlbnQgd2l0aCBuYW1lIGFuZCBjYWxsYmFja3Ncblx0d2luZG93Lk5leHBhcUV2ZW50ID0gZnVuY3Rpb24obmFtZSkge1xuXHRcdHRoaXMubmFtZSA9IG5hbWU7XG5cdFx0dGhpcy5jYWxsYmFja3MgPSBbXTtcblx0fTtcblxuXHQvLyBXZSBjYW4gcmVnaXN0ZXIgY2FsbGJhY2tzIGZvciBvdXIgZXZlbnRcblx0TmV4cGFxRXZlbnQucHJvdG90eXBlLnJlZ2lzdGVyQ2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFjayl7XG5cdFx0dGhpcy5jYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG5cdH07XG5cblx0Ly8gV2UgY2FuIHJlbW92ZSBjYWxsYmFja3MgZm9yIG91ciBldmVudFxuXHROZXhwYXFFdmVudC5wcm90b3R5cGUucmVtb3ZlQ2FsbGJhY2sgPSBmdW5jdGlvbihjYWxsYmFjayl7XG5cdFx0dmFyIGluZGV4ID0gdGhpcy5jYWxsYmFja3MuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0aWYoaW5kZXggPj0gMCkge1xuXHRcdFx0dGhpcy5jYWxsYmFja3Muc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciBOZXhwYXFIZWFkZXIgPSB7XG5cdHZlcnNpb246ICcxLjAuOScsXG5cdEV2ZW50czoge1xuXHRcdEJhY2tCdXR0b25DbGlja2VkOiBuZXcgTmV4cGFxRXZlbnQoJ0JhY2tCdXR0b25DbGlja2VkJylcblx0fSxcblx0X25vZGU6IG51bGwsXG5cdF9idXR0b25zOiBudWxsLFxuXHRfYmFja0J1dHRvbjogbnVsbCxcblx0X3RpdGxlOiAnJyxcblx0X3RpdGxlQXJyYXk6IFtdLFxuXG5cdGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLkV2ZW50c1tldmVudE5hbWVdLnJlZ2lzdGVyQ2FsbGJhY2soY2FsbGJhY2spO1xuXHR9LFxuXG5cdHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcblx0XHR0aGlzLkV2ZW50c1tldmVudE5hbWVdLnJlbW92ZUNhbGxiYWNrKGNhbGxiYWNrKTtcblx0fSxcblxuXHRkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50QXJncykge1xuXHRcdHRoaXMuRXZlbnRzW2V2ZW50TmFtZV0uY2FsbGJhY2tzLmZvckVhY2goZnVuY3Rpb24oY2FsbGJhY2spe1xuXHRcdFx0Y2FsbGJhY2soZXZlbnRBcmdzKTtcblx0XHR9KTtcblx0fSxcblxuXHRfZGV0ZWN0Q3VycmVudFBsYXRmb3JtIDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIHBsYXRmb3JtID0gKGZ1bmN0aW9uIGdldE1vYmlsZU9wZXJhdGluZ1N5c3RlbSgpIHtcblx0XHRcdHZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhO1xuXHRcdFx0Ly8gV2luZG93cyBQaG9uZSBtdXN0IGNvbWUgZmlyc3QgYmVjYXVzZSBpdHMgVUEgYWxzbyBjb250YWlucyBcIkFuZHJvaWRcIlxuXHRcdFx0aWYgKC93aW5kb3dzIHBob25lL2kudGVzdCh1c2VyQWdlbnQpKSB7XG5cdFx0XHRcdHJldHVybiBcIndpbnBob25lXCI7XG5cdFx0XHR9XG5cblx0XHRcdGlmICgvYW5kcm9pZC9pLnRlc3QodXNlckFnZW50KSkge1xuXHRcdFx0XHRyZXR1cm4gXCJhbmRyb2lkXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlPUyBkZXRlY3Rpb24gZnJvbTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvOTAzOTg4NS8xNzc3MTBcblx0XHRcdGlmICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdCh1c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW0pIHtcblx0XHRcdFx0cmV0dXJuIFwiaW9zXCI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBcInVua25vd25cIjtcblx0XHR9KSgpO1xuXG5cdFx0ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdwbGF0Zm9ybS0nICsgcGxhdGZvcm0pO1xuXHRcdGNvbnNvbGUubG9nKFwicGxhdGZvcm0gaXM6IFwiICsgcGxhdGZvcm0pO1xuXHR9LFxuXG5cdF9iYWNrQnV0dG9uQ2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSB7XG5cdFx0Y29uc29sZS5sb2coXCJiYWNrIGJ1dHRvbiBjbGlja2VkXCIpO1xuXHR9LFxuXG5cdGV4aXN0czogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuX25vZGUgIT0gbnVsbDtcblx0fSxcblxuXHRjcmVhdGU6IGZ1bmN0aW9uKHRpdGxlLCByb290KSB7XG5cdFx0dGl0bGUgPSB0aXRsZSB8fCAnJztcblx0XHRyb290ID0gcm9vdCB8fCBkb2N1bWVudC5ib2R5O1xuXHRcdGlmKHRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIGFscmVhZHkgZXhpc3RzIVwiO1xuXG5cdFx0dGhpcy5fdGl0bGUgPSB0aXRsZTtcblxuXHRcdC8vIEhUTUxcblx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdG5vZGUuaWQgPSAnbmV4cGFxLWhlYWRlcic7XG5cdFx0bm9kZS5pbm5lckhUTUwgPSBhdG9iKG54cF9oZWFkZXJfaHRtbCk7XG5cdFx0bm9kZS5jaGlsZHJlblswXS50ZXh0Q29udGVudCA9IHRoaXMuX3RpdGxlO1xuXHRcdHZhciBoZWFkZXIgPSB0aGlzO1xuXHRcdG5vZGUuY2hpbGRyZW5bMV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRoZWFkZXIuX2JhY2tCdXR0b25DbGlja0hhbmRsZXIoKTtcblx0XHRcdGhlYWRlci5kaXNwYXRjaEV2ZW50KCdCYWNrQnV0dG9uQ2xpY2tlZCcsIGUpO1xuXHRcdH0pO1xuXHRcdFxuXHRcdHRoaXMuX25vZGUgPSBub2RlO1xuXHRcdHJvb3QuaW5zZXJ0QmVmb3JlKHRoaXMuX25vZGUsIG51bGwpO1xuXHRcdHRoaXMuX2J1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbnhwLWJ1dHRvbnMtY29udGFpbmVyJyk7XG5cdFx0dGhpcy5fYmFja0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdueHAtYnV0dG9uLWJhY2snKTtcblxuXHRcdC8vIENTU1xuXHRcdHZhciBoZWFkZXJfc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXHRcdGhlYWRlcl9zdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJykpO1xuXHRcdGhlYWRlcl9zdHlsZS50ZXh0Q29udGVudCA9IGF0b2IobnhwX2hlYWRlcl9jc3MpO1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoaGVhZGVyX3N0eWxlKTtcblx0fSxcblxuXHQvKipcblx0ICogU2hvdyBoZWFkZXJcblx0ICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIFt0aXRsZSB0byBiZSBzaG93biBpbiBoZWFkZXJdXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRpZighdGhpcy5leGlzdHMoKSkge1xuXHRcdFx0dGhpcy5jcmVhdGUoKTtcblx0XHR9XG5cdFx0XG5cdFx0dGhpcy5ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ254cC1oaWRkZW4nKTtcblx0fSxcblxuXHRzZXRUaXRsZTogZnVuY3Rpb24odGl0bGUpIHtcblx0XHR0aXRsZSA9IHRpdGxlIHx8ICcnO1xuXHRcdHRoaXMuX3RpdGxlID0gdGl0bGU7XG5cblx0XHR0aGlzLl9ub2RlLmNoaWxkcmVuWzBdLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEhpZGUgaGVhZGVyXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRpZih0aGlzLmV4aXN0cygpKSB0aGlzLm5vZGUuY2xhc3NMaXN0LmFkZCgnbnhwLWhpZGRlbicpO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIXRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIG5vdCBleGlzdHMhXCI7XG5cblx0XHR0aGlzLl9ub2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5fbm9kZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFNob3cgc2hhZG93IG9mIGhlYWRlclxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0c2hvd1NoYWRvdzogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIXRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIG5vdCBleGlzdHMhXCI7XG5cdFx0dGhpcy5fbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdueHAtbm8tc2hhZG93Jyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBIaWRlIHNoYWRvdyBvZiBoZWFkZXJcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdGhpZGVTaGFkb3c6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCF0aGlzLmV4aXN0cygpKSB0aHJvdyBcIk5leHBhcUhlYWRlciBub3QgZXhpc3RzIVwiO1xuXHRcdHRoaXMuX25vZGUuY2xhc3NMaXN0LmFkZCgnbnhwLW5vLXNoYWRvdycpO1xuXHR9LFxuXHQvKipcblx0ICogQWRkIG5ldyBidXR0b24gdG8gaGVhZGVyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBzZXR0aW5ncyBbY2FuIGJlIGEgc2ltcGxlIHVybCB0byBpY29uIGltYWdlXVxuXHQgKiBAcGFyYW0ge29iamVjdH0gc2V0dGluZ3MgW29yIGFuIG9iamVjdCB3aXRoIG9wdGlvbmFsIGZpZWxkcyB0aXRsZSBhbmQgaW1hZ2VdXG5cdCAqIEBwYXJhbSB7ZnVuY3Rpb259IGhhbmRsZXIgW2pzIGZ1bmN0aW9uIHRvIGhhbmRsZSBidXR0b24gdGFwIGV2ZW50XVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0YWRkQnV0dG9uOiBmdW5jdGlvbihzZXR0aW5ncywgaGFuZGxlcikge1xuXHRcdGlmKCF0aGlzLmV4aXN0cygpKSB0aHJvdyBcIk5leHBhcUhlYWRlciBub3QgZXhpc3RzIVwiO1xuXHRcdHZhciBkZWZhdWx0X3NldHRpbmdzID0ge1xuXHRcdFx0aWQ6IG51bGwsXG5cdFx0XHR0aXRsZTogJ2FjdGlvbicsXG5cdFx0XHRpbWFnZTogbnVsbCxcblx0XHRcdHdpZHRoOiBudWxsLFxuXHRcdFx0aGVpZ2h0OiBudWxsLFxuXHRcdFx0bnVtYmVyOiAwXG5cdFx0fTtcblxuXHRcdHNldHRpbmdzID0gc2V0dGluZ3MgfHwgZGVmYXVsdF9zZXR0aW5ncztcblxuXHRcdHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblx0XHQvLyBXZSBjYW4gYXNzaWduIElEIHRvIGJ1dHRvbiBzbyB3ZSBjYW4gcmVmZXIgdG8gaXQgaW4gZnV0dXJlXG5cdFx0aWYoc2V0dGluZ3MuaWQgIT0gbnVsbCkge1xuXHRcdFx0YnV0dG9uLmlkID0gc2V0dGluZ3MuaWQ7XG5cdFx0fVxuXHRcdC8vIFdlIGNhbiBzZXQgdGl0bGUgdG8gb3VyIGJ1dHRvbiB3aXRoIG9yIGluc3RlYWQgb2YgaW1hZ2Vcblx0XHRpZihzZXR0aW5ncy50aXRsZSAhPSBudWxsKSB7XG5cdFx0XHRidXR0b24udGV4dENvbnRlbnQgPSBzZXR0aW5ncy50aXRsZTtcblx0XHR9XG5cdFx0Ly8gV2UgY2FuIHNldCBudW1iZXIgb2Ygbm90aWZpY2F0aW9ucyBmb3IgdGhlIGJ1dHRvbiBvbiBjcmVhdGlvblxuXHRcdGlmKHNldHRpbmdzLm51bWJlciAhPSBudWxsKSB7XG5cdFx0XHR2YXIgbnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRudW1iZXIuY2xhc3NMaXN0LmFkZCgnbnhwLWJ1dHRvbi1udW1iZXInKTtcblx0XHRcdHZhciB2YWx1ZSA9IHBhcnNlSW50KHNldHRpbmdzLm51bWJlcik7XG5cdFx0XHRudW1iZXIudGV4dENvbnRlbnQgPSB2YWx1ZSA9PSAwID8gJycgOiB2YWx1ZTtcblxuXHRcdFx0YnV0dG9uLmluc2VydEJlZm9yZShudW1iZXIsIG51bGwpO1xuXHRcdH1cdFx0XG5cdFx0Ly8gV2UgY2FuIHNldCBpbWFnZSBmb3Igb3VyIGJ1dHRvblxuXHRcdGlmKHNldHRpbmdzLmltYWdlICE9IG51bGwpIHtcblx0XHRcdHZhciBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXHRcdFx0aW1hZ2Uuc3JjID0gc2V0dGluZ3MuaW1hZ2U7XG5cdFx0XHQvLyBBbmQgc3BlY2lmeSBjdXN0b20gd2l0aCBhbmRcXG9yIGhlaWdodCBmb3IgaXRcblx0XHRcdGlmKHNldHRpbmdzLndpZHRoICE9IG51bGwpIGltYWdlLndpZHRoID0gc2V0dGluZ3Mud2lkdGg7XG5cdFx0XHRpZihzZXR0aW5ncy5oZWlnaHQgIT0gbnVsbCkgaW1hZ2UuaGVpZ2h0ID0gc2V0dGluZ3MuaGVpZ2h0O1xuXHRcdFx0XG5cdFx0XHRidXR0b24uaW5zZXJ0QmVmb3JlKGltYWdlLCBudWxsKTtcblx0XHR9XG5cdFx0XG5cblx0XHQvLyBpbnN0ZXJ0aW5nIGNyZWF0ZWQgYnV0dG9uXG5cdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlcik7XG5cdFx0dGhpcy5fYnV0dG9ucy5pbnNlcnRCZWZvcmUoYnV0dG9uLCBudWxsKTtcblx0fSxcblx0LyoqXG5cdCAqIE1ha2UgYnV0dG9ucyBvZiBoZWFkZXIgdW50YXBwYWJsZVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0ZGlzYWJsZUJ1dHRvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCF0aGlzLmV4aXN0cygpKSB0aHJvdyBcIk5leHBhcUhlYWRlciBub3QgZXhpc3RzIVwiO1xuXHRcdHRoaXMuX2J1dHRvbnMuY2xhc3NMaXN0LmFkZCgnbnhwLWJ1dHRvbnMtY29udGFpbmVyLS1kaXNhYmxlZCcpO1xuXHR9LFxuXHQvKipcblx0ICogRW5hYmxlIGJ1dHRvbnMgb2YgaGVhZGVyIGJhY2sgYW5kIG1ha2UgdGhlbSB0YXBwYWJsZVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0ZW5hYmxlQnV0dG9uczogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIXRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIG5vdCBleGlzdHMhXCI7XG5cdFx0dGhpcy5fYnV0dG9ucy5jbGFzc0xpc3QucmVtb3ZlKCdueHAtYnV0dG9ucy1jb250YWluZXItLWRpc2FibGVkJyk7XG5cdH0sXG5cdC8qKlxuXHQgKiBSZW1ldmUgYWxsIGJ1dHRvbnMgZnJvbSBoZWFkZXJcblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdGNsZWFuQnV0dG9uczogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIXRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIG5vdCBleGlzdHMhXCI7XG5cdFx0dGhpcy5fYnV0dG9ucy5pbm5lckhUTUwgPSAnJztcblx0fSxcblxuXHQvKipcblx0ICogQWRkIG5ldyBidXR0b24gdG8gaGVhZGVyXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpZCBbaWQgb2YgYnV0dG9uLCBjYW4gYmUgc2V0IGR1cmluZyBidXR0b24gY3JlYXRpb25dXG5cdCAqIEBwYXJhbSB7aW50fSBudW1iZXIgW251bWJlciB0byBzaG93IGZvciBidXR0b24sIDAgaXMgaGlkZGVuXVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0c2V0QnV0dG9uTnVtYmVyOiBmdW5jdGlvbihpZCwgbnVtYmVyKSB7XG5cdFx0dmFyIGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRpZihidXR0b24gPT0gbnVsbCkgdGhyb3cgXCJDYW5ub3QgZmluZCBidXR0b24gd2l0aCBzcGVjaWZpZWQgSURcIjtcblxuXHRcdHZhciBudW1iZXIgPSBidXR0b24uY2hpbGRyZW5bMF07XG5cdFx0dmFyIHZhbHVlID0gcGFyc2VJbnQobnVtYmVyKTtcblxuXHRcdG51bWJlci50ZXh0Q29udGVudCA9IHZhbHVlID09IDAgPyAnJyA6IHZhbHVlXG5cdH0sXG5cdC8qKlxuXHQgKiBNYWtlIGJhY2sgYnV0dG9uIGludmlzaWJsZVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0aGlkZUJhY2tCdXR0b246IGZ1bmN0aW9uKCkge1xuXHRcdGlmKCF0aGlzLmV4aXN0cygpKSB0aHJvdyBcIk5leHBhcUhlYWRlciBub3QgZXhpc3RzIVwiO1xuXHRcdFxuXHRcdHRoaXMuX25vZGUuY2xhc3NMaXN0LmFkZCgnbnhwLWJhY2stYnV0dG9uLWhpZGRlbicpO1xuXHRcdHRoaXMuX2JhY2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnbnhwLWhpZGRlbicpO1xuXHR9LFxuXHQvKipcblx0ICogTWFrZSBiYWNrIGJ1dHRvbiB2aXNpYmxlXG5cdCAqIEByZXR1cm4ge3ZvaWR9XG5cdCAqL1xuXHRzaG93QmFja0J1dHRvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYoIXRoaXMuZXhpc3RzKCkpIHRocm93IFwiTmV4cGFxSGVhZGVyIG5vdCBleGlzdHMhXCI7XG5cblx0XHR0aGlzLl9ub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ254cC1iYWNrLWJ1dHRvbi1oaWRkZW4nKTtcblx0XHR0aGlzLl9iYWNrQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ254cC1oaWRkZW4nKTtcblx0fSxcblx0XG5cdC8qKlxuXHQgKiBTZXQgY3VzdG9tIGljb24gZm9yIGJhY2sgYnV0dG9uXG5cdCAqIEBwYXJhbSB7c3RyaW5nfSBpY29uIFt1cmwgb2YgaWNvbiB0byBiZSB1c2VkIGluc3RlYWQgb2YgZGVmYXVsdCBpY29uXVxuXHQgKiBAcmV0dXJuIHt2b2lkfVxuXHQgKi9cblx0c2V0QmFja0J1dHRvbkljb246IGZ1bmN0aW9uKGljb24pIHtcblx0XHRpZighdGhpcy5leGlzdHMoKSkgdGhyb3cgXCJOZXhwYXFIZWFkZXIgbm90IGV4aXN0cyFcIjtcblxuXHRcdHZhciBpbWFnZSA9IHRoaXMuX25vZGUuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbnB4LWJ1dHRvbi1iYWNrLWN1c3RvbScpWzBdO1xuXHRcdGltYWdlLnNyYyA9IGljb247XG5cblx0XHR0aGlzLl9ub2RlLmNsYXNzTGlzdC5hZGQoJ254cC1jdXN0b20tYmFjay1idXR0b24nKTtcblx0fSxcblx0LyoqXG5cdCAqIFJlc3RvcmUgc3RhbmRhcmQgaWNvbiBmb3IgYmFjayBidXR0b25cblx0ICogQHJldHVybiB7dm9pZH1cblx0ICovXG5cdHJlc2V0QmFja0J1dHRvbkljb246IGZ1bmN0aW9uKCkge1xuXHRcdHRoaXMuX25vZGUuY2xhc3NMaXN0LnJlbW92ZSgnbnhwLWN1c3RvbS1iYWNrLWJ1dHRvbicpO1xuXHR9LFxuXHQvKipcblx0KiBAcGFyYW0ge29iamVjdH0ge1xuXHRcdGNvbG9yOiB7c3RyaW5nfSxcblx0XHRiYWNrZ3JvdW5kQ29sb3I6IHtzdHJpbmd9LFxuXHRcdG9wYWNpdHk6IHtudW1iZXJ9ICgwLjAtMS4wKSxcblx0XHRib3JkZXJCb3R0b20oYm94LXNoYWRvdyk6IHtzdHJpbmd9LFxuXHRcdGljb25Db2xvcjoge3N0cmluZ31cblx0fVxuXHQqL1xuXHRjdXN0b21pemU6IGZ1bmN0aW9uKGRhdGEpIHtcblx0XHRpZighdGhpcy5leGlzdHMoKSkgdGhyb3cgXCJOZXhwYXFIZWFkZXIgbm90IGV4aXN0cyFcIjtcblxuXHRcdGlmKHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKSB7XG5cdFx0XHR0aHJvdyBcIkRhdGEgbXVzdCBiZSBhbiBvYmplY3RcIjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnY29sb3InKSkge1xuXHRcdFx0XHRpZih0eXBlb2YgZGF0YS5jb2xvciAhPT0gXCJzdHJpbmdcIikge3Rocm93IFwiQ29sb3IgaGFzIHRvIGJlIHN0cmluZy5cIn1cblx0XHRcdFx0dGhpcy5fbm9kZS5zdHlsZS5jb2xvciA9IGRhdGEuY29sb3I7XG5cdFx0XHR9XG5cdFx0XHRpZihkYXRhLmhhc093blByb3BlcnR5KCdiYWNrZ3JvdW5kQ29sb3InKSkge1xuXHRcdFx0XHRpZih0eXBlb2YgZGF0YS5iYWNrZ3JvdW5kQ29sb3IgIT09IFwic3RyaW5nXCIpIHt0aHJvdyBcIkJhY2tncm91bmQgY29sb3IgaGFzIHRvIGJlIHN0cmluZy5cIn1cblx0XHRcdFx0dGhpcy5fbm9kZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBkYXRhLmJhY2tncm91bmRDb2xvcjtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ29wYWNpdHknKSkge1xuXHRcdFx0XHRpZih0eXBlb2YgZGF0YS5vcGFjaXR5ICE9PSBcIm51bWJlclwiIHx8IGRhdGEub3BhY2l0eSA8IDAuMCB8fCBkYXRhLm9wYWNpdHkgPiAxLjApIHt0aHJvdyBcIk9wYWNpdHkgaGFzIHRvIGJlIG51bWJlciBhbmQgbmVlZHMgdG8gYmUgYmV0d2VlbiAwLjAgLSAxLjBcIn07XG5cdFx0XHRcdHRoaXMuX25vZGUuc3R5bGUub3BhY2l0eSA9IGRhdGEub3BhY2l0eTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ2JvcmRlckJvdHRvbScpKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmJvcmRlckJvdHRvbSAhPT0gXCJzdHJpbmdcIikge3Rocm93IFwiQm9yZGVyLWJvdHRvbSBoYXMgdG8gYmUgc3RyaW5nLlwifVxuXHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI25leHBhcS1oZWFkZXI6bm90KC5ueHAtbm8tc2hhZG93KVwiKS5zdHlsZS5ib3hTaGFkb3cgPSBkYXRhLmJvcmRlckJvdHRvbTtcblx0XHRcdH1cblx0XHRcdGlmKGRhdGEuaGFzT3duUHJvcGVydHkoJ2ljb25Db2xvcicpKSB7XG5cdFx0XHRcdGlmKHR5cGVvZiBkYXRhLmljb25Db2xvciAhPT0gXCJzdHJpbmdcIikge3Rocm93IFwiSWNvbiBjb2xvciBoYXMgdG8gYmUgc3RyaW5nLlwifVxuXHRcdFx0XHRpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2JvZHknKVswXS5jbGFzc0xpc3QuY29udGFpbnMoXCJwbGF0Zm9ybS1hbmRyb2lkXCIpKSB7XG5cdFx0XHRcdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm54cC1zdmctc2hhcGUnKS5zZXRBdHRyaWJ1dGUoXCJmaWxsXCIsZGF0YS5pY29uQ29sb3IpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpWzBdLmNsYXNzTGlzdC5jb250YWlucyhcInBsYXRmb3JtLWlvc1wiKSkge1xuXHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ29tYmluZWQtU2hhcGVcIikuc2V0QXR0cmlidXRlKFwiZmlsbFwiLGRhdGEuaWNvbkNvbG9yKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gSWYgaGVhZGVyIGluaXRpYWxpemVkIGFmdGVyIEFQSSBqdXN0IHBsdWdnaW5nIGluLCBvdGhlcndpc2UgY3JlYXRpbmcgbWFpbiBOZXhwYXEgb2JqZWN0XG5pZih0eXBlb2YoTmV4cGFxKSAhPSAndW5kZWZpbmVkJykge1xuXHROZXhwYXEuSGVhZGVyID0gTmV4cGFxSGVhZGVyO1xufSBlbHNlIHtcblx0d2luZG93Lk5leHBhcSA9IHtcblx0XHRIZWFkZXI6IE5leHBhcUhlYWRlclxuXHR9O1xufVxuXG4vLyBOZXhwYXEuQVBJIHdpbGwgY2FsbCAnTmV4cGFxQVBJUmVhZHkgZnVuY3Rpb24gd2hlbiBpdCBpcyByZWFkeSwgdHVybmluZyBpdCBpbnRvIGRvY3VtZW50IGV2ZW50XG52YXIgTmV4cGFxQVBJUmVhZHlFdmVudCA9IG5ldyBFdmVudCgnTmV4cGFxQVBJUmVhZHknKTtcbndpbmRvdy5OZXhwYXFBUElSZWFkeSA9IGZ1bmN0aW9uKCkge1xuXHRkb2N1bWVudC5kaXNwYXRjaEV2ZW50KE5leHBhcUFQSVJlYWR5RXZlbnQpO1xufVxuXG4vLyBXaGVuIEFQSSBpcyByZWFkeSBpdCBjYW4gb3ZlcnJpZGUgbWFpbiBOZXhwYXEgb2JqZWN0IHdlIGluaXRpYWxpemVkLCBzbyBwbHVnZ2luZyBiYWNrXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdOZXhwYXFBUElSZWFkeScsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdE5leHBhcS5IZWFkZXIgPSBOZXhwYXFIZWFkZXI7XG5cdE5leHBhcS5BUEkuYWRkRXZlbnRMaXN0ZW5lcignSGFyZHdhcmVCYWNrQnV0dG9uUHJlc3NlZCcsIGZ1bmN0aW9uKCkge1xuXHRcdE5leHBhcUhlYWRlci5kaXNwYXRjaEV2ZW50KCdCYWNrQnV0dG9uQ2xpY2tlZCcsIHtcblx0XHRcdHNvdXJjZTogJ0hhcmR3YXJlQmFja0J1dHRvblByZXNzZWQnXG5cdFx0fSk7XG5cdH0pO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbihldmVudCkge1xuXHROZXhwYXFIZWFkZXIuX2RldGVjdEN1cnJlbnRQbGF0Zm9ybSgpO1xuXHR2YXIgaW5qZWN0b3JfanMgPSBhdG9iKHN2Z19pbmplY3Rvcik7XG5cdGV2YWwoaW5qZWN0b3JfanMpO1xufSk7XG5cbi8vIERlZmF1bHQgYmFjayBidXR0b24gaGFuZGxlciB0cmllcyB0byBjbG9zZSBjdXJyZW50IGluc3RhbmNlLCBcbi8vIGlmIHRoZXJlIGFyZSBhbnkgb3RoZXIgY2FsbGJhY2sgZm9yIGJhY2sgYnV0dG9uIGNsaWNrLCBpdCB3aWxsIGRvIG5vdGhpbmdcbk5leHBhcUhlYWRlci5hZGRFdmVudExpc3RlbmVyKCdCYWNrQnV0dG9uQ2xpY2tlZCcsIGZ1bmN0aW9uKGV2ZW50KSB7XG5cdGlmKE5leHBhcUhlYWRlci5FdmVudHMuQmFja0J1dHRvbkNsaWNrZWQuY2FsbGJhY2tzLmxlbmd0aCA+IDEpIHJldHVybjtcblx0TmV4cGFxLkFQSS5FeGl0KCk7XG59KTtcblxuXG4vLyA9PT09PT09PT09PSBuZXhwYXEgaGVhZGVyIGJ1aWx0LWluIHJlc291cmNlcyA9PT09XG52YXIgbnhwX2hlYWRlcl9odG1sID0gJ1BHZ3hQbFJwZEd4bFBDOW9NVDRnUEdKMWRIUnZiaUJqYkdGemN6MXVlSEF0WW5SdUxXSmhZMnNnYVdROWJuaHdMV0oxZEhSdmJpMWlZV05yUGlBOGMzWm5JSGRwWkhSb1BURXljSGdnYUdWcFoyaDBQVEUxY0hnZ2RtbGxkMEp2ZUQwaU9DQXpOU0F4TWlBeE5TSWdZMnhoYzNNOWJuaHdMV0oxZEhSdmJpMWlZV05yTFdsdmN6NGdQSEJoZEdnZ1pEMGlUVEV3TGpBeE5UZzNNRE1zTkRFdU9Ua3dORGc0TXlCRE9TNDVOakl5TlRNM0xEUXhMall3TURJNE1qZ2dNVEF1TURnME56WTFPU3cwTVM0eE9UQTVORFk1SURFd0xqTTNPVGd5TlRRc05EQXVPRGsxT0RnM015Qk1NVFV1T0RrMU9EZzNNeXd6TlM0ek56azRNalUwSUVNeE5pNDBNREUyTVRneUxETTBMamczTkRBNU5EVWdNVGN1TWpFNU1qVTBPU3d6TkM0NE56RTNOemswSURFM0xqY3pNREF5T0RZc016VXVNemd5TlRVek1TQkRNVGd1TWpNM01qWTFPU3d6TlM0NE9EazNPVEEwSURFNExqSXpNak0zT0Rrc016WXVOekUzTURjeE5pQXhOeTQzTXpJM05UWXlMRE0zTGpJeE5qWTVORE1nVERFeUxqazBOelkwTWpRc05ESXVNREF4T0RBNE1pQk1NVGN1TnpNeU56VTJNaXcwTmk0M09EWTVNaklnUXpFNExqSXpPRFE0TnpFc05EY3VNamt5TmpVeU9TQXhPQzR5TkRBNE1ESXpMRFE0TGpFeE1ESTRPVFlnTVRjdU56TXdNREk0Tml3ME9DNDJNakV3TmpNeklFTXhOeTR5TWpJM09URXpMRFE1TGpFeU9ETXdNRFlnTVRZdU16azFOVEVzTkRrdU1USXpOREV6TlNBeE5TNDRPVFU0T0RjekxEUTRMall5TXpjNU1Ea2dUREV3TGpNM09UZ3lOVFFzTkRNdU1UQTNOekk1SUVNeE1DNHdOelUwTXpJMExEUXlMamd3TXpNek5Ua2dPUzQ1TlRNME1UQTVOQ3cwTWk0ek9EVTVORGt5SURFd0xqQXhOVGczTURNc05ERXVPVGt3TkRnNE15QmFJaUJwWkQxRGIyMWlhVzVsWkMxVGFHRndaU0J6ZEhKdmEyVTlibTl1WlNCbWFXeHNQU05FTURKRk0wUWdabWxzYkMxeWRXeGxQV1YyWlc1dlpHUStQQzl3WVhSb1BpQThMM04yWno0Z1BITjJaeUIzYVdSMGFEMHhObkI0SUdobGFXZG9kRDB4Tm5CNElIWnBaWGRDYjNnOUlqQWdNQ0F4TmlBeE5pSWdZMnhoYzNNOWJuaHdMV0oxZEhSdmJpMWlZV05yTFdGdVpISnZhV1ErSUR4d2IyeDVaMjl1SUdOc1lYTnpQVzU0Y0MxemRtY3RjMmhoY0dVZ2RISmhibk5tYjNKdFBYUnlZVzV6YkdGMFpTZ3ROQ3d0TkNrZ1ptbHNiQzF5ZFd4bFBXVjJaVzV2WkdRZ1ptbHNiRDBqUkRBeVJUTkVJSEJ2YVc1MGN6MGlNakFnTVRFZ055NDRJREV4SURFekxqUWdOUzQwSURFeUlEUWdOQ0F4TWlBeE1pQXlNQ0F4TXk0MElERTRMallnTnk0NElERXpJREl3SURFeklqNDhMM0J2YkhsbmIyNCtJRHd2YzNablBpQThhVzFuSUhOeVl6MGlJaUJqYkdGemN6MXVjSGd0WW5WMGRHOXVMV0poWTJzdFkzVnpkRzl0UGlBOEwySjFkSFJ2Ymo0Z1BHUnBkaUJqYkdGemN6MXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWElnYVdROWJuaHdMV0oxZEhSdmJuTXRZMjl1ZEdGcGJtVnlQand2WkdsMlBpQThkV3dnWTJ4aGMzTTlibmh3TFdobFlXUmxjaTEwYVhSc1pYTWdhV1E5Ym5od0xXaGxZV1JsY2kxMGFYUnNaWE0rUEM5MWJENGcnO1xudmFyIG54cF9oZWFkZXJfY3NzID0gJ0kyNWxlSEJoY1Mxb1pXRmtaWEo3ZWkxcGJtUmxlRG94TURBd01EdHdiM05wZEdsdmJqcG1hWGhsWkR0MGIzQTZNRHRzWldaME9qQTdkMmxrZEdnNk1UQXdkbmM3YUdWcFoyaDBPalEwY0hnN2NHRmtaR2x1Wnpvd08yWnZiblF0YzJsNlpUb3hObkI0TzJadmJuUXRkMlZwWjJoME9tNXZjbTFoYkR0c2FXNWxMV2hsYVdkb2REbzBOSEI0TzJOdmJHOXlPaU0yTURZd05qQTdabTl1ZEMxbVlXMXBiSGs2VW05aWIzUnZMQ0pTYjJKdmRHOGdVbVZuZFd4aGNpSXNWR0ZvYjIxaExITmhibk10YzJWeWFXWTdkR1Y0ZEMxaGJHbG5ianB5YVdkb2REdGlZV05yWjNKdmRXNWtMV052Ykc5eU9uZG9hWFJsT3kxM1pXSnJhWFF0ZFhObGNpMXpaV3hsWTNRNmJtOXVaVHQxYzJWeUxYTmxiR1ZqZERwdWIyNWxmV0p2WkhrdWNHeGhkR1p2Y20wdGFXOXpJQ051Wlhod1lYRXRhR1ZoWkdWeU9tNXZkQ2d1Ym5od0xXNXZMWE5vWVdSdmR5bDdZbTl5WkdWeUxXTnZiRzl5T2lOak9HTTNZMk03WW05eVpHVnlMWE4wZVd4bE9uTnZiR2xrTzJKdmNtUmxjaTEzYVdSMGFEb3dJREFnTGpWd2VDQXdmV0p2WkhrdWNHeGhkR1p2Y20wdFlXNWtjbTlwWkNBamJtVjRjR0Z4TFdobFlXUmxjbnRvWldsbmFIUTZOVFZ3ZUR0d1lXUmthVzVuT2pBZ00zWjNPMnhwYm1VdGFHVnBaMmgwT2pVMWNIZzdZMjlzYjNJNkl6WXdOakEyTUR0bWIyNTBMWE5wZW1VNk1UVndlRHRtYjI1MExYZGxhV2RvZERvek1EQjlZbTlrZVM1d2JHRjBabTl5YlMxaGJtUnliMmxrSUNOdVpYaHdZWEV0YUdWaFpHVnlPbTV2ZENndWJuaHdMVzV2TFhOb1lXUnZkeWw3WW05NExYTm9ZV1J2ZHpvd0lESndlQ0EwY0hnZ2NtZGlZU2d3TERBc01Dd3dMakV5S1gwamJtVjRjR0Z4TFdobFlXUmxjaUJ6ZG1kN2QybGtkR2c2WVhWMGIzMGpibVY0Y0dGeExXaGxZV1JsY2l3amJtVjRjR0Z4TFdobFlXUmxjaUFxTENOdVpYaHdZWEV0YUdWaFpHVnlJQ29nS250aWIzZ3RjMmw2YVc1bk9tSnZjbVJsY2kxaWIzaDlJMjVsZUhCaGNTMW9aV0ZrWlhJdWJuaHdMV2hwWkdSbGJpd2pibVY0Y0dGeExXaGxZV1JsY2lBdWJuaHdMV2hwWkdSbGJudGthWE53YkdGNU9tNXZibVY5STI1bGVIQmhjUzFvWldGa1pYSWdZblYwZEc5dWUzQmhaR1JwYm1jNk1EdHRZWEpuYVc0Nk1EdGlZV05yWjNKdmRXNWtPakE3WW05eVpHVnlPakE3YjNWMGJHbHVaVG93ZlNOdVpYaHdZWEV0YUdWaFpHVnlQbWd4ZTNvdGFXNWtaWGc2TFRFN2NHOXphWFJwYjI0NllXSnpiMngxZEdVN2RHOXdPakE3YkdWbWREb3dPM2RwWkhSb09qRXdNQ1U3YUdWcFoyaDBPakV3TUNVN2JXRnlaMmx1T2pBN2RHVjRkQzFoYkdsbmJqcGpaVzUwWlhJN1ptOXVkQzF6YVhwbE9qRTNjSGc3YkdsdVpTMW9aV2xuYUhRNmFXNW9aWEpwZER0MFpYaDBMWFJ5WVc1elptOXliVHBwYm1obGNtbDBPMk52Ykc5eU9tbHVhR1Z5YVhRN1ptOXVkQzEzWldsbmFIUTZOREF3TzJKaFkydG5jbTkxYm1RdFkyOXNiM0k2ZEhKaGJuTndZWEpsYm5SOVltOWtlUzV3YkdGMFptOXliUzFoYm1SeWIybGtJQ051Wlhod1lYRXRhR1ZoWkdWeVBtZ3hlM1JsZUhRdFlXeHBaMjQ2YkdWbWREdG1iMjUwTFhOcGVtVTZNakJ3ZUR0d1lXUmthVzVuTFd4bFpuUTZOekJ3ZUgxaWIyUjVMbkJzWVhSbWIzSnRMV0Z1WkhKdmFXUWdJMjVsZUhCaGNTMW9aV0ZrWlhJdWJuaHdMV0poWTJzdFluVjBkRzl1TFdocFpHUmxiajVvTVh0d1lXUmthVzVuTFd4bFpuUTZNVFp3ZUgwamJtVjRjR0Z4TFdobFlXUmxjaUF1Ym5od0xXSjBiaTFpWVdOcmUzQmhaR1JwYm1jNk1DQXpkbmNnSVdsdGNHOXlkR0Z1ZER0c2FXNWxMV2hsYVdkb2REcHBibWhsY21sMGZXSnZaSGs2Ym05MEtDNXdiR0YwWm05eWJTMWhibVJ5YjJsa0tTQWpibVY0Y0dGeExXaGxZV1JsY2lBdWJuaHdMV0oxZEhSdmJpMWlZV05yTFdGdVpISnZhV1FzWW05a2VTNXdiR0YwWm05eWJTMWhibVJ5YjJsa0lDTnVaWGh3WVhFdGFHVmhaR1Z5SUM1dWVIQXRZblYwZEc5dUxXSmhZMnN0YVc5emUyUnBjM0JzWVhrNmJtOXVaWDFpYjJSNUxuQnNZWFJtYjNKdExXRnVaSEp2YVdRZ0kyNWxlSEJoY1Mxb1pXRmtaWElnTG01NGNDMWlkRzR0WW1GamF5QnpkbWQ3YldGeVoybHVMWFJ2Y0RvdE5IQjRmU051Wlhod1lYRXRhR1ZoWkdWeUlDNXVjSGd0WW5WMGRHOXVMV0poWTJzdFkzVnpkRzl0ZTJScGMzQnNZWGs2Ym05dVpYMGpibVY0Y0dGeExXaGxZV1JsY2k1dWVIQXRZM1Z6ZEc5dExXSmhZMnN0WW5WMGRHOXVJQzV1Y0hndFluVjBkRzl1TFdKaFkyc3RZM1Z6ZEc5dGUyUnBjM0JzWVhrNmFXNXNhVzVsTFdKc2IyTnJmU051Wlhod1lYRXRhR1ZoWkdWeUxtNTRjQzFqZFhOMGIyMHRZbUZqYXkxaWRYUjBiMjRnTG01NGNDMWlkWFIwYjI0dFltRmpheTFoYm1SeWIybGtMQ051Wlhod1lYRXRhR1ZoWkdWeUxtNTRjQzFqZFhOMGIyMHRZbUZqYXkxaWRYUjBiMjRnTG01NGNDMWlkWFIwYjI0dFltRmpheTFwYjNON1pHbHpjR3hoZVRwdWIyNWxmU051Wlhod1lYRXRhR1ZoWkdWeUlDNXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWEo3WkdsemNHeGhlVHBwYm14cGJtVXRZbXh2WTJ0OUkyNWxlSEJoY1Mxb1pXRmtaWElnTG01NGNDMWlkWFIwYjI1ekxXTnZiblJoYVc1bGNpNXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWEl0TFdScGMyRmliR1ZrZTI5d1lXTnBkSGs2TGpNN2NHOXBiblJsY2kxbGRtVnVkSE02Ym05dVpYMGpibVY0Y0dGeExXaGxZV1JsY2lBdWJuaHdMV0oxZEhSdmJuTXRZMjl1ZEdGcGJtVnlQbUoxZEhSdmJudHNhVzVsTFdobGFXZG9kRHBwYm1obGNtbDBPM0JoWkdScGJtYzZNQ0EwZG5jZ0lXbHRjRzl5ZEdGdWREdHdiM05wZEdsdmJqcHlaV3hoZEdsMlpYMWliMlI1TG5Cc1lYUm1iM0p0TFdsdmN5QWpibVY0Y0dGeExXaGxZV1JsY2lBdWJuaHdMV0oxZEhSdmJuTXRZMjl1ZEdGcGJtVnlQbUoxZEhSdmJudGpiMnh2Y2pvalpEQXlaVE5rTzJadmJuUXRjMmw2WlRveE4zQjRmU051Wlhod1lYRXRhR1ZoWkdWeUlDNXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWEkrWW5WMGRHOXVJQzV1ZUhBdFluVjBkRzl1TFc1MWJXSmxjbnR3YjNOcGRHbHZianBoWW5OdmJIVjBaVHQwYjNBNk5UQWxPMnhsWm5RNk5UQWxPM1J5WVc1elptOXliVHAwY21GdWMyeGhkR1ZZS0RFMUpTa2dkSEpoYm5Oc1lYUmxXU2d0T0RVbEtUdHdZV1JrYVc1bkxYSnBaMmgwT2pGd2VEdGthWE53YkdGNU9tWnNaWGc3YW5WemRHbG1lUzFqYjI1MFpXNTBPbU5sYm5SbGNqdGhiR2xuYmkxcGRHVnRjenBqWlc1MFpYSTdhR1ZwWjJoME9qRTRjSGc3YldsdUxYZHBaSFJvT2pFNGNIZzdZbTl5WkdWeU9qSndlQ0J6YjJ4cFpDQjNhR2wwWlR0aWIzSmtaWEl0Y21Ga2FYVnpPamx3ZUR0aVlXTnJaM0p2ZFc1a0xXTnZiRzl5T2lNd01XTm1PV1k3Wm05dWRDMXphWHBsT2pFd2NIZzdZMjlzYjNJNmQyaHBkR1U3YkdsdVpTMW9aV2xuYUhRNk1XVnRmU051Wlhod1lYRXRhR1ZoWkdWeUlDNXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWEkrWW5WMGRHOXVJQzV1ZUhBdFluVjBkRzl1TFc1MWJXSmxjanBsYlhCMGVYdGthWE53YkdGNU9tNXZibVY5STI1bGVIQmhjUzFvWldGa1pYSWdMbTU0Y0MxaWRYUjBiMjV6TFdOdmJuUmhhVzVsY2o1aWRYUjBiMjQ2YkdGemRDMWphR2xzWkh0d1lXUmthVzVuTFhKcFoyaDBPak4yZHlBaGFXMXdiM0owWVc1MGZTTnVaWGh3WVhFdGFHVmhaR1Z5SUM1dWVIQXRZblJ1TFdKaFkyc2djM1puTENOdVpYaHdZWEV0YUdWaFpHVnlJQzV1ZUhBdFluUnVMV0poWTJzZ2FXMW5MQ051Wlhod1lYRXRhR1ZoWkdWeUlDNXVlSEF0WW5WMGRHOXVjeTFqYjI1MFlXbHVaWEkrWW5WMGRHOXVQbk4yWnl3amJtVjRjR0Z4TFdobFlXUmxjaUF1Ym5od0xXSjFkSFJ2Ym5NdFkyOXVkR0ZwYm1WeVBtSjFkSFJ2Ymo1cGJXZDdkbVZ5ZEdsallXd3RZV3hwWjI0NmJXbGtaR3hsZlNOdVpYaHdZWEV0YUdWaFpHVnlJQzV1ZUhBdFluUnVMV0poWTJ0N1pteHZZWFE2YkdWbWREdHRZWGd0ZDJsa2RHZzZORFJ3ZUgwamJtVjRjR0Z4TFdobFlXUmxjaTV0ZFd4MGFTMTBhWFJzWlQ1b01UbzZZV1owWlhKN1pHbHpjR3hoZVRwcGJteHBibVV0WW14dlkyczdZMjl1ZEdWdWREb25KenQzYVdSMGFEb3dPMmhsYVdkb2REb3dPMjFoY21kcGJpMXNaV1owT2pFd2NIZzdZbTl5WkdWeU9qUndlQ0J6YjJ4cFpDQjBjbUZ1YzNCaGNtVnVkRHRpYjNKa1pYSXRkMmxrZEdnNk5YQjRJRFJ3ZUNBd08ySnZjbVJsY2kxMGIzQXRZMjlzYjNJNlkzVnljbVZ1ZEVOdmJHOXlmU051Wlhod1lYRXRhR1ZoWkdWeUxtMTFiSFJwTFhScGRHeGxMblJwZEd4bExYTmxiR1ZqZEdsdVp6NW9NVG82WVdaMFpYSjdZbTl5WkdWeUxYUnZjRG93TzJKdmNtUmxjaTFpYjNSMGIyMDZOWEI0SUhOdmJHbGtJQ00yTURZd05qQjlJMjVsZUhCaGNTMW9aV0ZrWlhJZ0xtNTRjQzFvWldGa1pYSXRkR2wwYkdWemUzQnZjMmwwYVc5dU9tRmljMjlzZFhSbE8yMWhjbWRwYmpvd08yWnZiblF0YzJsNlpUb3hOM0I0TzNSbGVIUXRZV3hwWjI0NmJHVm1kRHRqYjJ4dmNqb2pOakEyTURZd08ySmhZMnRuY205MWJtUXRZMjlzYjNJNmQyaHBkR1U3YkdsemRDMXpkSGxzWlRwdWIyNWxPM0JoWkdScGJtYzZNQ0F3SURFd2NIZ2dNRHQzYVdSMGFEb3hNREIyZHp0b1pXbG5hSFE2WTJGc1l5Z3hNREIyYUNBdElEUTBjSGdwTzIxaGNtZHBiaTFzWldaME9pMHpkbmQ5STI1bGVIQmhjUzFvWldGa1pYSWdMbTU0Y0Mxb1pXRmtaWEl0ZEdsMGJHVnpJR3hwZTJ4cGJtVXRhR1ZwWjJoME9qUTFjSGc3Y0dGa1pHbHVaem93SUROMmR6dGliM0prWlhJdFltOTBkRzl0T2pGd2VDQnpiMnhwWkNBalpUUmxOR1UwZlNOdVpYaHdZWEV0YUdWaFpHVnlJQzUwYVhSc1pTMXpaV3hsWTNScGJtZDdZbTl5WkdWeUxXSnZkSFJ2YlRveGNIZ2djMjlzYVdRZ0kyVTBaVFJsTkgwamJtVjRjR0Z4TFdobFlXUmxjanB1YjNRb0xuUnBkR3hsTFhObGJHVmpkR2x1WnlrZ0xtNTRjQzFvWldGa1pYSXRkR2wwYkdWemUyUnBjM0JzWVhrNmJtOXVaWDA9JztcbnZhciBzdmdfaW5qZWN0b3IgPSAnSVdaMWJtTjBhVzl1S0hRc1pTbDdJblZ6WlNCemRISnBZM1FpTzJaMWJtTjBhVzl1SUhJb2RDbDdkRDEwTG5Od2JHbDBLQ0lnSWlrN1ptOXlLSFpoY2lCbFBYdDlMSEk5ZEM1c1pXNW5kR2dzYmoxYlhUdHlMUzA3S1dVdWFHRnpUM2R1VUhKdmNHVnlkSGtvZEZ0eVhTbDhmQ2hsVzNSYmNsMWRQVEVzYmk1MWJuTm9hV1owS0hSYmNsMHBLVHR5WlhSMWNtNGdiaTVxYjJsdUtDSWdJaWw5ZG1GeUlHNDlJbVpwYkdVNklqMDlQWFF1Ykc5allYUnBiMjR1Y0hKdmRHOWpiMndzYVQxbExtbHRjR3hsYldWdWRHRjBhVzl1TG1oaGMwWmxZWFIxY21Vb0ltaDBkSEE2THk5M2QzY3Vkek11YjNKbkwxUlNMMU5XUnpFeEwyWmxZWFIxY21ValFtRnphV05UZEhKMVkzUjFjbVVpTENJeExqRWlLU3h2UFVGeWNtRjVMbkJ5YjNSdmRIbHdaUzVtYjNKRllXTm9mSHhtZFc1amRHbHZiaWgwTEdVcGUybG1LSFp2YVdRZ01EMDlQWFJvYVhOOGZHNTFiR3c5UFQxMGFHbHpmSHdpWm5WdVkzUnBiMjRpSVQxMGVYQmxiMllnZENsMGFISnZkeUJ1WlhjZ1ZIbHdaVVZ5Y205eU8zWmhjaUJ5TEc0OWRHaHBjeTVzWlc1bmRHZytQajR3TzJadmNpaHlQVEE3Ymo1eU95c3JjaWx5SUdsdUlIUm9hWE1tSm5RdVkyRnNiQ2hsTEhSb2FYTmJjbDBzY2l4MGFHbHpLWDBzWVQxN2ZTeHNQVEFzY3oxYlhTeDFQVnRkTEdNOWUzMHNaajFtZFc1amRHbHZiaWgwS1h0eVpYUjFjbTRnZEM1amJHOXVaVTV2WkdVb0lUQXBmU3h3UFdaMWJtTjBhVzl1S0hRc1pTbDdkVnQwWFQxMVczUmRmSHhiWFN4MVczUmRMbkIxYzJnb1pTbDlMR1E5Wm5WdVkzUnBiMjRvZENsN1ptOXlLSFpoY2lCbFBUQXNjajExVzNSZExteGxibWQwYUR0eVBtVTdaU3NyS1NGbWRXNWpkR2x2YmlobEtYdHpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2w3ZFZ0MFhWdGxYU2htS0dGYmRGMHBLWDBzTUNsOUtHVXBmU3gyUFdaMWJtTjBhVzl1S0dVc2NpbDdhV1lvZG05cFpDQXdJVDA5WVZ0bFhTbGhXMlZkYVc1emRHRnVZMlZ2WmlCVFZrZFRWa2RGYkdWdFpXNTBQM0lvWmloaFcyVmRLU2s2Y0NobExISXBPMlZzYzJWN2FXWW9JWFF1V0UxTVNIUjBjRkpsY1hWbGMzUXBjbVYwZFhKdUlISW9Ja0p5YjNkelpYSWdaRzlsY3lCdWIzUWdjM1Z3Y0c5eWRDQllUVXhJZEhSd1VtVnhkV1Z6ZENJcExDRXhPMkZiWlYwOWUzMHNjQ2hsTEhJcE8zWmhjaUJwUFc1bGR5QllUVXhJZEhSd1VtVnhkV1Z6ZER0cExtOXVjbVZoWkhsemRHRjBaV05vWVc1blpUMW1kVzVqZEdsdmJpZ3BlMmxtS0RROVBUMXBMbkpsWVdSNVUzUmhkR1VwZTJsbUtEUXdORDA5UFdrdWMzUmhkSFZ6Zkh4dWRXeHNQVDA5YVM1eVpYTndiMjV6WlZoTlRDbHlaWFIxY200Z2NpZ2lWVzVoWW14bElIUnZJR3h2WVdRZ1UxWkhJR1pwYkdVNklDSXJaU2tzYmlZbWNpZ2lUbTkwWlRvZ1UxWkhJR2x1YW1WamRHbHZiaUJoYW1GNElHTmhiR3h6SUdSdklHNXZkQ0IzYjNKcklHeHZZMkZzYkhrZ2QybDBhRzkxZENCaFpHcDFjM1JwYm1jZ2MyVmpkWEpwZEhrZ2MyVjBkR2x1WnlCcGJpQjViM1Z5SUdKeWIzZHpaWEl1SUU5eUlHTnZibk5wWkdWeUlIVnphVzVuSUdFZ2JHOWpZV3dnZDJWaWMyVnlkbVZ5TGlJcExISW9LU3doTVR0cFppZ2hLREl3TUQwOVBXa3VjM1JoZEhWemZIeHVKaVl3UFQwOWFTNXpkR0YwZFhNcEtYSmxkSFZ5YmlCeUtDSlVhR1Z5WlNCM1lYTWdZU0J3Y205aWJHVnRJR2x1YW1WamRHbHVaeUIwYUdVZ1UxWkhPaUFpSzJrdWMzUmhkSFZ6S3lJZ0lpdHBMbk4wWVhSMWMxUmxlSFFwTENFeE8ybG1LR2t1Y21WemNHOXVjMlZZVFV3Z2FXNXpkR0Z1WTJWdlppQkViMk4xYldWdWRDbGhXMlZkUFdrdWNtVnpjRzl1YzJWWVRVd3VaRzlqZFcxbGJuUkZiR1Z0Wlc1ME8yVnNjMlVnYVdZb1JFOU5VR0Z5YzJWeUppWkVUMDFRWVhKelpYSWdhVzV6ZEdGdVkyVnZaaUJHZFc1amRHbHZiaWw3ZG1GeUlIUTdkSEo1ZTNaaGNpQnZQVzVsZHlCRVQwMVFZWEp6WlhJN2REMXZMbkJoY25ObFJuSnZiVk4wY21sdVp5aHBMbkpsYzNCdmJuTmxWR1Y0ZEN3aWRHVjRkQzk0Yld3aUtYMWpZWFJqYUNoc0tYdDBQWFp2YVdRZ01IMXBaaWdoZEh4OGRDNW5aWFJGYkdWdFpXNTBjMEo1VkdGblRtRnRaU2dpY0dGeWMyVnlaWEp5YjNJaUtTNXNaVzVuZEdncGNtVjBkWEp1SUhJb0lsVnVZV0pzWlNCMGJ5QndZWEp6WlNCVFZrY2dabWxzWlRvZ0lpdGxLU3doTVR0aFcyVmRQWFF1Wkc5amRXMWxiblJGYkdWdFpXNTBmV1FvWlNsOWZTeHBMbTl3Wlc0b0lrZEZWQ0lzWlNrc2FTNXZkbVZ5Y21sa1pVMXBiV1ZVZVhCbEppWnBMbTkyWlhKeWFXUmxUV2x0WlZSNWNHVW9JblJsZUhRdmVHMXNJaWtzYVM1elpXNWtLQ2w5ZlN4b1BXWjFibU4wYVc5dUtHVXNiaXhoTEhVcGUzWmhjaUJtUFdVdVoyVjBRWFIwY21saWRYUmxLQ0prWVhSaExYTnlZeUlwZkh4bExtZGxkRUYwZEhKcFluVjBaU2dpYzNKaklpazdhV1lvSVM5Y0xuTjJaeTlwTG5SbGMzUW9aaWtwY21WMGRYSnVJSFp2YVdRZ2RTZ2lRWFIwWlcxd2RHVmtJSFJ2SUdsdWFtVmpkQ0JoSUdacGJHVWdkMmwwYUNCaElHNXZiaTF6ZG1jZ1pYaDBaVzV6YVc5dU9pQWlLMllwTzJsbUtDRnBLWHQyWVhJZ2NEMWxMbWRsZEVGMGRISnBZblYwWlNnaVpHRjBZUzFtWVd4c1ltRmpheUlwZkh4bExtZGxkRUYwZEhKcFluVjBaU2dpWkdGMFlTMXdibWNpS1R0eVpYUjFjbTRnZG05cFpDaHdQeWhsTG5ObGRFRjBkSEpwWW5WMFpTZ2ljM0pqSWl4d0tTeDFLRzUxYkd3cEtUcGhQeWhsTG5ObGRFRjBkSEpwWW5WMFpTZ2ljM0pqSWl4aEt5SXZJaXRtTG5Od2JHbDBLQ0l2SWlrdWNHOXdLQ2t1Y21Wd2JHRmpaU2dpTG5OMlp5SXNJaTV3Ym1jaUtTa3NkU2h1ZFd4c0tTazZkU2dpVkdocGN5QmljbTkzYzJWeUlHUnZaWE1nYm05MElITjFjSEJ2Y25RZ1UxWkhJR0Z1WkNCdWJ5QlFUa2NnWm1Gc2JHSmhZMnNnZDJGeklHUmxabWx1WldRdUlpa3BmUzB4UFQwOWN5NXBibVJsZUU5bUtHVXBKaVlvY3k1d2RYTm9LR1VwTEdVdWMyVjBRWFIwY21saWRYUmxLQ0p6Y21NaUxDSWlLU3gyS0dZc1puVnVZM1JwYjI0b2FTbDdhV1lvSW5WdVpHVm1hVzVsWkNJOVBYUjVjR1Z2WmlCcGZId2ljM1J5YVc1bklqMDlkSGx3Wlc5bUlHa3BjbVYwZFhKdUlIVW9hU2tzSVRFN2RtRnlJR0U5WlM1blpYUkJkSFJ5YVdKMWRHVW9JbWxrSWlrN1lTWW1hUzV6WlhSQmRIUnlhV0oxZEdVb0ltbGtJaXhoS1R0MllYSWdjRDFsTG1kbGRFRjBkSEpwWW5WMFpTZ2lkR2wwYkdVaUtUdHdKaVpwTG5ObGRFRjBkSEpwWW5WMFpTZ2lkR2wwYkdVaUxIQXBPM1poY2lCa1BWdGRMbU52Ym1OaGRDaHBMbWRsZEVGMGRISnBZblYwWlNnaVkyeGhjM01pS1h4OFcxMHNJbWx1YW1WamRHVmtMWE4yWnlJc1pTNW5aWFJCZEhSeWFXSjFkR1VvSW1Oc1lYTnpJaWw4ZkZ0ZEtTNXFiMmx1S0NJZ0lpazdhUzV6WlhSQmRIUnlhV0oxZEdVb0ltTnNZWE56SWl4eUtHUXBLVHQyWVhJZ2RqMWxMbWRsZEVGMGRISnBZblYwWlNnaWMzUjViR1VpS1R0MkppWnBMbk5sZEVGMGRISnBZblYwWlNnaWMzUjViR1VpTEhZcE8zWmhjaUJvUFZ0ZExtWnBiSFJsY2k1allXeHNLR1V1WVhSMGNtbGlkWFJsY3l4bWRXNWpkR2x2YmloMEtYdHlaWFIxY200dlhtUmhkR0V0WEhkYlhIZGNMVjBxSkM4dWRHVnpkQ2gwTG01aGJXVXBmU2s3Ynk1allXeHNLR2dzWm5WdVkzUnBiMjRvZENsN2RDNXVZVzFsSmlaMExuWmhiSFZsSmlacExuTmxkRUYwZEhKcFluVjBaU2gwTG01aGJXVXNkQzUyWVd4MVpTbDlLVHQyWVhJZ1p5eHRMR0lzZVN4QkxIYzllMk5zYVhCUVlYUm9PbHNpWTJ4cGNDMXdZWFJvSWwwc0ltTnZiRzl5TFhCeWIyWnBiR1VpT2xzaVkyOXNiM0l0Y0hKdlptbHNaU0pkTEdOMWNuTnZjanBiSW1OMWNuTnZjaUpkTEdacGJIUmxjanBiSW1acGJIUmxjaUpkTEd4cGJtVmhja2R5WVdScFpXNTBPbHNpWm1sc2JDSXNJbk4wY205clpTSmRMRzFoY210bGNqcGJJbTFoY210bGNpSXNJbTFoY210bGNpMXpkR0Z5ZENJc0ltMWhjbXRsY2kxdGFXUWlMQ0p0WVhKclpYSXRaVzVrSWwwc2JXRnphenBiSW0xaGMyc2lYU3h3WVhSMFpYSnVPbHNpWm1sc2JDSXNJbk4wY205clpTSmRMSEpoWkdsaGJFZHlZV1JwWlc1ME9sc2labWxzYkNJc0luTjBjbTlyWlNKZGZUdFBZbXBsWTNRdWEyVjVjeWgzS1M1bWIzSkZZV05vS0daMWJtTjBhVzl1S0hRcGUyYzlkQ3hpUFhkYmRGMHNiVDFwTG5GMVpYSjVVMlZzWldOMGIzSkJiR3dvSW1SbFpuTWdJaXRuS3lKYmFXUmRJaWs3Wm05eUtIWmhjaUJsUFRBc2NqMXRMbXhsYm1kMGFEdHlQbVU3WlNzcktYdDVQVzFiWlYwdWFXUXNRVDE1S3lJdElpdHNPM1poY2lCdU8yOHVZMkZzYkNoaUxHWjFibU4wYVc5dUtIUXBlMjQ5YVM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NKYklpdDBLeWNxUFNJbksza3JKeUpkSnlrN1ptOXlLSFpoY2lCbFBUQXNjajF1TG14bGJtZDBhRHR5UG1VN1pTc3JLVzViWlYwdWMyVjBRWFIwY21saWRYUmxLSFFzSW5WeWJDZ2pJaXRCS3lJcElpbDlLU3h0VzJWZExtbGtQVUY5ZlNrc2FTNXlaVzF2ZG1WQmRIUnlhV0oxZEdVb0luaHRiRzV6T21FaUtUdG1iM0lvZG1GeUlIZ3NVeXhyUFdrdWNYVmxjbmxUWld4bFkzUnZja0ZzYkNnaWMyTnlhWEIwSWlrc2FqMWJYU3hIUFRBc1ZEMXJMbXhsYm1kMGFEdFVQa2M3UnlzcktWTTlhMXRIWFM1blpYUkJkSFJ5YVdKMWRHVW9JblI1Y0dVaUtTeFRKaVlpWVhCd2JHbGpZWFJwYjI0dlpXTnRZWE5qY21sd2RDSWhQVDFUSmlZaVlYQndiR2xqWVhScGIyNHZhbUYyWVhOamNtbHdkQ0loUFQxVGZId29lRDFyVzBkZExtbHVibVZ5VkdWNGRIeDhhMXRIWFM1MFpYaDBRMjl1ZEdWdWRDeHFMbkIxYzJnb2VDa3NhUzV5WlcxdmRtVkRhR2xzWkNoclcwZGRLU2s3YVdZb2FpNXNaVzVuZEdnK01DWW1LQ0poYkhkaGVYTWlQVDA5Ym54OEltOXVZMlVpUFQwOWJpWW1JV05iWmwwcEtYdG1iM0lvZG1GeUlFMDlNQ3hXUFdvdWJHVnVaM1JvTzFZK1RUdE5LeXNwYm1WM0lFWjFibU4wYVc5dUtHcGJUVjBwS0hRcE8yTmJabDA5SVRCOWRtRnlJRVU5YVM1eGRXVnllVk5sYkdWamRHOXlRV3hzS0NKemRIbHNaU0lwTzI4dVkyRnNiQ2hGTEdaMWJtTjBhVzl1S0hRcGUzUXVkR1Y0ZEVOdmJuUmxiblFyUFNJaWZTa3NaUzV3WVhKbGJuUk9iMlJsTG5KbGNHeGhZMlZEYUdsc1pDaHBMR1VwTEdSbGJHVjBaU0J6VzNNdWFXNWtaWGhQWmlobEtWMHNaVDF1ZFd4c0xHd3JLeXgxS0drcGZTa3BmU3huUFdaMWJtTjBhVzl1S0hRc1pTeHlLWHRsUFdWOGZIdDlPM1poY2lCdVBXVXVaWFpoYkZOamNtbHdkSE44ZkNKaGJIZGhlWE1pTEdrOVpTNXdibWRHWVd4c1ltRmphM3g4SVRFc1lUMWxMbVZoWTJnN2FXWW9kbTlwWkNBd0lUMDlkQzVzWlc1bmRHZ3BlM1poY2lCc1BUQTdieTVqWVd4c0tIUXNablZ1WTNScGIyNG9aU2w3YUNobExHNHNhU3htZFc1amRHbHZiaWhsS1h0aEppWWlablZ1WTNScGIyNGlQVDEwZVhCbGIyWWdZU1ltWVNobEtTeHlKaVowTG14bGJtZDBhRDA5UFNzcmJDWW1jaWhzS1gwcGZTbDlaV3h6WlNCMFAyZ29kQ3h1TEdrc1puVnVZM1JwYjI0b1pTbDdZU1ltSW1aMWJtTjBhVzl1SWowOWRIbHdaVzltSUdFbUptRW9aU2tzY2lZbWNpZ3hLU3gwUFc1MWJHeDlLVHB5SmlaeUtEQXBmVHNpYjJKcVpXTjBJajA5ZEhsd1pXOW1JRzF2WkhWc1pTWW1JbTlpYW1WamRDSTlQWFI1Y0dWdlppQnRiMlIxYkdVdVpYaHdiM0owY3o5dGIyUjFiR1V1Wlhod2IzSjBjejFsZUhCdmNuUnpQV2M2SW1aMWJtTjBhVzl1SWowOWRIbHdaVzltSUdSbFptbHVaU1ltWkdWbWFXNWxMbUZ0WkQ5a1pXWnBibVVvWm5WdVkzUnBiMjRvS1h0eVpYUjFjbTRnWjMwcE9pSnZZbXBsWTNRaVBUMTBlWEJsYjJZZ2RDWW1LSFF1VTFaSFNXNXFaV04wYjNJOVp5bDlLSGRwYm1SdmR5eGtiMk4xYldWdWRDazcnO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9mb250cy9Sb2JvdG8tTGlnaHQud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vZm9udHMvZm9udGVsbG8ud29mZlwiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy8wNTNhZWZkOGFjYWMzMTM0NWQ3ZWI3MDY0MTljMmM0OC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvYjAwY2ZlMzdhZDQxOWY1OTM5NDkzYmE4ZjM5Yzc3NGYuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzLzZmYTUzNTc4MTMwYTdjZjA5ZDk5ZTY2MzEzMzZiNjNiLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy9hMzZkN2M4ODU1NzY4MzMyMmE3MDRiNzFmNzdlNWM2Yy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvNzc5YTEzODExZTljOWNkMTE5MjgxOTI0MzgxMjgxNzcuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1hZ2VzL2EwODdlMmUyZjI3OTg5NWYzYzE2MDgxNjM2NTFhYjA5LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltYWdlcy85ZTA4OGQ3Mjk4OGM0ZDk5ODkxMzU3Yjg0MzFhNzdkNy5zdmdcIjsiLCJpbXBvcnQgJ3Jlc2V0LWNzcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3Nhc3Mvc3R5bGVzLnNjc3MnO1xuXG5pbXBvcnQgaGVhZGVyUGlja2VySWNvbiBmcm9tICcuL2ltZy9waWNrZXJfYmxhY2suc3ZnJztcblxuaW1wb3J0ICd3ZWJ2aWV3LXRpbGUtaGVhZGVyL1dlYlZpZXdUaWxlSGVhZGVyLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgLyogUmV2ZWFsaW5nIFVJICovXG4gIC8vZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dyYXBwZXInKS5zdHlsZS5vcGFjaXR5ID0gMTtcblxuICBOZXhwYXEuSGVhZGVyLmNyZWF0ZSgnTEVEJyk7XG4gIC8vSGVhZGVyIEN1c3RvbWl6YXRpb25cbiAgY29uc3QgaGVhZGVyU3R5bGVzID0ge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNGRkZGRkYnLFxuICAgIGNvbG9yOiAnYmxhY2snLFxuICAgIGljb25Db2xvcjogJ2JsYWNrJyxcbiAgICBib3JkZXJCb3R0b206ICdub25lJ1xuICB9O1xuICBOZXhwYXEuSGVhZGVyLmN1c3RvbWl6ZShoZWFkZXJTdHlsZXMpO1xuICBOZXhwYXEuSGVhZGVyLmFkZEJ1dHRvbih7IGltYWdlOiBoZWFkZXJQaWNrZXJJY29uIH0sIHBpY2tlckNsaWNrSGFuZGxlcik7XG59KTtcblxuZnVuY3Rpb24gcGlja2VyQ2xpY2tIYW5kbGVyKCkge30iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTQtMiEuL3N0eWxlcy5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGVzLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanM/P3JlZi0tNC0yIS4vc3R5bGVzLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iXSwic291cmNlUm9vdCI6IiJ9