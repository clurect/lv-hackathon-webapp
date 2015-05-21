define(function (require) {
  var App = require('app');

  return Backbone.Marionette.Controller.extend({
    login: function() {
      var App = require('app');
      window.location = App.Resources.get('oauth-login').href + App.Resources.getRedirectURI();
    },
    logout: function() {
      var App = require('app');
      App.Resources.logout();
    },
    getOAUTH: function() {
        var App = require('app');
        $.get(App.Resources.get('oauth-login').href + App.Resources.getRedirectURI());
    },
    checkLogin: function(username, password){
         var App = require('app');
         
         $.ajax({
            type: "POST",
            url: "/ssoeproxy/j_spring_security_check",
            data: {
                "j_username": username,
                "j_password": password 
            },
            success: $.proxy(function(data, status, xhr) {
                //the token returns a ETAG header
                if(!xhr.getResponseHeader('ETag')){
                    //it is redirecting to the deny page
                    alert("Your username or password is wrong!");
                } else {
                    this.login();
                }
            }, this)
        });
    },
    newPost: function(payload) {
      var endpoint = '/ptsd-0.0.1/posts';

      var promise = $.ajax({
        type: 'POST',
        contentType: 'application/json; charset=UTF-8',
        url: endpoint,
        data: JSON.stringify(payload),
        dataType: 'json'
      });

      return promise;
    }
  });
});