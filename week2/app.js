const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Playlist = require("./models/playlistModel");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// inisialisasi model playlist
const playlist = new Playlist();

// Fungsi Add song pada playlist
app.post("/playlist", (req, res) => {
  const { title, artists, url } = req.body;
  if (!title || !artists || !url) {
    return res
      .status(400)
      .json({ error: "Title, Artists, and URL are required" });
  }

  playlist.addSong(title, artists, url);
  res.status(201).json({ message: "Berhasil memasukkan lagu ke playlist" });
});

// Fungsi mainkan lagu
app.put("/playlist/:songIndex/play", (req, res) => {
  const songIndex = req.params.songIndex;
  if (!playlist.getSongs()[songIndex]) {
    return res.status(404).json({ error: "Lagu tidak ditemukan di playlist" });
  }

  playlist.playSong(songIndex);
  res.status(200).json({ message: "Putar lagu dari playlist" });
});
/* Fungsi mainkan lagu kalo di postman udah bisa tapi kalo di browser
 * muncul tulisan "Cannot GET /playlist/0/play"
 */

// Tampilkan list lagu dalam playlist
app.get("/playlist", (req, res) => {
  res.status(200).json(playlist.getSongs());
});

// Tampilkan lagu yang paling banyak diputar
app.get("/playlist/mostplayed", (req, res) => {
  res.status(200).json(playlist.getMostPlayedSongs());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
