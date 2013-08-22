describe ('SongQueueEntryView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = newSongQueue([
    {
      artist: 'data',
      url: 'test/testsong.mp3',
      title: 'test song'
    },
    {
      artist: 'data',
      url: 'test/testsong2.mp3',
      title: 'test song 2'
    }
    ]);
  });
});