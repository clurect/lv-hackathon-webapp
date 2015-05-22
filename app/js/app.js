define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap', 'lv-widgets'], 

function () {

  var App = new Backbone.Marionette.Application();

  App.name = 'ptsd';
  App.version = '1.0.0';

  App.AjaxLoader = new LV.AjaxLoader();
  App.Resources = new LV.Resources({path: 'MobileHealthPlatformWeb'});

  App.addRegions({
    menuRegion: '#menu',
    containerRegion: '#container'
  });

  App.vent.on('route:startup', function () {
    Backbone.history.start();
  });
  
  App.vent.on('show:comments', function (id) {
    App.router.controller.showComments();
  });

  return App;
});