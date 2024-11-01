// Section.jsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import axios from 'axios';
import AlbumCard from './Card';

const Section = () => {
  const [albums, setAlbums] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    axios.get('https://qtify-backend-labs.crio.do/albums/top')
      .then(response => {
        setAlbums(response.data);
      })
      .catch(error => {
        console.error("Error fetching albums:", error);
      });
  }, []);

  return (
    <Box sx={{ padding: 4 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="h5">Top Albums</Typography>
        <Button variant="text" onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box>
      <Grid container spacing={2}>
        {albums.slice(0, showAll ? albums.length : 5).map(album => (
          <Grid item key={album.id}>
            <AlbumCard
              image={album.image}
              follows={album.follows}
              title={album.title}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Section;
