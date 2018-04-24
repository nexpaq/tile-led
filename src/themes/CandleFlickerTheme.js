export default class CandleFlickerTheme {
  constructor(commandBufferFilter) {
    if(commandBufferFilter == null) throw new Exception('Command buffer required for the theme');

    this.active = false;
    this.period = 100; // ms

    this._commandBufferFilter = commandBufferFilter;
    this._color = [100, 55, 0];
  }

  start() {
    if(this.active) return;
    this.active = true;
    this._loop();
  }

  stop() {
    this.active = false;
    this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', [0,0,0]));
  }

  update() {
    const fraction = this._getRandomArbitrary(0.7, 1.2);
    const fractionColor = this._color.map(c => c * fraction);
    this._commandBufferFilter.setCommand(() => Moduware.v0.API.Module.SendCommand(Moduware.Arguments.uuid, 'SetRGB', fractionColor));
  }

  async _loop() {
    while(this.active) {
      await this.update();
      await this._sleep(this.period);
    }
  }

  _sleep(milliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), milliseconds);
    });
  }

  _getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
}