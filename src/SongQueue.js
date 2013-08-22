var SongQueue = Songs.extend({
  initialize: function(){
    this.on('add', function(){
      if(this.length===1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.ended();
    });
  },
  playFirst: function(){
    this.at(0).play();
  },
  ended: function(){
    this.remove(this.at(0));
    if(this.length>0){
      this.playFirst();
    }
  },

  queue: function(song){
    this.add(song);
  }

});
