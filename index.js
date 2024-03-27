// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop" },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B" },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock" },
  { title: "No Diggity", artist: "Blackstreet", genre: "R&B" },
  { title: "Waterfalls", artist: "TLC", genre: "R&B" },
  { title: "I'll Make Love to You", artist: "Boyz II Men", genre: "R&B" },
  { title: "Smells Like Teen Spirit", artist: "Nirvana", genre: "Grunge" },
  { title: "Black Hole Sun", artist: "Soundgarden", genre: "Grunge" },
  { title: "Jeremy", artist: "Pearl Jam", genre: "Grunge" },
  { title: "Wannabe", artist: "Spice Girls", genre: "Pop" },
  { title: "Genie in a Bottle", artist: "Christina Aguilera", genre: "Pop" },
  { title: "Say My Name", artist: "Destiny's Child", genre: "R&B" },
  { title: "Billie Jean", artist: "Michael Jackson", genre: "Pop" },
  { title: "Friends in Low Places", artist: "Garth Brooks", genre: "Country" },
  { title: "Achy Breaky Heart", artist: "Billy Ray Cyrus", genre: "Country" },
  { title: "Before He Cheats", artist: "Carrie Underwood", genre: "Country" },
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  "Drax": "R&B" ,
  "Rocket": "Grunge" ,
  "Groot" : "Country" ,

  // Add preferences for Drax, Rocket, and Groot
};

 // Function to generate playlist based on preferred genre
 function generatePlaylist(guardians, songs) {
    const playlists = {};

    // Iterate over each guardian
    Object.keys(guardians).forEach(guardian => {
      const preferredGenre = guardians[guardian];
      // Filter songs based on the guardian's preferred genre
      const playlist = songs.filter(song => song.genre === preferredGenre);
      // Store the playlist for the current guardian
      playlists[guardian] = playlist;
    });

    // Return the playlists
    return playlists;
  }

  // Function to display playlists for each guardian
  function displayPlaylists(playlists) {
    const playlistsContainer = document.getElementById('playlists');

    // Iterate over each guardian
    Object.keys(playlists).forEach(guardian => {
      const playlist = playlists[guardian];
      const playlistElement = document.createElement('div');
      playlistElement.classList.add('playlist');
      
      // Create heading for guardian's playlist
      const heading = document.createElement('h3');
      heading.textContent = `${guardian}'s Playlist:`;
      playlistElement.appendChild(heading);
      
      // Create list of songs
      const songList = document.createElement('ul');
      playlist.forEach(song => {
        const songItem = document.createElement('li');
        songItem.textContent = `${song.title} - ${song.artist}`;
        songList.appendChild(songItem);
      });
      playlistElement.appendChild(songList);

      // Append playlist element to playlists container
      playlistsContainer.appendChild(playlistElement);
    });
  }

  // Generate playlists and display them
  const playlists = generatePlaylist(guardians, songs);
  displayPlaylists(playlists);