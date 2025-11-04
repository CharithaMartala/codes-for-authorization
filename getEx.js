import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetcher() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");
  console.log(token);
  
  useEffect(() => {
    axios.get('https://localhost:7173/api/products', 
      {
      headers: {
        Authorization: `Bearer ${token}` 
      }
    })
      .then(response => {  
        setData(response.data); 
        console.log(response.data);
        //setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        //setLoading(false);
      });
  }, []);

 // if (loading) return <p>Loading...</p>;

  return (
    <ul>
        <h1> GetMethod</h1>
      {Array.isArray(data) &&data.map(item => (
        <li key={item.productId}>{item.productname}{item.productdesc}</li>
      ))}
    </ul>
  );
}

export default DataFetcher;
