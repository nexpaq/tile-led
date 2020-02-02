import Color from 'color';
import LedThemeBase from './LedThemeBase';
import { setRgbColorWithTemperatureProtection as setRgbColor } from '../utils';

export default class MeditationTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this._commandBufferFilter = commandBufferFilter;

		// this.period = 100;
		this._color = Color('red');
	}

	stop() {
		super.stop();

		setRgbColor(this._commandBufferFilter, 0, 0, 0);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]));
	}

	async update() {
		this._color = this._color.rotate(2);
		const [r, g, b] = [this._color.red(), this._color.green(), this._color.blue()];
		setRgbColor(this._commandBufferFilter, r, g, b);
		// this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]));
	}
}