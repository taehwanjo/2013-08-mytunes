var SongQueueView = Backbone.View.extend({

  //tagName: 'ol',

  initialize: function() {
    //this.render();

    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.html('');
    // _.each(this.collection, function(){
    //   this.$el.append("<li>" + this.title + "</li>");
    // });
    this.$el.append('<hr><b>Song Queue</b>');
    this.$el.append('<ol class="hobo"></ol>');
      this.$el.find('ol').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
    return this.$el;
  }

});
