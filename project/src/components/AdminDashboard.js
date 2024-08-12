

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import BIChart from './BIChart';
import OrderDetails from './OrderDetails';
import '../assets/css/AdminDashboard.css';
import { useAuth } from './AuthContext';

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeComponent, setActiveComponent] = useState('profile'); // Set default component to 'profile'
  const [resData, setResData] = useState([]);
  const [profile, setProfile] = useState(null); // State to hold profile data

  // Fetch user data and profile
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
        // Fetch user data
        const usersResponse = await axios.get("http://127.0.0.1:8080/api/users/readUsers", config);
        setResData(usersResponse.data);

        // Fetch profile data
        const profileResponse = await axios.get("http://127.0.0.1:8080/api/users/readUsers", config);
        setProfile(profileResponse.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  // Handle logout
  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate('/login', { replace: true });
  };

  // Handle profile form changes and submission
  const handleProfileChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleProfileSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put("http://127.0.0.1:8080/api/users/updateUser{email}", profile, config);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Profile update failed. Please try again.");
    }
  };

  // Render components based on the active selection
  const renderComponent = () => {
    switch (activeComponent) {
      case 'totalusers':
        return (
          <div className="d-flex flex-wrap justify-content-center">
            {resData.map((item) => (
              <div key={item.id} className="card m-3" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">Name: {item.name}</h5>
                  <p className="card-text">Email: {item.email}</p>
                </div>
              </div>
            ))}
          </div>
        );
      case 'bichart':
        return <BIChart />;
      case 'orderdetails':
        return <OrderDetails />;
      case 'profile':
      default:
        return (
          <div className="profile-edit">
            <center>
            <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
            </center>
            <form onSubmit={handleProfileSubmit}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={profile?.name || ''}
                onChange={handleProfileChange}
              /><br /><br />

              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={profile?.email || ''}
                onChange={handleProfileChange}
              /><br /><br />

              <label>Password:</label>
              <input
                type="password"
                name="password"
                value={profile?.password || ''}
                onChange={handleProfileChange}
              /><br /><br />

              <button type="submit">Update Profile</button>
            </form>
          </div>
        );
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-profile">
          <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
          <h5>{profile ? profile.name : "Loading..."}</h5>
          <p>{profile ? profile.email : "Loading..."}</p>
        </div>
        <ul>
          <li><Link to="#" onClick={() => setActiveComponent('totalusers')}>Users List</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('bichart')}>Reports</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Sales</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('profile')}>Edit Profile</Link></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
      <div className="main-content">
        {renderComponent()}
      </div>
    </div>
  );
}

export default AdminDashboard;
