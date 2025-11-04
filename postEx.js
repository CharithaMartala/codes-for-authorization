import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [formData, setFormData] = useState({
    productname: '',
    productprice: 0,
    productdesc: ''
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('https://localhost:7173/api/products', formData)
      .then(response => {
        console.log('Data posted successfully:', response.data);
        alert('Product created!');
      })
      .catch(error => {
        console.error('Error posting data:', error);
        alert('Failed to create product.');
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create User</h2>
      <input
        type="text"
        name="productname"
        placeholder="productName"
        value={formData.productname}
        onChange={handleChange}
      /><br />
      <input
        type="text"
        name="productprice"
        placeholder="price"
        value={formData.productprice}
        onChange={handleChange}
      /><br />
      <input
        type="text"
        name="productdesc"
        placeholder="Description"
        value={formData.productdesc}
        onChange={handleChange}
      /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default PostForm;
