define(['jquery', 'underscore', 'backbone', 'marionette', 'bootstrap', 'lv-widgets'], function () {

  var App = new Backbone.Marionette.Application();

  App.name = 'ptsd';
  App.version = '1.0.0';

  App.AjaxLoader = new LV.AjaxLoader();
  App.Resources = new LV.Resources({path: 'MobileHealthPlatformWeb'});

  App.addRegions({
    containerRegion: '#container'
  });

  App.vent.on('route:startup', function () {
    Backbone.history.start();
  });

  return App;
});