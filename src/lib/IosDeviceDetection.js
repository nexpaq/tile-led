export function iosDeviceVersionArray() {
  if (this.getIsIosDeviceValue) {
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

export default {
  iosDeviceVersionArray,
  getIsIosDeviceValue
};