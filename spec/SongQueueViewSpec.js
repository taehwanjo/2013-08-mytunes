describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title:'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title:'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function(){
    spyOn(SongQueueEntryView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).toHaveBeenCalled();
  });

  it('renders when add or remove event fires from the song queue collection', function(){
    spyOn(SongQueueView.prototype, 'render').andCallThrough();
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title:'test song 3'
    });
    view.collection.pop();
    expect(view.render.callCount).toEqual(2);
  });
it('removes the dom element associated with song queue entry view when [x] is clicked', function(){
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    //var firstSong = fakeSongs.at(0);
    //var firstSongEntryNode = view.$('li').eq(0);
    //spyOn(firstSong, 'removeTrack');

    view.$el.find('.removeTrack').eq(0).click();
    expect(view.$el.find('.removeTrack').length).toEqual(1);
});


});