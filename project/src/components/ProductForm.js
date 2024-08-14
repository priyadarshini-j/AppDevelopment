
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TextField, Button, Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
  const [resData, setResData] = useState([]);
  const [productData, setProductData] = useState({
    productName: '',
    productPrice: '',
    imageUrl: '',
    category: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editProductId, setEditProductId] = useState(null);
  const navigate = useNavigate();

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
        const response = await axios.get("http://127.0.0.1:8080/api/products", config);
        setResData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      if (isEditing && editProductId) {
        await axios.put(`http://127.0.0.1:8080/api/products/${editProductId}`, productData, config);
      } else {
        await axios.post('http://127.0.0.1:8080/api/products', productData, config);
      }

      const response = await axios.get("http://127.0.0.1:8080/api/products", config);
      setResData(response.data);

      setProductData({
        productName: '',
        productPrice: '',
        imageUrl: '',
        category: ''
      });
      setIsEditing(false);
      setEditProductId(null);

    } catch (error) {
      console.error('Error adding/updating product:', error.message);
    }
  };

  const handleDelete = async (productId) => {
    try {
      const token = localStorage.getItem('token');
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.delete(`http://127.0.0.1:8080/api/products/${productId}`, config);

      setResData(resData.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error('Error deleting product:', error.message);
    }
  };

  const handleEdit = (product) => {
    setProductData({
      productName: product.productName,
      productPrice: product.productPrice,
      imageUrl: product.imageUrl,
      category: product.category
    });
    setIsEditing(true);
    setEditProductId(product.productId);

    if (product.category === 'games') {
      navigate('/games');
    }
  };

  return (
    <div style={{ background: '#fce4ec', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
      <h1 style={{ marginBottom: '2rem', fontWeight: 'bold', textAlign: 'center', color: '#e91e63' }}>
        {isEditing ? 'Edit Product' : 'Add Product'}
      </h1>
      
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3, mb: 5, width: '100%', maxWidth: '600px', margin: 'auto' }}>
        <TextField
          name="productName"
          label="Product Name"
          value={productData.productName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px', backgroundColor: '#f8bbd0', borderRadius: '4px' }} // Light pink background for text fields
        />
        <TextField
          name="productPrice"
          label="Product Price"
          type="number"
          value={productData.productPrice}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px', backgroundColor: '#f8bbd0', borderRadius: '4px' }} // Light pink background for text fields
        />
        <TextField
          name="imageUrl"
          label="Product Image URL"
          value={productData.imageUrl}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px', backgroundColor: '#f8bbd0', borderRadius: '4px' }} // Light pink background for text fields
        />
        <TextField
          name="category"
          label="Category"
          value={productData.category}
          onChange={handleChange}
          fullWidth
          required
          sx={{ mb: 2, maxWidth: '500px', backgroundColor: '#f8bbd0', borderRadius: '4px' }} // Light pink background for text fields
        />
        <Button type="submit" variant="contained" sx={{ mt: 2,maxWidth: '500px', backgroundColor: '#e91e63', '&:hover': { backgroundColor: '#c2185b' } }}>
          {isEditing ? 'Update Product' : 'Add Product'}
        </Button>
      </Box>

      <h3 style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '1rem', color: '#e91e63' }}>All Products</h3>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        padding: '1rem',
        backgroundColor: '#fce4ec',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
      }}>
        {resData.map((item) => (
          <div key={item.productId} style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            background: '#f8bbd0',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            width: '300px'
          }}>
            <img src={item.imageUrl} alt={item.productName} style={{
              width: '100%',
              height: 'auto',
              display: 'block'
            }} />
            <div style={{ padding: '1rem' }}>
              <h5 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: '#880e4f' }}>{item.productName}</h5>
              <p style={{ fontSize: '1rem', color: '#880e4f' }}>₹ {item.productPrice}</p>
              <Button
                variant="contained"
                sx={{ mt: 2, mr: 1, backgroundColor: '#e91e63', '&:hover': { backgroundColor: '#c2185b' } }}
                onClick={() => handleEdit(item)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                sx={{ mt: 2, backgroundColor: '#d32f2f', '&:hover': { backgroundColor: '#b71c1c' } }}
                onClick={() => handleDelete(item.productId)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductForm;
