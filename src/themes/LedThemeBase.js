import ColorPriority from '../enums/ColorPriority';

export default class LedThemeBase {
	constructor() {
		this.active = false;
		this.period = 100; // ms
		this.colorPriority = ColorPriority.Accuracy;
	}

	start() {
		if (this.active) return;
		this.active = true;
		this._loop();
	}

	stop() {
		this.active = false;
	}

	update() { }

	async _loop() {
		while (this.active) {
			await this.update();
			await this._sleep(this.period);
		}
	}

	_sleep(milliseconds) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), milliseconds);
		});
	}
}
