import Color from 'color';
import LedThemeBase from './LedThemeBase';
import ColorPriority from '../enums/ColorPriority';
import { setRgbColorWithTemperatureProtection as setRgbColor } from '../utils';

export default class RomanceTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this.colorPriority = ColorPriority.Brightness;
		this._commandBufferFilter = commandBufferFilter;

		// this.period = 100;

		this._color = Color.rgb(254, 1, 5); // hue 359
		this._hueRange = { left: 25, right: 310 }; // 30 <= hue <= 310
		this._lightnessRange = { min: 40, max: 60 }; // 40 <= lightness <= 60
		this._direction = 1; // 1 forward, -1 backward
		this._speed = 0.5;
	}

	stop() {
		super.stop();
		setRgbColor(this._commandBufferFilter, 0, 0, 0);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]));
	}

	async update() {
		this._color = this._color.rotate(this._speed * this._direction);
		const hue = this._color.hue();
		if (hue > this._hueRange.left && hue < this._hueRange.right) this._direction *= -1;

		const lightnessDelta = this._getRandomArbitrary(-0.5, 0.5);
		let lightness = this._color.lightness();
		lightness += lightnessDelta;
		if (lightness > this._lightnessRange.max) lightness = this._lightnessRange.max;
		if (lightness < this._lightnessRange.min) lightness = this._lightnessRange.min;
		this._color = this._color.lightness(lightness);

		const [r, g, b] = [this._color.red(), this._color.green(), this._color.blue()];
		setRgbColor(this._commandBufferFilter, r, g, b);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]));
	}

	_getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
}
