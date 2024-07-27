import React from 'react';
import '../assets/css/Wishlist.css'; // Assuming you have a CSS file for styling

const Wishlist = () => {
  const wishlistItems = [
    {
      id: 1,
      name: 'Toy Car',
      price: '$100',
      image: 'https://rukminim2.flixcart.com/image/850/1000/l1grgcw0/vehicle-pull-along/l/j/g/6pc-toy-car-set-for-kids-1-64-pixar-cartoon-theme-diecast-metal-original-imagdyqzyx5nkpxk.jpeg?q=90&crop=false', // Image URL or import
    },
    {
      id: 2,
      name: 'Doll',
      price: '$150',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmqnc57C3LAFt-ctV_pq7dioBPcwMXZOcL2ZcLF9-z4uvB0E5mklW2C8MiJR_wtcEdJ4&usqp=CAU',
    },
    {
      id: 3,
      name: 'Building Blocks',
      price: '$100',
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/3/YI/PX/ZU/157236050/toy-building-blocks.jpg',
    },
    {
      id: 4,
      name: 'Teddy',
      price: '$200',
      image: 'https://i.pinimg.com/736x/99/80/0d/99800d238836d7028a012dc06a78a076.jpg',
    },
  ];

  return (
    <div className="wishlist">
      <h1>My Wishlist</h1>
      <div className="wishlist-items">
        {wishlistItems.map(item => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-item-image" />
            <div className="wishlist-item-details">
              <h2>{item.name}</h2>
              <p>{item.price}</p>
              <button className="remove-btn">Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
