define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/newPost.html');

  return Backbone.Marionette.ItemView.extend({
    template: _.template(template),
    events: {
      'submit form': 'onSubmitPost'
    },
    ui: {
      inputs: '[data-attr]'
    },
    onSubmitPost: function(e) {
      App.service.newPost(_.extend(this.serialize(), {
        "author": "me",
        "date": Date.now()
      }));
      e.preventDefault();
    },
    serialize: function() {
      var serializedOut = {};
      this.ui.inputs.each(function(i, e) {
        var $e = $(e), dataAttr = $e.attr('data-attr'), val;

        switch (dataAttr) {
          case 'mood':
            val = $('input[data-attr="mood"]:checked').val();
          default:
            val = $e.val();
        }

        serializedOut[dataAttr] = val;
      });
      return serializedOut;
    }
  });
});