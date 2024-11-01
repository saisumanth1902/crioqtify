// // Card.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip } from '@mui/material';

const AlbumCard = ({ image, follows, title }) => {
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
        <Chip label={`${follows} Follows`} sx={{ backgroundColor: '#333', color: '#fff', marginBottom: 1 }} />
        <Typography variant="subtitle1" fontWeight="bold">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default AlbumCard;


// // src/Card/Card.jsx
// import React from 'react';
// import Chip from '@mui/material/Chip';

// const Card = ({ album }) => {
//   return (
//     <div className="card">
//       <img src={album.image} alt={album.title} className="album-image" />
//       <div className="card-content">
//         <Chip label={`${album.follows} Follows`} className="chip" />
//         <h3>{album.title}</h3>
//         <p>{album.description}</p>
//       </div>
//     </div>
//   );
// };

// export default Card;
