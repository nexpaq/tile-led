import Color from 'color';
import LedThemeBase from './LedThemeBase';
import ColorPriority from '../enums/ColorPriority';
import { setRgbColorWithTemperatureProtection as setRgbColor } from '../utils';

export default class DiscoTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this.colorPriority = ColorPriority.Brightness;
		this._commandBufferFilter = commandBufferFilter;

		this.period = 100;
		this._position = 0;
		this._sequence = this._discoSequence();
	}

	stop() {
		super.stop();
		setRgbColor(this._commandBufferFilter, 0, 0, 0);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]));
	}

	async update() {
		// get item to play
		const item = this._sequence[this._position];

		// update position
		this._position++;
		if (this._position >= this._sequence.length) this._position = 0;

		// play item
		this.period = item.duration;
		const [r, g, b] = [item.r, item.g, item.b];
		setRgbColor(this._commandBufferFilter, r, g, b);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]));
	}

	_discoSequence() {
		return [
			{ r: 255, g: 50, b: 0, duration: 100 },
			{ r: 255, g: 0, b: 255, duration: 100 },
			{ r: 0, g: 250, b: 0, duration: 1000 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 255, g: 50, b: 0, duration: 100 },
			{ r: 139, g: 0, b: 0, duration: 100 },
			{ r: 0, g: 250, b: 0, duration: 100 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 255, g: 108, b: 180, duration: 1000 },
			{ r: 139, g: 0, b: 0, duration: 100 },
			{ r: 20, g: 0, b: 0, duration: 100 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 50, g: 50, b: 100, duration: 100 },
			{ r: 10, g: 0, b: 0, duration: 100 },
			{ r: 150, g: 0, b: 250, duration: 100 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 0, g: 250, b: 50, duration: 100 },
			{ r: 1, g: 250, b: 250, duration: 100 },
			{ r: 100, g: 20, b: 200, duration: 1000 },
			{ r: 139, g: 250, b: 250, duration: 100 },
			{ r: 20, g: 0, b: 250, duration: 1000 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 150, g: 0, b: 250, duration: 100 },
			{ r: 0, g: 0, b: 0, duration: 100 },
			{ r: 20, g: 250, b: 20, duration: 100 },
			{ r: 50, g: 150, b: 250, duration: 100 },
			{ r: 100, g: 50, b: 200, duration: 1000 }
		];
	}
}
