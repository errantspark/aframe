var registerComponent = require('../core/register-component').registerComponent;

var proto = {
  defaults: {
    value: true
  },

  update: {
    value: function () {
      var object3D = this.el.object3D;
      object3D.visible = this.data;
    }
  },

  parse: {
    value: function (attrs) {
      return attrs === 'true';
    }
  },

  stringify: {
    value: function (attrs) {
      return attrs.toString();
    }
  }
};

module.exports.Component = registerComponent('visible', proto);
