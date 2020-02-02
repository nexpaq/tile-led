import LedThemeBase from './LedThemeBase';

export default class SOSTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this._commandBufferFilter = commandBufferFilter;

		this.period = 1000;
	}

	stop() {
		super.stop();
		this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [0, 0]));
	}

	async update() {
		// S
		await this._flash(200);
		await this._flash(200);
		await this._flash(200);

		// O
		await this._flash(500);
		await this._flash(500);
		await this._flash(500);

		// S
		await this._flash(200);
		await this._flash(200);
		await this._flash(200);
	}

	async _flash(duration) {
		if (!this.active) return;
		await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [8000, 8000]);
		await this._sleep(duration);
		await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [0, 0]);
		await this._sleep(duration);
	}
}