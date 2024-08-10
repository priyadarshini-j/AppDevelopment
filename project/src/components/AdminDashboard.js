
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import TotalUsers from './TotalUsers';
// // import Orders from './Orders';
// // import Chat from './Chat';
// import BIChart from './BIChart';
// import OrderDetails from './OrderDetails';
// import '../assets/css/AdminDashboard.css';
// import { useAuth } from './AuthContext';

// function AdminDashboard() {
//   const navigate = useNavigate();
//   const { logout } = useAuth();
//   const [activeComponent, setActiveComponent] = useState('totalusers'); // Manage active component

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'totalusers':
//         return <TotalUsers />;
//       case 'bichart':
//         return <BIChart />;
//       case 'orderdetails':
//         return <OrderDetails />;
//       // Add more cases as needed
//       default:
//         return <TotalUsers/>;
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <div className="admin-profile">
//           <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
//           <h2>Priyadharshini</h2>
//         </div>
//         <ul>
//           <li><Link to="#" onClick={() => setActiveComponent('totalusers')}>Users List</Link></li>
//           <li><Link to="#" onClick={() => setActiveComponent('bichart')}>Reports</Link></li>
//           <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Sales</Link></li>
//         </ul>
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//       <div className="main-content">
//         {renderComponent()}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;





// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import BIChart from './BIChart';
// import OrderDetails from './OrderDetails';
// import '../assets/css/AdminDashboard.css';
// import { useAuth } from './AuthContext';

// function AdminDashboard() {
//   const navigate = useNavigate();
//   const { logout } = useAuth();
//   const [activeComponent, setActiveComponent] = useState('totalusers'); // Manage active component
//   const [resData, setResData] = useState([]);

//   // Fetch user data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const token = localStorage.getItem("token");
//         const config = {
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer ${token}`,
//           },
//         };
//         const response = await axios.get(
//           "http://127.0.0.1:8080/api/users/readUsers",
//           config
//         );
//         setResData(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchData();
//   }, []);

//   // Handle logout
//   const handleLogout = () => {
//     logout();
//     localStorage.removeItem("token");
//     navigate('/login', { replace: true });
//     window.history.pushState(null, "", window.location.origin);
//     window.addEventListener("popstate", function (event) {
//       window.history.pushState(null, "", window.location.origin);
//     });
//     navigate("/login");
//   };

//   // Render components based on the active selection
//   const renderComponent = () => {
//     switch (activeComponent) {
//       case 'totalusers':
//         return (
//           <div className="d-flex flex-wrap justify-content-center">
//             {resData.map((item) => (
//               <div key={item.id} className="card m-3" style={{ width: "18rem" }}>
//                 <div className="card-body">
//                   <h5 className="card-title">Name: {item.name}</h5>
//                   <p className="card-text">Email: {item.email}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//       case 'bichart':
//         return <BIChart />;
//       case 'orderdetails':
//         return <OrderDetails />;
//       default:
//         return (
//           <div className="d-flex flex-wrap justify-content-center">
//             {resData.map((item) => (
//               <div key={item.id} className="card m-3" style={{ width: "18rem" }}>
//                 <div className="card-body">
//                   <h5 className="card-title">Name: {item.name}</h5>
//                   <p className="card-text">Email: {item.email}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="admin-dashboard">
//       <div className="sidebar">
//         <div className="admin-profile">
//           <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
//           <h2>Priyadharshini</h2>
//         </div>
//         <ul>
//           <li><Link to="#" onClick={() => setActiveComponent('totalusers')}>Users List</Link></li>
//           <li><Link to="#" onClick={() => setActiveComponent('bichart')}>Reports</Link></li>
//           <li><Link to="#" onClick={() => setActiveComponent('orderdetails')}>Sales</Link></li>
//         </ul>
//         <button onClick={handleLogout} className="logout-button">Logout</button>
//       </div>
//       <div className="main-content">
//         {renderComponent()}
//       </div>
//     </div>
//   );
// }

// export default AdminDashboard;

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
  const [activeComponent, setActiveComponent] = useState('totalusers');
  const [resData, setResData] = useState([]);
  const [profileData, setProfileData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({});

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
        const [userResponse, profileResponse] = await Promise.all([
          axios.get("http://127.0.0.1:8080/api/users/readUsers", config),
          axios.get("http://127.0.0.1:8080/api/users/profile", config)
        ]);

        setResData(userResponse.data);
        setProfileData(profileResponse.data);
        setEditForm(profileResponse.data);

      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    logout();
    localStorage.removeItem("token");
    navigate('/login', { replace: true });
    window.history.pushState(null, "", window.location.origin);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, "", window.location.origin);
    });
    navigate("/login");
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFormChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleProfileUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios.put("http://127.0.0.1:8080/api/users/profile", editForm, config);
      setProfileData(editForm);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
    }
  };

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
      default:
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
    }
  };

  return (
    <div className="admin-dashboard">
      <div className="sidebar">
        <div className="admin-profile">
          <img src="https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png" alt="Admin" className="admin-image" />
          <div className="profile-container">
            {isEditing ? (
              <div className="edit-form">
                <input
                  type="text"
                  name="name"
                  value={editForm.name}
                  onChange={handleFormChange}
                  placeholder="Name"
                />
                <input
                  type="email"
                  name="email"
                  value={editForm.email}
                  onChange={handleFormChange}
                  placeholder="Email"
                />
                <button onClick={handleProfileUpdate}>Save</button>
                <button onClick={toggleEdit}>Cancel</button>
              </div>
            ) : (
              <div className="profile-details">
                <h2>{profileData.name}</h2>
                <p>{profileData.email}</p>
                <button onClick={toggleEdit}>Edit Profile</button>
              </div>
            )}
          </div>
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
