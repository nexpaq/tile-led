export function iosDeviceVersionArray() {
	if (getIsIosDeviceValue()) {
		var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
		return [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
	}
}

export function getIsIosDeviceValue() {
	let iosDevice;
	if (/iP(hone|od|ad)/.test(navigator.platform)) {
		iosDevice = true;
	} else {
		iosDevice = false;
	}
	return iosDevice;
}

export function getIsIos11DeviceAndAbove(isIosDevice) {
	let isIos11DeviceAndAbove = false;
	if (!isIosDevice) {
		isIos11DeviceAndAbove = true;
	} else if (isIosDevice) {
		const iosDeviceMajorReleaseVersion = iosDeviceVersionArray()[0];
		if (iosDeviceMajorReleaseVersion >= 11) {
			isIos11DeviceAndAbove = true;
		}
	}
	return isIos11DeviceAndAbove;
}

export default {
	iosDeviceVersionArray,
	getIsIosDeviceValue,
	getIsIos11DeviceAndAbove
};