// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Pie, Bar } from 'react-chartjs-2';
// import 'chart.js/auto';
// import '../assets/css/UserDashboard.css';

// const UserDashboard = () => {
//   // Data for the pie chart
//   const pieData = {
//     labels: ['Completed', 'Pending', 'Cancelled'],
//     datasets: [
//       {
//         label: 'Order Status',
//         data: [10, 5, 2],
//         backgroundColor: ['#4caf50', '#ffeb3b', '#f44336'],
//       },
//     ],
//   };

//   // Data for the bar graph
//   const barData = {
//     labels: ['January', 'February', 'March', 'April', 'May', 'June'],
//     datasets: [
//       {
//         label: 'Monthly Spending',
//         data: [150, 200, 100, 250, 300, 200],
//         backgroundColor: '#2196f3',
//       },
//     ],
//   };

//   return (
//     <div className="user-dashboard">
//       <h2>Welcome, User!</h2>
//       <div className="dashboard-content">
//         <div className="dashboard-section">
//           <h3>Profile Information</h3>
//           <p>Name: Priyadharshini</p>
//           <p>Email: priyadharshini@example.com</p>
//           <p>Phone: (123) 456-7890</p>
//           <p>Address: 1234 Toy Lane, Toy City, TC 56789</p>
//           <p>Member Since: January 2023</p>
//           <Link to="/edit-profile" className="btn btn-primary">Edit Profile</Link>
//         </div>
//         <div className="dashboard-section">
//           <h3>Order History</h3>
//           <table className="table">
//             <thead>
//               <tr>
//                 <th>Order ID</th>
//                 <th>Date</th>
//                 <th>Status</th>
//                 <th>Total</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>12345</td>
//                 <td>01/02/2024</td>
//                 <td>Completed</td>
//                 <td>$150.00</td>
//               </tr>
//               <tr>
//                 <td>12346</td>
//                 <td>01/15/2024</td>
//                 <td>Pending</td>
//                 <td>$200.00</td>
//               </tr>
//               <tr>
//                 <td>12347</td>
//                 <td>01/20/2024</td>
//                 <td>Cancelled</td>
//                 <td>$100.00</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <div className="dashboard-section">
//           <h3>Order Status Distribution</h3>
//           <Pie data={pieData} />
//         </div>
//         <div className="dashboard-section">
//           <h3>Monthly Spending</h3>
//           <Bar data={barData} />
//         </div>
//         <div className="dashboard-section">
//           <h3>Wishlist</h3>
//           <p>You have 4 items in your wishlist.</p>
//           <Link to="/wishlist" className="btn">View Wishlist</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;

import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../assets/css/UserDashboard.css";

const UserDashboard = () => {
  const [resData, setResData] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    window.history.pushState(null, "", window.location.origin);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, "", window.location.origin);
    });
    navigate("/login");
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/product/readProducts", 
          config
        );
        setResData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Data for the pie chart
  const pieData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        label: "Order Status",
        data: [10, 5, 2],
        backgroundColor: ["#4caf50", "#ffeb3b", "#f44336"],
      },
    ],
  };

  // Data for the bar graph
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Monthly Spending",
        data: [150, 200, 100, 250, 300, 200],
        backgroundColor: "#2196f3",
      },
    ],
  };

  return (
    <div className="user-dashboard">
      <h1 className="mb-5 fw-bold display-1">Welcome Mr. John</h1>
      <button onClick={handleLogout} className="btn btn-danger">
        Logout
      </button>

      <div className="dashboard-content">
        <div className="dashboard-section">
          <h3>Profile Information</h3>
          <p>Name: Priyadharshini</p>
          <p>Email: priyadharshini@example.com</p>
          <Link to="/edit-profile" className="btn btn-primary">
            Edit Profile
          </Link>
        </div>

        <div className="dashboard-section">
          <h3>All Products</h3>
          <div className="d-flex flex-wrap justify-content-center">
            {resData.map((item) => (
              <div key={item.id} className="card m-3" style={{ width: "18rem" }}>
                <img
                  src={item.imageUrl} // Ensure your product data includes imageUrl
                  className="card-img-top"
                  alt={item.name}
                />
                <div className="card-body">
                  <h5 className="card-title">Name: {item.name}</h5>
                  <p className="card-text">Description: {item.description}</p>
                  <p className="card-text">Price: ${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard-section">
          <h3>Order History</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Status</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12345</td>
                <td>01/02/2024</td>
                <td>Completed</td>
                <td>$150.00</td>
              </tr>
              <tr>
                <td>12346</td>
                <td>01/15/2024</td>
                <td>Pending</td>
                <td>$200.00</td>
              </tr>
              <tr>
                <td>12347</td>
                <td>01/20/2024</td>
                <td>Cancelled</td>
                <td>$100.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="dashboard-section">
          <h3>Order Status Distribution</h3>
          <Pie data={pieData} />
        </div>

        <div className="dashboard-section">
          <h3>Monthly Spending</h3>
          <Bar data={barData} />
        </div>

        <div className="dashboard-section">
          <h3>Wishlist</h3>
          <p>You have 4 items in your wishlist.</p>
          <Link to="/wishlist" className="btn">
            View Wishlist
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
