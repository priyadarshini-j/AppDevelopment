import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TotalUsers from './TotalUsers';
import Orders from './Orders';
import Chat from './Chat';
import BIChart from './BIChart';
import OrderDetails from './OrderDetails';
import '../assets/css/AdminDashboard.css';

function AdminDashboard() {
  return (
    <Router>
      <div className="admin-dashboard">
        <div className="sidebar">
          <h2>Admin Dashboard</h2>
          <ul>
            <li><Link to="/admin-dashboard/total-users">Total Users</Link></li>
            <li><Link to="/admin-dashboard/orders">Orders</Link></li>
            <li><Link to="/admin-dashboard/chat">Chat</Link></li>
            <li><Link to="/admin-dashboard/bi-chart">BI Chart</Link></li>
            <li><Link to="/admin-dashboard/order-details">Order Details</Link></li>
          </ul>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/admin-dashboard/total-users" element={<TotalUsers />} />
            <Route path="/admin-dashboard/orders" element={<Orders />} />
            <Route path="/admin-dashboard/chat" element={<Chat />} />
            <Route path="/admin-dashboard/bi-chart" element={<BIChart />} />
            <Route path="/admin-dashboard/order-details" element={<OrderDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default AdminDashboard;
