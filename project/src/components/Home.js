import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import toys1 from '../assets/images/toys1.jpg';
import toys2 from '../assets/images/toys2.jpg';
import toys3 from '../assets/images/toys3.jpg';
import toys4 from '../assets/images/toys4.jpg';
import action from '../assets/images/action.jpg';
import educational from '../assets/images/kids-game.jpg';
import outdoorToys from '../assets/images/outdoor-image.jpeg';
import offer1 from '../assets/images/offer1.jpg';
import offer2 from '../assets/images/offer2.jpg';
import offer3 from '../assets/images/free-shipping.png';
import MarqueeGrid from '../components/MarqueeGrid';
import ActionAreaCard from '../components/ActionAreaCard';
import CircleCard from '../components/CircleCard';


const Home = () => {
  const marqueeItems = [
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjzuXOqehIZ2kQh3WKAXX_48c4PSH-2H-r8uD_H8rujKgjIu0Z4p4ZdMV0ILuu3c31ve8&usqp=CAU', name: 'Gifts' },
    { image: 'https://w7.pngwing.com/pngs/773/360/png-transparent-kids-toys-toy-cartoon-elephant-thumbnail.png', name: 'Kids Toys' },
    { image: 'https://e7.pngegg.com/pngimages/333/222/png-clipart-multicolored-truck-shape-sorter-toy-block-creativity-wooden-toy-train-play-toy-child-photography-thumbnail.png', name: 'Wooden Toys' },
    { image: 'https://static.vecteezy.com/system/resources/previews/045/546/264/non_2x/stacking-rings-kids-toys-3d-render-free-png.png', name: 'Educational Toys' },
    { image: 'https://mmtoyworld.com/cdn/shop/files/SuperHerosSetOf5PcsDieCastActionFigures4.5InchSizeGiftSetForKids-Multicolor-fotor-20231017113255.png?v=1697522686', name: 'Action Toys' },
    { image: 'https://static.vecteezy.com/system/resources/thumbnails/028/535/140/small_2x/many-colorful-toys-collection-on-the-desk-generative-ai-photo.jpg', name: 'Teddy' },
    { image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaMXe-YFUFbHSgXsGJPsn2AnQ50o9iWgGQjQ&s', name: 'Outdoor Toys' },
    { image:  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiYRPhf08mhVJtdDs8BurQ3QjB0gcefauusA&s', name: 'Car' },
    { image: 'https://images-cdn.ubuy.co.in/63400a2fb6b57c03f606bfc3-kids-washable-makeup-girls-toys-girls.jpg', name: 'Girls Toys' }
  ];
  return (  
    <div className="home">
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={toys4} alt="Toys" width="100%" height="450"/>
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toys2} alt="Chicago"  width="100%" height="450" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toys3} alt="New York" width="100%" height="450" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toys1} alt="New York" width="100%" height="450" />
        </Carousel.Item>
      </Carousel>
      <div className="offers">
        <h2>Special Offers</h2>
        <div className="offer-list">
          <div className="offer-item">
          <img src={offer2} alt="Buy 1 Get 1 Free" />
            <h3>50% Off on Selected Items</h3>
            <p>Grab your favorite toys at half price!</p>
          </div>
          <div className="offer-item">
          <img src={offer1} alt="Buy 1 Get 1 Free" />
            <h3>Buy 1 Get 1 Free</h3>
            <p>Exclusive offer on action figures.</p>
          </div>
          <div className="offer-item">
          <img src={offer3} alt="Buy 1 Get 1 Free" />
            <h3>Free Shipping</h3>
            <p>Free shipping on orders over $50.</p>
          </div>
        </div>
      </div>
      <CircleCard/>
      <div className="categories">
        <h2>Toy Categories</h2>
        <div className="category-list">
          <div className="category-item">
            <img src={action} alt="Action Figures" />
            <h3>Action Figures</h3>
            <p>Explore our range of action figures from popular movies and comics.</p>
          </div>
          <div className="category-item">
            <img src={educational} alt="Educational Toys" />
            <h3>Educational Toys</h3>
            <p>Find toys that help kids learn while having fun.</p>
          </div>
          <div className="category-item">
            <img src={outdoorToys} alt="Outdoor Toys" />
            <h3>Outdoor Toys</h3>
            <p>Perfect toys for outdoor play and adventures.</p>
          </div>
        </div>
      </div>
      
      <div className="marquee-section">
        <h2>Featured Toys</h2>
        <MarqueeGrid items={marqueeItems} />
      </div>
      
      <ActionAreaCard/>
      
    </div>
    
    
  );
};

export default Home;
