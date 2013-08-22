var Song = Backbone.Model.extend({

  play: function(){
    this.trigger('play', this);
  },
  ended: function(){
    this.trigger('ended', this);
  },

  queue: function(){
    this.trigger('queue', this);
  }

});
