import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const UserPanel = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    const handleLogout = () => {
        
        console.log("User logged out");
    };

    const styles = {
        userPanel: {
            position: "relative",
            display: "inline-block",
        },
        profileIcon: {
            fontSize: "2rem",
            cursor: "pointer",
            color: "black"
        },
        dropdown: {
            display: dropdownVisible ? "block" : "none",
            position: "absolute",
            right: 0,
            backgroundColor: "#f9f9f9",
            boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
            borderRadius: "8px",
            overflow: "hidden",
            zIndex: 1,
            transition: "opacity 0.3s ease",
            opacity: dropdownVisible ? 1 : 0,
        },
        dropdownItem: {
            padding: "12px 50px",
            textDecoration: "none",
            color: "#333",
            display: "block",
            cursor: "pointer",
        },
        hoveredDropdownItem: {
            backgroundColor: "#f9f9f9",
            color: "red"
        }
    };

    return (
        <div style={styles.userPanel}>
            <FaUserCircle style={styles.profileIcon} onClick={toggleDropdown} />
            <div style={styles.dropdown}>
                <Link
                    to="/profile"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'profile' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('profile')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Profile
                </Link>
                
                <Link
                    to="/wishlist"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'wishlist' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('wishlist')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Wishlist
                </Link>
                <Link
                    to="/orders"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'orders' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('orders')}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    Orders
                </Link>
                <Link
                    to="/"
                    style={{
                        ...styles.dropdownItem,
                        ...(hoveredItem === 'logout' ? styles.hoveredDropdownItem : {})
                    }}
                    onMouseEnter={() => setHoveredItem('logout')}
                    onMouseLeave={() => setHoveredItem(null)}
                    onClick={handleLogout}
                >
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default UserPanel;