
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Pie, Bar } from "react-chartjs-2";
import "chart.js/auto";
import "../assets/css/UserDashboard.css";

const UserDashboard = () => {
  const [resData, setResData] = useState([]);
  const [activeComponent, setActiveComponent] = useState('profile'); // Default to 'profile'
  const [isEditingProfile, setIsEditingProfile] = useState(false); // To toggle profile edit
  const [profileData, setProfileData] = useState({}); // Store user profile data
  const navigate = useNavigate();

  // Function to handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
    window.history.pushState(null, "", window.location.origin);
    window.addEventListener("popstate", function (event) {
      window.history.pushState(null, "", window.location.origin);
    });
    navigate("/login");
  };

  // Fetch profile and product data when component mounts
  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/users/readUser{email}", // Adjust the endpoint as per your backend API
          config
        );
        setProfileData(response.data); // Store the profile data, including the image URL
      } catch (error) {
        console.error(error);
      }
    };

    const fetchProductData = async () => {
      try {
        const token = localStorage.getItem("token");
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get(
          "http://127.0.0.1:8080/api/products",
          config
        );
        setResData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfileData(); // Fetch user profile data
    fetchProductData(); // Fetch products
  }, []);

  // Handle profile save
  const handleProfileSave = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axios.put(
        "http://127.0.0.1:8080/api/users/updateUser{email}", // Adjust the endpoint as per your backend API
        profileData,
        config
      );
      if (response.status === 200) {
        setIsEditingProfile(false); // Switch back to profile view mode
        setProfileData(response.data); // Update profile data with response
      }
    } catch (error) {
      console.error("Failed to update profile", error);
    }
  };

  // Sample data for pie and bar charts
  const pieData = {
    labels: ["Completed", "Pending", "Cancelled"],
    datasets: [
      {
        data: [60, 30, 10], // Replace with actual data
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const barData = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Spending ($)",
        data: [200, 150, 180, 220, 250, 300], // Replace with actual data
        backgroundColor: "lightblue",
      },
    ],
  };

  // Render the selected component
  const renderComponent = () => {
    switch (activeComponent) {
      case 'profile':
        return isEditingProfile ? (
          <div className="dashboard-section">
            <h3>Edit Profile</h3>
            <form onSubmit={handleProfileSave}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={profileData.name || ''}
                  onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={profileData.email || ''}
                  onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
              <button type="button" className="btn btn-secondary" onClick={() => setIsEditingProfile(false)}>Cancel</button>
            </form>
          </div>
        ) : (
          <div className="dashboard-section">
            <center>
              <img
                src={profileData.imageUrl || "https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png"} // Default profile image if none provided
                alt="Profile"
                className="admin-image"
              />
            </center>
            <p>Name: {profileData.name}</p>
            <p>Email: {profileData.email}</p>
            <button onClick={() => setIsEditingProfile(true)} className="btn btn-primary">Edit Profile</button>
          </div>
        );
      case 'products':
        return (
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
        );
      case 'orderStatus':
        return (
          <div className="dashboard-section">
            <h3>Order Status Distribution</h3>
            <Pie data={pieData} />
          </div>
        );
      case 'monthlySpending':
        return (
          <div className="dashboard-section">
            <h3>Monthly Spending</h3>
            <Bar data={barData} />
          </div>
        );
      case 'wishlist':
        return (
          <div className="dashboard-section">
            <h3>Wishlist</h3>
            <Link to="/wishlist" className="btn">
              View Wishlist
            </Link>
          </div>
        );
      default:
        return <div>Select a section from the sidebar.</div>;
    }
  };

  return (
    <div className="user-dashboard">
      
      <div className="sidebar">
      <img
                src={profileData.imageUrl || "https://cdn0.iconfinder.com/data/icons/woman-user-human-profile-business-person-avatar/100/06-1User_11-512.png"} // Default profile image if none provided
                alt="Profile"
                className="admin-image"
              />
        <ul>
          <li><Link to="#" onClick={() => setActiveComponent('profile')}>Profile</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('products')}>Products</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('orderStatus')}>Order Status</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('monthlySpending')}>Monthly Spending</Link></li>
          <li><Link to="#" onClick={() => setActiveComponent('wishlist')}>Wishlist</Link></li>
          <li><Link to="/login" onClick={handleLogout}>Logout</Link></li>
        </ul>
      </div>
      <div className="content">
        {renderComponent()}
      </div>
    </div>
  );
};

export default UserDashboard;

