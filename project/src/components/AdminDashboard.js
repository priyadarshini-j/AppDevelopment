
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TotalUsers from './TotalUsers';
// import Orders from './Orders';
// import Chat from './Chat';
import BIChart from './BIChart';
import OrderDetails from './OrderDetails';
import '../assets/css/AdminDashboard.css';
import { useAuth } from './AuthContext';

function AdminDashboard() {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const [activeComponent, setActiveComponent] = useState('totalusers'); // Manage active component

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const renderComponent = () => {
    switch (activeComponent) {
      case 'totalusers':
        return <TotalUsers />;
      case 'bichart':
        return <BIChart />;
      case 'orderdetails':
        return <OrderDetails />;
      // Add more cases as needed
      default:
        return <TotalUsers/>;
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-profile">
          <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
          <h2>Priyadharshini</h2>
        </div>
        <ul>
          <li><Link to="#" onClick={() => setActiveComponent('totalusers')}>Users List</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('bichart')}>Reports</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Sales</Link></li>
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
