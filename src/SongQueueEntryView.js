var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<%= artist %> - <%= title %>  <a class="removeTrack">[x]</a>'),
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
