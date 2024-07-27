import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const CircleCard = ({ image, alt, link }) => {
  const cardStyle = {
    borderRadius: '50%',
    overflow: 'hidden',
    width: '200px',
    height: '200px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid #ffeb3b', // Yellow border
    boxSizing: 'border-box',
  };

  return (
    
    <Card sx={{ ...cardStyle }}>
      <CardActionArea component={Link} to={link} sx={{ height: '100%', width: '100%' }}>
        <CardMedia
          component="img"
          sx={{ height: '100%', width: '100%' }}
          image={image}
          alt={alt}
        />
      </CardActionArea>
    </Card>
  );
};

const CircleCardGallery = () => {
    
  const cardContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap', // Allow cards to wrap to the next line
    justifyContent: 'center',
    gap: '20px', // Space between cards
    padding: '20px', // Padding around the container
    backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d2PwhJbFzjCBJ1lZiQT2FQnXzxCL8g-4Bg&s")', // Background image URL
    backgroundSize: 'cover', // Cover the entire container
    backgroundPosition: 'center', // Center the background image
    backgroundRepeat: 'no-repeat', // Prevent repeating the background image
  };

  return (
    <div style={cardContainerStyle}>
       
      <CircleCard
        image="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17132531250-18months.webp"
        alt="Product 1"
        link="/link-1"
      />
      <CircleCard
        image="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/171326020518-36months.webp"
        alt="Product 2"
        link="/link-2"
      />
      <CircleCard
        image="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/171334204812_years(1).webp"
        alt="Product 3"
        link="/link-3"
      />
      <CircleCard
        image="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17132705845-7years.webp"
        alt="Product 3"
        link="/link-3"
      />
      <CircleCard
        image="https://cdn.pixelbin.io/v2/black-bread-289bfa/HrdP6X/original/hamleys-category/17133425769-12years.webp"
        alt="Product 4"
        link="/link-4"
      />
    </div>
  );
};

export default CircleCardGallery;