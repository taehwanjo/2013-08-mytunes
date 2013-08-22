var SongQueueEntryView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('<%= artist %> - <%= title %>  <a class="removeTrack">[x]</a>'),
  events: {
    'click .removeTrack': 'removeTrack',
    'ended': 'removeTrack'
  },
  removeTrack: function(e){
    //this.collection.remove(this.model);
    this.render();
    this.model.dequeue();
  },
  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
