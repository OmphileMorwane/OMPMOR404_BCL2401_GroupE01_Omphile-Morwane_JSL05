// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  {
    title: "Escape (The Piña Colada Song)",
    artist: "Rupert Holmes",
    genre: "Pop",
  },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  {
    title: "Ain't No Mountain High Enough",
    artist: "Marvin Gaye & Tammi Terrell",
    genre: "R&B",
  },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  {
    title: "Fooled Around and Fell in Love",
    artist: "Elvin Bishop",
    genre: "Rock",
  },
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
  // Feel free to add even more songs
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  Gamora: "Pop",
  // Add preferences for Drax, Rocket, and Groot
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
