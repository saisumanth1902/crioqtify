// src/Card/Card.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';

const AlbumCard = ({ image, likes, follows, title, displayLikes }) => {
  return (
    <Card sx={{ width: 200, margin: 2 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
        sx={{ borderRadius: '8px 8px 0 0' }}
      />
      <CardContent sx={{ backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
        <Chip
          label={displayLikes ? `${likes} Likes` : `${follows} Follows`}
          sx={{ backgroundColor: '#333', color: '#fff', marginBottom: 1 }}
        /> {/* Conditional display of Likes or Follows */}
        <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;
