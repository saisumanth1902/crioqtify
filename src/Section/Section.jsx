// // Section.jsx
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import AlbumCard from '../Card/Card';

// const Section = (title, apiEndpoint) => {
//   const [albums, setAlbums] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     axios.get({apiEndpoint})
//       .then(response => {
//         setAlbums(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching albums:", error);
//       });
//   }, []);

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h5">{title}</Typography>
//         <Button variant="text" onClick={() => setShowAll(!showAll)}>
//           {showAll ? "Collapse" : "Show All"}
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         {albums.slice(0, showAll ? albums.length : 5).map(album => (
//           <Grid item key={album.id}>
//             <AlbumCard
//               image={album.image}
//               follows={album.follows}
//               title={album.title}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Section;



// // Section.jsx
// import React, { useState, useEffect } from 'react';
// import { Box, Typography, Button, Grid } from '@mui/material';
// import axios from 'axios';
// import AlbumCard from '../Card/Card';

// const Section = ({ title, apiEndpoint }) => { // Destructure props correctly
//   const [albums, setAlbums] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     axios.get(apiEndpoint)
//       .then(response => {
//         console.log(response.data); // Log the data for debugging
//         setAlbums(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching albums:", error);
//       });
//   }, [apiEndpoint]);

//   return (
//     <Box sx={{ padding: 4 }}>
//       <Box display="flex" justifyContent="space-between" alignItems="center">
//         <Typography variant="h5">{title}</Typography>
//         <Button variant="text" onClick={() => setShowAll(!showAll)}>
//           {showAll ? "Collapse" : "Show All"}
//         </Button>
//       </Box>
//       <Grid container spacing={2}>
//         {albums.slice(0, showAll ? albums.length : 5).map(album => (
//           <Grid item key={album.id}>
//             <AlbumCard
//               image={album.image}
//               follows={album.follows}
//               title={album.title}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Box>
//   );
// };

// export default Section;

// Section.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';
import AlbumCard from '../Card/Card';

const Section = ({ title, apiEndpoint }) => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    // Fetch albums from the API
    axios.get(apiEndpoint)
      .then(response => {
        console.log(response.data); // Log the response data to check structure
        setAlbums(response.data); // Assuming response.data is the array of albums
      })
      .catch(error => {
        console.error("Error fetching albums:", error);
      });
  }, [apiEndpoint]);

  return (
    <Box sx={{ padding: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">{title}</Typography>
        <Button variant="text" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box>
      <Grid container spacing={2}>
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
      </Grid>
    </Box>
  );
};

export default Section;

