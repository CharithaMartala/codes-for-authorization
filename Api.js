import axios from "axios";
 
const token = localStorage.getItem("token");
console.log(token);
 
const Api = axios.create({
  baseURL: "https://localhost:7173/api/products",
  headers: {
    Authorization: `Bearer ${token}`,
  },
  
});
 
export default Api;