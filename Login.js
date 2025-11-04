import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import DataFetcher from "../crud/getEx";

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://localhost:7173/api/products/login",
         {
        email,
        password,
      });
 
      const { token, role } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      console.log(response.data.role)
      if (response.data.role === 'Admin') 
        navigate('/admin');
      else 
        navigate('/login');
    } catch (err) {
      alert('Login failed');
    }
  };
    /*  navigate("/Login");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };*/
 
  return (
<form onSubmit={handleLogin}>
<input value={email} onChange={(e) => setemail(e.target.value)} />
<input value={password} onChange={(e) => setPassword(e.target.value)} type="password" />
<button type="submit">Login</button>
</form>
  );
};

export default Login;