import React from 'react';
import { Carousel } from 'react-bootstrap';
import '../assets/css/Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import toys1 from '../assets/images/toys1.jpg';
import toys2 from '../assets/images/toys2.jpg';
import toys3 from '../assets/images/toys3.jpg';

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to the Toy Store!</h2>
      <p>Find the best toys for all ages.</p>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={toys1} alt="Toys" width="1000" height="500"/>
         
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toys2} alt="Chicago"  width="1000" height="500" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={toys3} alt="New York" width="1000" height="500" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Home;
