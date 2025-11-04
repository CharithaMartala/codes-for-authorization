import logo from './logo.svg';
import './App.css';
import Login from './online/Login';
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './online/ProtectedRoute';
import { useRoutes } from 'react-router-dom';
import DataFetcher from './crud/getEx';

function App() {
  const userLoggedIn = true; 
  const user = { name: "Asha", age: 28 };

  const name="charitha";

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
         <Route path="/data" element={<DataFetcher />} />
        <Route path="/admin" element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <DataFetcher />
          </ProtectedRoute>
        } />
        <Route path="/user" element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <getEx />
          </ProtectedRoute>
        } />
      </Routes>
     
    </div>
  );
}

export default App;
