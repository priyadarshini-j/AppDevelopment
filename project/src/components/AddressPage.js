
// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const AddressPage = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     pincode: '',
//     address: '',
//     city: '',
//     state: ''
//   });

//   const [addresses, setAddresses] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [aid, setEditId] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchAddresses = async () => {
//       try {
//         const token = localStorage.getItem('token');
//         if (!token) {
//           console.error('No token found');
//           return;
//         }
//         const response = await axios.get('http://127.0.0.1:8080/api/buy/get/buy', {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setAddresses(response.data);
//       } catch (error) {
//         console.error('Failed to fetch addresses:', error.response ? error.response.data : error.message);
//       }
//     };

//     fetchAddresses();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const token = localStorage.getItem('token');

//     if (!token) {
//       console.error('No token found');
//       return;
//     }

//     try {
//       if (isEditing) {
//         // Update address
//         await axios.put(`http://127.0.0.1:8080/api/buy/put/${aid}`, formData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setAddresses(addresses.map(address => address.id === aid ? { ...formData, id: aid } : address));
//         setIsEditing(false);
//         setEditId(null);
//       } else {
//         // Add new address
//         await axios.post('http://127.0.0.1:8080/api/buy', formData, {
//           headers: {
//             Authorization: `Bearer ${token}`
//           }
//         });
//         setAddresses([...addresses, { ...formData, id: addresses.length + 1 }]); // Adjust according to your response structure
//       }
//       setFormData({
//         name: '',
//         mobile: '',
//         pincode: '',
//         address: '',
//         city: '',
//         state: ''
//       });
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Failed to save address:', error.response ? error.response.data : error.message);
//     }
//   };

//   const handleEdit = (address) => {
//     setFormData(address);
//     setIsEditing(true);
//     setEditId(address.id);
//     setIsModalOpen(true);
//   };

//   const handleAddNew = () => {
//     setFormData({
//       name: '',
//       mobile: '',
//       pincode: '',
//       address: '',
//       city: '',
//       state: ''
//     });
//     setIsEditing(false);
//     setIsModalOpen(true);
//   };

//   const handleDeliverHere = (address) => {
//     localStorage.setItem('selectedAddress', JSON.stringify(address));
//     navigate('/paymentpage');
//   };

//   return (
//     <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
//       <div style={{
//         flex: 1,
//         backgroundImage: 'url("https://t4.ftcdn.net/jpg/08/12/28/27/240_F_812282753_yEqr7thnmIqBcK4RA5EIG8QOeyNxJn8r.jpg")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//         padding: '20px',
//         boxSizing: 'border-box'
//       }}>
//         <div style={{
//           backgroundColor: 'rgba(255, 192, 203, 0.9)',
//           padding: '20px',
//           boxSizing: 'border-box',
//           boxShadow: '0px 10px 20px rgba(255, 105, 180, 0.4)',
//           borderRadius: '8px',
//           maxWidth: '800px',
//           margin: 'auto'
//         }}>
//           <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
//             <h2 style={{ marginBottom: '20px', color: '#FF69B4' }}>Saved Addresses</h2>
//             <button
//               onClick={handleAddNew}
//               style={{
//                 padding: '10px',
//                 backgroundColor: '#FF69B4',
//                 color: 'white',
//                 borderRadius: '3px',
//                 border: 'none',
//                 cursor: 'pointer',
//                 marginBottom: '20px'
//               }}
//             >
//               Add New Address
//             </button>
//             <div style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}>
//               {addresses.map(address => (
//                 <div
//                   key={address.id}
//                   style={{
//                     backgroundColor: 'white',
//                     padding: '20px',
//                     borderRadius: '5px',
//                     boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)',
//                     marginBottom: '10px'
//                   }}
//                 >
//                   <p><strong>Name:</strong> {address.name}</p>
//                   <p><strong>Mobile:</strong> {address.mobile}</p>
//                   <p><strong>Pincode:</strong> {address.pincode}</p>
//                   <p><strong>Address:</strong> {address.address}</p>
//                   <p><strong>City:</strong> {address.city}</p>
//                   <p><strong>State:</strong> {address.state}</p>
//                   <button
//                     onClick={() => handleEdit(address)}
//                     style={{
//                       padding: '4px',
//                       width: '20%',
//                       backgroundColor: '#FF69B4',
//                       color: 'white',
//                       borderRadius: '3px',
//                       border: 'none',
//                       cursor: 'pointer',
//                       marginRight: '10px'
//                     }}
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDeliverHere(address)}
//                     style={{
//                       padding: '4px',
//                       width: '20%',
//                       backgroundColor: '#FF1493',
//                       color: 'white',
//                       borderRadius: '3px',
//                       border: 'none',
//                       cursor: 'pointer'
//                     }}
//                   >
//                     Deliver Here
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {isModalOpen && (
//             <div style={{
//               position: 'fixed',
//               top: '0',
//               left: '0',
//               right: '0',
//               bottom: '0',
//               backgroundColor: 'rgba(0, 0, 0, 0.5)',
//               display: 'flex',
//               justifyContent: 'center',
//               alignItems: 'center'
//             }}>
//               <div style={{
//                 backgroundColor: 'white',
//                 padding: '20px',
//                 borderRadius: '5px',
//                 boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)',
//                 width: '100%',
//                 maxWidth: '500px'
//               }}>
//                 <h2 style={{ marginBottom: '20px', color: '#FF69B4' }}>{isEditing ? 'Edit Address' : 'Enter Delivery Address'}</h2>
//                 <form onSubmit={handleSubmit}>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
//                     <input
//                       type="text"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
//                     <input
//                       type="text"
//                       name="mobile"
//                       value={formData.mobile}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Pincode</label>
//                     <input
//                       type="text"
//                       name="pincode"
//                       value={formData.pincode}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ marginBottom: '15px' }}>
//                     <label style={{ display: 'block', marginBottom: '5px' }}>Address</label>
//                     <textarea
//                       name="address"
//                       value={formData.address}
//                       onChange={handleChange}
//                       style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                       required
//                     />
//                   </div>
//                   <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
//                     <div style={{ flexBasis: '48%' }}>
//                       <label style={{ display: 'block', marginBottom: '5px' }}>City</label>
//                       <input
//                         type="text"
//                         name="city"
//                         value={formData.city}
//                         onChange={handleChange}
//                         style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                         required
//                       />
//                     </div>
//                     <div style={{ flexBasis: '48%' }}>
//                       <label style={{ display: 'block', marginBottom: '5px' }}>State</label>
//                       <input
//                         type="text"
//                         name="state"
//                         value={formData.state}
//                         onChange={handleChange}
//                         style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                     <button
//                       type="submit"
//                       style={{ padding: '10px', backgroundColor: '#FF69B4', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}
//                     >
//                       {isEditing ? 'Save Changes' : 'Save and Deliver Here'}
//                     </button>
//                     <button
//                       type="button"
//                       onClick={() => setIsModalOpen(false)}
//                       style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}
//                     >
//                       Cancel
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressPage;
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddressPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    pincode: '',
    address: '',
    city: '',
    state: ''
  });

  const [addresses, setAddresses] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [aid, setEditId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          console.error('No token found');
          return;
        }
        const response = await axios.get('http://127.0.0.1:8080/api/buy/get/buy', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAddresses(response.data);
      } catch (error) {
        console.error('Failed to fetch addresses:', error.response ? error.response.data : error.message);
      }
    };

    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      if (isEditing) {
        // Update address
        await axios.put(`http://127.0.0.1:8080/api/buy/put/${aid}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAddresses(addresses.map(address => address.id === aid ? { ...formData, id: aid } : address));
        setIsEditing(false);
        setEditId(null);
      } else {
        // Add new address
        const response = await axios.post('http://127.0.0.1:8080/api/buy', formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setAddresses([...addresses, response.data]); // Adjust according to your response structure
      }
      setFormData({
        name: '',
        mobile: '',
        pincode: '',
        address: '',
        city: '',
        state: ''
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error('Failed to save address:', error.response ? error.response.data : error.message);
    }
  };

  const handleEdit = (address) => {
    setFormData(address);
    setIsEditing(true);
    setEditId(address.id);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setFormData({
      name: '',
      mobile: '',
      pincode: '',
      address: '',
      city: '',
      state: ''
    });
    setIsEditing(false);
    setIsModalOpen(true);
  };

  const handleDeliverHere = (address) => {
    localStorage.setItem('selectedAddress', JSON.stringify(address));
    navigate('/paymentpage');
  };

  const handleDelete = async (id) => {
    const token = localStorage.getItem('token');

    if (!token) {
      console.error('No token found');
      return;
    }

    try {
      await axios.delete(`http://127.0.0.1:8080/api/buy/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setAddresses(addresses.filter(address => address.id !== id));
    } catch (error) {
      console.error('Failed to delete address:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{
        flex: 1,
        backgroundImage: 'url("https://t4.ftcdn.net/jpg/08/12/28/27/240_F_812282753_yEqr7thnmIqBcK4RA5EIG8QOeyNxJn8r.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
        boxSizing: 'border-box'
      }}>
        <div style={{
          backgroundColor: 'rgba(255, 192, 203, 0.9)',
          padding: '20px',
          boxSizing: 'border-box',
          boxShadow: '0px 10px 20px rgba(255, 105, 180, 0.4)',
          borderRadius: '8px',
          maxWidth: '800px',
          margin: 'auto'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 style={{ marginBottom: '20px', color: '#FF69B4' }}>Saved Addresses</h2>
            <button
              onClick={handleAddNew}
              style={{
                padding: '10px',
                backgroundColor: '#FF69B4',
                color: 'white',
                borderRadius: '3px',
                border: 'none',
                cursor: 'pointer',
                marginBottom: '20px'
              }}
            >
              Add New Address
            </button>
            <div style={{ width: '100%', maxWidth: '600px', marginBottom: '20px' }}>
              {addresses.map(address => (
                <div
                  key={address.id}
                  style={{
                    backgroundColor: 'white',
                    padding: '20px',
                    borderRadius: '5px',
                    boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)',
                    marginBottom: '10px'
                  }}
                >
                  <p><strong>Name:</strong> {address.name}</p>
                  <p><strong>Mobile:</strong> {address.mobile}</p>
                  <p><strong>Pincode:</strong> {address.pincode}</p>
                  <p><strong>Address:</strong> {address.address}</p>
                  <p><strong>City:</strong> {address.city}</p>
                  <p><strong>State:</strong> {address.state}</p>
                  <button
                    onClick={() => handleEdit(address)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#FF69B4',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer',
                      marginRight: '10px'
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeliverHere(address)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#FF1493',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Deliver Here
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    style={{
                      padding: '4px',
                      width: '20%',
                      backgroundColor: '#f44336',
                      color: 'white',
                      borderRadius: '3px',
                      border: 'none',
                      cursor: 'pointer',
                      marginLeft: '10px'
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {isModalOpen && (
            <div style={{
              position: 'fixed',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <div style={{
                backgroundColor: 'white',
                padding: '20px',
                borderRadius: '5px',
                boxShadow: '0 0 10px rgba(255, 105, 180, 0.3)',
                width: '100%',
                maxWidth: '500px'
              }}>
                <h2 style={{ marginBottom: '20px', color: '#FF69B4' }}>{isEditing ? 'Edit Address' : 'Enter Delivery Address'}</h2>
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Mobile Number</label>
                    <input
                      type="text"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Pincode</label>
                    <input
                      type="text"
                      name="pincode"
                      value={formData.pincode}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                      required
                    />
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                      required
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
                    <div style={{ flexBasis: '48%' }}>
                      <label style={{ display: 'block', marginBottom: '5px' }}>City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                        required
                      />
                    </div>
                    <div style={{ flexBasis: '48%' }}>
                      <label style={{ display: 'block', marginBottom: '5px' }}>State</label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        style={{ width: '100%', padding: '8px', borderRadius: '3px', border: '1px solid #ccc' }}
                        required
                      />
                    </div>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button
                      type="submit"
                      style={{ padding: '10px', backgroundColor: '#FF69B4', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}
                    >
                      {isEditing ? 'Save Changes' : 'Save and Deliver Here'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      style={{ padding: '10px', backgroundColor: '#f44336', color: 'white', borderRadius: '3px', border: 'none', cursor: 'pointer' }}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddressPage;
