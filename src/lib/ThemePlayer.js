import ColorPriority from '../enums/ColorPriority';

export default class ThemePlayer {
	constructor() {
		this.themes = {};
		this._currentTheme = null;
	}

	addTheme(name, theme) {
		this.themes[name] = theme;
	}

	play(name) {
		if (typeof (this.themes[name]) == 'undefined') throw new Exception('Unknown theme name');
		if (this._currentTheme != null) {
			this._currentTheme.stop();
		}
		this._currentTheme = this.themes[name];
		if (this._currentTheme.colorPriority == ColorPriority.Brightness) {
			Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'PrioritizeColorBrightness', []);
		} else if (this._currentTheme.colorPriority == ColorPriority.Accuracy) {
			Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'PrioritizeColorAccuracy', []);
		}
		this._currentTheme.start();
	}

	stop() {
		if (this._currentTheme != null) {
			this._currentTheme.stop();
			this._currentTheme = null;
		}
	}

}
