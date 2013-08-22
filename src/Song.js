var Song = Backbone.Model.extend({

  initialize: function(){
    this.set('playCount', 0);
  },

  play: function(){
    this.set('playCount', this.get('playCount') + 1);
    this.trigger('play', this);
  },
  // ended: function(){
  //   this.trigger('ended', this);
  // },
  dequeue: function(){
    this.trigger('dequeue', this);
  },
  queue: function(){
    this.trigger('queue', this);
  }

});
