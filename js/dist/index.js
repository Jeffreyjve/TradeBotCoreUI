/**
/**
 * --------------------------------------------------------------------------
 * TradeBotCoreUI (v2.0.3): index.js
 * Licensed under MIT
 * --------------------------------------------------------------------------
 */
(function ($) {
  if (typeof $ === 'undefined') {
    throw new TypeError('TradeBotCoreUI\'s JavaScript requires jQuery. jQuery must be included before TradeBotCoreUI\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('TradeBotCoreUI\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

window.getStyle = getStyle;
window.hexToRgb = hexToRgb;
window.hexToRgba = hexToRgba;
window.rgbToHex = rgbToHex;
//# sourceMappingURL=index.js.map