// playlistModel.js
class Playlist {
  constructor() {
    this.songs = [];
  }

  addSong(title, artists, url) {
    const newSong = {
      title,
      artists,
      url,
      playCount: 0,
    };
    this.songs.push(newSong);
  }

  playSong(index) {
    if (this.songs[index]) {
      this.songs[index].playCount++;
    }
  }

  getSongs() {
    return this.songs;
  }

  getMostPlayedSongs() {
    return this.songs.slice().sort((a, b) => b.playCount - a.playCount);
  }
}

module.exports = Playlist;
