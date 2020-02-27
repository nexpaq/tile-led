import Color from 'color';

let rgbTemperatureProtection = false;

/**
 * Compares two colors
 * @param {Color} color1 First color
 * @param {Color} color2 Second color
 */
export function isSameColor(color1, color2) {
	if (color1 == null || color2 == null) throw new Exception('Both colors must be defined.');
	return color1.red() == color2.red() &&
		color1.green() == color2.green() &&
		color1.blue() == color2.blue();
}

/**
 * Adjusts color, 0 adjustment will return same number, 
 * -1 will be full black and 1 will be full white.
 * @param {Color} color Color to adjust
 * @param {Number} adjustment Adjustment setting
 */
export function adjustColor(color, adjustment) {
	if (color == null) throw new Exception('Color must be defined.');
	if (typeof (adjustment) != 'number') throw new Exception('Adjustment must be a number.');
	if (adjustment < -1 || adjustment > 1) throw new Exception('Adjustment value must be between -1 and 1.')

	let newColor = color;

	if (adjustment > 0) {
		const lighten = adjustment;
		newColor = newColor.lighten(lighten);
	} else {
		const darken = adjustment * -1;
		newColor = newColor.darken(darken);
	}

	return newColor;
}

export function setRgbColorWithTemperatureProtection(commandFilter, r, g, b) {
	const color = Color.rgb(r, g, b);
	const lightness = color.lightness();
	if (lightness > 70) {
		if (rgbTemperatureProtection == false) {
			rgbTemperatureProtection = true;

			console.log('turn on temperature protection');
			Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'TurnOnRgbLedTemperatureProtection', [5 * 60]); // 5 minutes
		}
	} else {
		if (rgbTemperatureProtection == true) {
			rgbTemperatureProtection = false;
			console.log('turn off temperature protection');
			Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'TurnOffRgbLedTemperatureProtection', []); // off
		}
	}
	if (commandFilter != null) {
		commandFilter.setCommand(() => Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b]));
	} else {
		Moduware.v1.Module.ExecuteCommand(Moduware.Arguments.uuid, 'SetRGB', [r, g, b])
	}
}