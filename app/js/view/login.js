define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/login.html');

  return Backbone.Marionette.Layout.extend({
    id: 'page-login',
    template: _.template(template),
    ui: {
        username: "#username",
        password: "#password"
    },
    events: {
      'click #login-button': 'onLogin'
    },
    onRender: function(){
        App.service.getOAUTH();
    },
    onLogin: function(e) {
      e.preventDefault();
      App.service.checkLogin(this.ui.username.val(), this.ui.password.val());
    }
  });
});