define(function (require) {
  var App = require('app');

  return Backbone.Marionette.Controller.extend({
    login: function() {
      var App = require('app');
      var hackUrl = App.Resources.get('resource-directory').href.substr(0,App.Resources.get('resource-directory').href.indexOf('rest'))
      window.location = hackUrl+'/oauthlogin' + App.Resources.getRedirectURI();
    },
    logout: function() {
      var App = require('app');
      App.Resources.logout();
    },
    getOAUTH: function() {
        var App = require('app');
        var hackUrl = App.Resources.get('resource-directory').href.substr(0,App.Resources.get('resource-directory').href.indexOf('rest'))
        return $.get(hackUrl+'/oauthlogin' + App.Resources.getRedirectURI());
    },
    checkLogin: function(username, password){
         var App = require('app');
         //would use $.proxy but it's not working so using old school way
         var self = this;
         
         //establish the OAUTH session
         this.getOAUTH().then(function(){
              //make the login call
             $.ajax({
                type: "POST",
                url: "/ssoeproxy/j_spring_security_check",
                data: {
                    "j_username": username,
                    "j_password": password 
                },
                success: function(data, status, xhr) {
                    //the token returns a ETAG header
                    if(!xhr.getResponseHeader('ETag')){
                        //it is redirecting to the deny page
                        alert("Your username or password is wrong!");
                    } else {
                        self.login();
                    }
                },
                error: function(xhr, status, error){
                    //call login again if this happens because the app is already
                    //logged in but can't redirect correctly
                    if(xhr.status == "404"){
                        self.login();
                    }
                }
            });
         });
    },
    request: function(payload, method, url) {
      method = method || 'POST';
        
      var endpoint = url || '/ptsd-0.0.1/posts';

      var promise = $.ajax({
        type: method,
        contentType: 'application/json; charset=UTF-8',
        url: endpoint,
        data: JSON.stringify(payload),
        dataType: 'json'
      });

      return promise;
    },
    getPost: function(id) {
      return $.get('/ptsd-0.0.1/post/' + id);
    }
  });
});