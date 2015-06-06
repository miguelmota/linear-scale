(function(root) {
  'use strict';

  function LinearScale(domain, range) {
    if (!(this instanceof LinearScale)) {
      return new LinearScale(domain, range);
    }
    this.domain = [];
    this.range = [];

    if (Array.isArray(domain)) {
      this.domain = domain;
    }
    if (Array.isArray(range)) {
      this.range = range;
    }

    var scale = function(value) {
      if (typeof value !== 'number') {
        return null;
      }

      var minValue = this.domain[0];
      var maxValue = this.domain[1];

      var minScale = this.range[0];
      var maxScale = this.range[1];

      if (minScale !== 'number' && typeof maxScale !== 'number') {
        minScale = minValue;
        maxScale = maxValue;
      }

      var ratio = (maxScale - minScale) / (maxValue - minValue);
      return minScale + ratio * (value - minValue);
    }.bind(this);

    scale.domain = function(value) {
      if (Array.isArray(value)) {
        this.domain = value;
      }
      return scale;
    }.bind(this);

    scale.range = function(value) {
      if (Array.isArray(value)) {
        this.range = value;
      }
      return scale;
    }.bind(this);

    return scale;
  }

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = LinearScale;
    }
    exports.LinearScale = LinearScale;
  } else if (typeof define === 'function' && define.amd) {
    define([], function() {
      return LinearScale;
    });
  } else {
    root.LinearScale = LinearScale;
  }

})(this);
