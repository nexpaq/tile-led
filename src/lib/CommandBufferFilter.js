class CommandBufferFilter {
  constructor() {
    this.commandSendInterval = 100; // ms
    this.commandToSend = null;
    this.active = false;
  }

  //#region Public Methods
  start() {
    if(this.active) throw new Exception('CommandBufferFilter already running');
    this.active = true;
    this._loop();
  }

  stop() {
    this.active = false;
  }

  setCommand(command) {
    this.commandToSend = command;
  }
  //#endregion

  //#region Private Methods
  _sleep(milliseconds) {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), milliseconds);
    });
  }

  _flush() {
    if(this.commandToSend == null) return;
    this.commandToSend();
    this.commandToSend = null;
  }

  async _loop() {
    while(this.active) {
      this._flush();
      await this._sleep(this.commandSendInterval);
    }
  }
  //#endregion
}