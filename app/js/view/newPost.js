define(function (require) {
  var App = require('app');
  var template = require('text!tmpl/newPost.html');

  return Backbone.Marionette.ItemView.extend({
    className: 'container new-post-page',
    template: _.template(template),
    events: {
      'submit form': 'onSubmitPost',
      'click .moods label': 'onMoodClick',
      'click .cancel-button': 'onCancelClick'
    },
    ui: {
      inputs: '[data-attr]',
      moods: '.moods label'
    },
    templateHelpers: function() {
      var type = Backbone.Marionette.getOption(this, 'type');
      return {
        'type': type
      };
    },
    onSubmitPost: function(e) {
      var type = Backbone.Marionette.getOption(this, 'type') || 'ask-a-doctor';

      App.service.request(_.extend(this.serialize(), {
        "author": "me",
        "type": type,
        "date": Date.now()
      }), 'PUT').then(function() {
        App.router.navigate('', { trigger: true });
      });
      e.preventDefault();
    },
    onMoodClick: function(e) {
      this.ui.moods.removeClass('active');
      $(e.currentTarget).addClass('active');
    },
    onCancelClick: function(e) {
      e.preventDefault();
      App.router.navigate('', { trigger: true });
    },
    serialize: function() {
      var serializedOut = {};
      this.ui.inputs.each(function(i, e) {
        var $e = $(e), dataAttr = $e.attr('data-attr'), val;

        switch (dataAttr) {
          case 'mood':
            val = $('input[data-attr="mood"]:checked').val();
            break;
          case 'isPublic':
            val = $e.is(':checked');
            break;
          default:
            val = $e.val();
        }

        serializedOut[dataAttr] = val;
      });
      return serializedOut;
    }
  });
});