var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><%= playCount %></td>'),
  initialize: function(){
    this.model.on('change:playCount', this.render, this);
  },
  events: {
    'click': function() {
      this.model.queue();
      this.render();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
