import ColorPriority from '../enums/ColorPriority';
import LedThemeBase from './LedThemeBase';

export default class PoliceTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this.colorPriority = ColorPriority.Brightness;
		this._commandBufferFilter = commandBufferFilter;

		this._period = 0;

		this._redColor = [255, 0, 0];
		this._blueColor = [0, 0, 255];
		this._colorDuration = 400; // ms
	}

	stop() {
		super.stop();
		this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]));
	}

	async update() {
		if (this.active) {
			await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._redColor);
			await this._sleep(128);
		}

		if (this.active) {
			await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._blueColor);
			await this._sleep(128);
		}
	}

	// T3
	// async update() {
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00000111, ...this._redColor]);
	//   await this._sleep(150);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0])
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00000111, ...this._redColor]);
	//   await this._sleep(150);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0])
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00000111, ...this._redColor]);
	//   await this._sleep(150);

	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00111000, ...this._blueColor]);
	//   await this._sleep(150);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0])
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00111000, ...this._blueColor]);
	//   await this._sleep(150);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0])
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetOneLEDInRGB', [0b00111000, ...this._blueColor]);
	//   await this._sleep(150);
	// }

	// T2
	// async update() {
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._redColor);
	//   await this._sleep(200);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]);
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._redColor);
	//   await this._sleep(200);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]);
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._blueColor);
	//   await this._sleep(200);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]);
	//   await this._sleep(100);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._blueColor);
	//   await this._sleep(200);
	//   await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]);
	//   await this._sleep(100);
	// }

	// T1
	// async update() {
	//   this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._redColor));
	//   await this._sleep(this._colorDuration);
	//   this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', this._blueColor));
	//   await this._sleep(this._colorDuration);
	// }
}
