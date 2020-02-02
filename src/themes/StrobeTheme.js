import LedThemeBase from './LedThemeBase';

export default class StrobeTheme extends LedThemeBase {
	constructor(commandBufferFilter) {
		super();
		if (commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
		this._commandBufferFilter = commandBufferFilter;
	}

	stop() {
		super.stop();
		this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [0, 0]));
	}

	async update() {
		await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [8000, 8000]);
		await this._sleep(100);
		await Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetFlashes', [0, 0]);
	}
}