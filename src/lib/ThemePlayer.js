export default class ThemePlayer {
  constructor() {
    this.themes = {};

    this._currentTheme = null;
  }

  addTheme(name, theme) {
    this.themes[name] = theme;
  }

  play(name) {
    if(typeof(this.themes[name]) == 'undefined') throw new Exception('Unknown theme name');
    if(this._currentTheme != null) {
      this._currentTheme.stop();
    }
    this._currentTheme = this.themes[name];
    this._currentTheme.start();
  }

  stop() {
    if(this._currentTheme != null) {
      this._currentTheme.stop();
      this._currentTheme = null;
    }
  }

}