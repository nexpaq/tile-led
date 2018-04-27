import Color from 'color';
import LedThemeBase from './LedThemeBase';

export default class MeditationTheme extends LedThemeBase {
  constructor(commandBufferFilter) {
    super();
    if(commandBufferFilter == null) throw new Exception('Command buffer required for the theme');
    this._commandBufferFilter = commandBufferFilter;

    // this.period = 100;
    this._color = Color('red');
  }

  stop() {
    super.stop();
    this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0, 0, 0]));
  }

  async update() {
    this._color = this._color.rotate(2);
    const [r, g, b] = [this._color.red(), this._color.green(), this._color.blue()];
    this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]));
  }
}