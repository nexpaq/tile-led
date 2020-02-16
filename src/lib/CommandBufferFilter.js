/**
 * CommandBufferFilter allows to send only one command in a specific interval of time.
 * This can be usefull to prevent que effect when too many commands were sent over slow connection.
 * As a result filter will just filter all commands that tile tried to send between allowed sending cycles.
 */
export default class CommandBufferFilter {
	constructor() {
    /**
     * Interval of how often to send commands.
     * 100ms by default
     */
		this.commandSendInterval = 100; // ms
    /**
     * Indicates if command buffer is running
     */
		this.active = false;
		this._commandToSend = null;
	}

	//#region Public Methods
  /**
   * Start command buffer (run send cycles)
   */
	start() {
		if (this.active) throw new Exception('CommandBufferFilter already running');
		this.active = true;
		this._loop();
	}

  /**
   * Stop command buffer
   */
	stop() {
		this.active = false;
	}

  /**
   * Assings command to be executed in next send cycle
   * @param {Function} command Function to be executed
   */
	setCommand(command) {
		this._commandToSend = command;
	}
	//#endregion

	//#region Private Methods
  /**
   * Async function to wait for specific time
   * @param {Number} milliseconds delay tile
   */
	_sleep(milliseconds) {
		return new Promise((resolve, reject) => {
			setTimeout(() => resolve(), milliseconds);
		});
	}

  /**
   * Execute current command cycle
   */
	_flush() {
		if (this._commandToSend == null) return;
		const command = this._commandToSend;
		this._commandToSend = null;
		// Making sure that command doesn't break cycle
		try {
			command();
		} catch (e) {
			console.error(e);
		}
	}

  /**
   * Loop that manages cycles and sleep periods
   */
	async _loop() {
		while (this.active) {
			this._flush();
			await this._sleep(this.commandSendInterval);
		}
	}
	//#endregion
}