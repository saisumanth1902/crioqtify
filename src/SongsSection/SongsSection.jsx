// // src/SongsSection/SongsSection.jsx
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
// import axios from 'axios';
// import AlbumCard from '../Card/Card';
// import Carousel from '../Carousel/Carousel';

// const SongsSection = () => {
//   const [songs, setSongs] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState(0);
//   const [filteredSongs, setFilteredSongs] = useState([]);

//   useEffect(() => {
//     // Fetch genres
//     const fetchGenres = async () => {
//       try {
//         const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
//         console.log("Fetched genres:", response.data); // Log the genres response

//         // Adjust this line based on the actual API response structure
//         if (response.data.data && Array.isArray(response.data.data)) {
//           setGenres(response.data.data); // Set genres from response.data.data
//         } else {
//           console.error("Genres response is not an array:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching genres:", error);
//       }
//     };

//     // Fetch songs
//     const fetchSongs = async () => {
//       try {
//         const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
//         console.log("Fetched songs:", response.data); // Log the songs response
//         if (Array.isArray(response.data)) {
//           setSongs(response.data);
//         } else {
//           console.error("Songs response is not an array:", response.data);
//         }
//       } catch (error) {
//         console.error("Error fetching songs:", error);
//       }
//     };

//     fetchGenres();
//     fetchSongs();
//   }, []);

//   useEffect(() => {
//     if (genres.length > 0 && songs.length > 0) {
//       const genreId = genres[selectedGenre]?.id;
//       if (genreId) {
//         const filtered = songs.filter(song => song.genreId === genreId);
//         setFilteredSongs(filtered);
//       }
//     }
//   }, [selectedGenre, songs, genres]);

//   const handleTabChange = (event, newValue) => {
//     setSelectedGenre(newValue);
//   };

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Typography variant="h5">Songs</Typography>
//       <Tabs value={selectedGenre} onChange={handleTabChange}>
//         {genres.map((genre, index) => (
//           <Tab key={genre.id} label={genre.name} />
//         ))}
//       </Tabs>
//       <Grid container spacing={2}>
//         <Carousel items={filteredSongs.map(song => (
//           <AlbumCard
//             key={song.id}
//             image={song.image || 'fallback-image-url.jpg'} // Fallback for image
//             likes={song.likes || 0} // Using likes instead of follows
//             title={song.title || 'Unknown Title'} // Fallback title
//           />
//         ))} />
//       </Grid>
//     </Box>
//   );
// };

// export default SongsSection;


// src/SongsSection/SongsSection.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Tabs, Tab, Grid } from '@mui/material';
import axios from 'axios';
import AlbumCard from '../Card/Card'; // Ensure this path is correct
import Carousel from '../Carousel/Carousel'; // Ensure this path is correct

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(0);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    // Fetch genres
    const fetchGenres = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
        console.log("Fetched genres:", response.data); // Log the genres response

        // Check if the response data contains an array of genres
        if (response.data.data && Array.isArray(response.data.data)) {
          setGenres(response.data.data); // Set genres from response.data.data
        } else {
          console.error("Genres response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching genres:", error);
      }
    };

    // Fetch songs
    const fetchSongs = async () => {
      try {
        const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
        console.log("Fetched songs:", response.data); // Log the songs response

        // Check if the response data is an array of songs
        if (Array.isArray(response.data)) {
          setSongs(response.data);
        } else {
          console.error("Songs response is not an array:", response.data);
        }
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchGenres();
    fetchSongs();
  }, []);

  useEffect(() => {
    if (genres.length > 0 && songs.length > 0) {
      const genreId = genres[selectedGenre]?.id;
      if (genreId) {
        // Filter songs based on the selected genre
        const filtered = songs.filter(song => song.genreId === genreId);
        console.log("Filter = "+filtered);
        setFilteredSongs(filtered);
      }
    }
  }, [selectedGenre, songs, genres]);

  const handleTabChange = (event, newValue) => {
    setSelectedGenre(newValue); // Update the selected genre tab
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h5">Songs</Typography>
      <Tabs value={selectedGenre} onChange={handleTabChange}>
        {genres.map((genre, index) => (
          <Tab key={genre.id} label={genre.name} />
        ))}
      </Tabs>
      <Grid container spacing={2}>
        {filteredSongs.length > 0 ? (
            filteredSongs.map(song => (
            <AlbumCard 
                key={song.id} 
                image={song.image || 'fallback-image-url.jpg'} 
                likes={song.likes || 0} 
                title={song.title || 'Unknown Title'} 
            />

            )) )
            : ( <Typography variant="body1">No songs available for this genre.</Typography>)
        }

      </Grid>

      {/* <Grid container spacing={2}>
        {albums.slice(0, showAll ? albums.length : 5).map(album => {
          console.log(album); // Check the album structure
          return (
            <Grid item key={album.id}>
              <AlbumCard
                image={album.image || 'fallback-image-url.jpg'} // Fallback for image
                follows={album.follows || 0} // Default follows count
                title={album.title || 'Unknown Title'} // Fallback title
              />
            </Grid>
          );
        })}
      </Grid> */}
    </Box>
  );
};

export default SongsSection;
