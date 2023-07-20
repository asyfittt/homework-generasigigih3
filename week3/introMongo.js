use MusicDB //membuat database MusicDB

//membuat collections
db.createCollection("Songs")
db.createCollection("Artists")
db.createCollection("PopularSongs")

//memasukkan banyak data ke collection Songs
db.Songs.insertMany([
{
  "title": "Song A",
  "artists": [
    "Artist A",
    "Artist B"
  ],
  "album": "Album X"
},
{
  "title": "Song B",
  "artists": [
    "Artist C"
  ],
  "album": "Album Y"
},
{
  "title": "Song C",
  "artists": [
    "Artist D",
    "Artist E"
  ],
  "album": "Album Z"
},
{
  "title": "Song D",
  "artists": [
    "Artist F"
  ],
  "album": "Album X"
},
{
  "title": "Song E",
  "artists": [
    "Artist G",
    "Artist H"
  ],
  "album": "Album Y"
},
{
  "title": "Song F",
  "artists": [
    "Artist I"
  ],
  "album": "Album Z"
},
{
  "title": "Song G",
  "artists": [
    "Artist J",
    "Artist K"
  ],
  "album": "Album X"
},
{
  "title": "Song H",
  "artists": [
    "Artist L"
  ],
  "album": "Album Y"
},
{
  "title": "Song I",
  "artists": [
    "Artist M",
    "Artist N"
  ],
  "album": "Album Z"
},
{
  "title": "Song J",
  "artists": [
    "Artist O"
  ],
  "album": "Album X"
}]
);

//memasukkan banyak data ke collection Artists
db.Artists.insertMany([{
  "name": "Artist A",
  "dateOfBirth": "1990-01-01",
  "genres": [
    "Genre 1",
    "Genre 2",
    "Genre 3"
  ]
},
{
  "name": "Artist B",
  "dateOfBirth": "1985-03-15",
  "genres": [
    "Genre 2",
    "Genre 3"
  ]
},
{
  "name": "Artist C",
  "dateOfBirth": "1995-06-20",
  "genres": [
    "Genre 1",
    "Genre 2"
  ]
},
{
  "name": "Artist D",
  "dateOfBirth": "1988-12-10",
  "genres": [
    "Genre 3"
  ]
},
{
  "name": "Artist E",
  "dateOfBirth": "1982-07-25",
  "genres": [
    "Genre 2"
  ]
},
{
  "name": "Artist F",
  "dateOfBirth": "1992-05-05",
  "genres": [
    "Genre 1"
  ]
},
{
  "name": "Artist G",
  "dateOfBirth": "1987-09-08",
  "genres": [
    "Genre 3"
  ]
},
{
  "name": "Artist H",
  "dateOfBirth": "1991-11-30",
  "genres": [
    "Genre 2"
  ]
},
{
  "name": "Artist I",
  "dateOfBirth": "1989-04-17",
  "genres": [
    "Genre 1"
  ]
},
{
  "name": "Artist J",
  "dateOfBirth": "1994-02-22",
  "genres": [
    "Genre 2"
  ]
}]
    
);

//memasukkan banyak data ke collection PopularSongs
db.PopularSongs.insertMany([{

  "title": "Song A",
  "plays": 500,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song B",
  "plays": 750,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song C",
  "plays": 1200,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song D",
  "plays": 300,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song E",
  "plays": 900,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song F",
  "plays": 620,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song G",
  "plays": 850,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song H",
  "plays": 430,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song I",
  "plays": 1100,
  "period": "2023-07-01 to 2023-07-15"
},
{
  "title": "Song J",
  "plays": 680,
  "period": "2023-07-01 to 2023-07-15"
}
]);

// Untuk melihat semua data pada Songs
db.Songs.find()

// Untuk melihat semua data pada Artists
db.Artists.find()

// Untuk melihat semua data pada PoplarSongs
db.PopularSongs.find()

