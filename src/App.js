var App = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new Song());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song){
      console.log('start to play song: ' + song.get('title'));
      this.set('currentSong', song);
      //debugger;
    }, this);

    params.library.on('queue', function(song){
      this.get('songQueue').queue(song);
    }, this);
  }

});


