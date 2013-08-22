var PlayerView = Backbone.View.extend({

  el: '<audio controls autoplay />',

  events: {
    'ended' : function() {
      this.model.dequeue();
    }
  },

  initialize: function() {
    // this.$el.on('ended', function(){ //this is an HTML5 ended signal, it is not my own ended trigger
    //   this.model.dequeue();
    // });
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function(){
    return this.$el.attr('src', this.model.get('url'));
  }

});
