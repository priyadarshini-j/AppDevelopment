import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const ActionAreaCard = ({ image, alt, link }) => {
  return (
    <Card sx={{ maxWidth: 345, width: '100%', background: "unset", boxShadow: "unset", color: "unset" }}>
      <CardActionArea component={Link} to={link}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={alt}
        />
      </CardActionArea>
    </Card>
  );
};

const CardGallery = () => {
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', 
    justifyContent: 'center',
    gap: '20px', 
    padding: '20px',
    backgroundImage: 'url("https://img.freepik.com/free-vector/toy-store-game-interior-vector-cartoon-background_107791-21042.jpg")', 
    backgroundSize: 'cover', 
    backgroundPosition: 'center', 
    backgroundRepeat: 'no-repeat', 
   
  };

  return (
    <div style={cardContainerStyle}>
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a89dcd47c4ccb7772ea8/category-thumbnails-12--480x480.png"
        alt="Product 1"
        link="/link-1"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64399b1c1c63e660124a0fb2/100-480x480.png"
        alt="Product 2"
        link="/link-2"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a6a359c25f1bb758abec/category-thumbnails-9--480x480.png"
        alt="Product 3"
        link="/link-3"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/64399b3a1c63e660124a11ac/98-480x480.png"
        alt="Product 4"
        link="/link-4"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a6098943cbba27ef31b3/category-thumbnails-7--480x480.png"
        alt="Product 4"
        link="/link-4"
      />
      <ActionAreaCard
        image="https://www.toymarche.com/s/5f447e14285691dcc9bfcdf2/6439a64fc3695eb9c4a71c56/category-thumbnails-8--480x480.png"
        alt="Product 4"
        link="/link-4"
      />
    </div>
  );
};

export default CardGallery;