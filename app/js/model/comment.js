define(function (require) {
  var App = require('app');
  var moment = require('moment');
  
  return Backbone.Model.extend({
    parse: function (response) {
      var momentDate = moment(response.date);
    	var newDate = {};
    	newDate.day = momentDate.format('D');
    	newDate.month = momentDate.format('MMM');
    	newDate.year = momentDate.format('YYYY');
    	
      response.dateObj = newDate;
      
      return response;
    }
  });
});