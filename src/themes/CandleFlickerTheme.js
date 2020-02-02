import LedThemeBase from './LedThemeBase';
import { setRgbColorWithTemperatureProtection as setRgbColor } from '../utils';

export default class CandleFlickerTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');

		this._commandBufferFilter = commandBufferFilter;
		this._color = [100, 90, 0];
	}

	stop() {
		super.stop();
		setRgbColor(this._commandBufferFilter, 0, 0, 0);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]));
	}

	update() {
		const fraction = this._getRandomArbitrary(0.7, 1.2);
		const fractionColor = this._color.map(c => c * fraction);
		setRgbColor(this._commandBufferFilter, ...fractionColor);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', fractionColor));
	}

	_getRandomArbitrary(min, max) {
		return Math.random() * (max - min) + min;
	}
}
