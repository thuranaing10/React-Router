import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import ShareLayout from './components/ShareLayout'; 
import Product from './pages/Product';
import SingleProduct from './pages/SingleProduct';
import { useState } from 'react';
import ProtectiveRoute from './components/ProtectiveRoute';

// React Router DOM Package
// Link Component
// Error Page
// Nested Route
// Share Layout
// index page
// Nav Link
// url parameter
// use Navigate
// protected route


function App() {

    const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <h1>React Router DOM</h1>
      <Routes>
        <Route path="/" element={<ShareLayout/>}>
            <Route index element={ <Home/> } />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products" element={<Product/>} />
            <Route path="/products/:productId" element={<SingleProduct />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
        </Route>
              <Route path="/dashborad" element={
                  <ProtectiveRoute user={user}>
                        <Dashboard user={user} />
                    </ProtectiveRoute>
              }>
            <Route path="user" element={<h1>User</h1>} />
            <Route path="profile" element={<h1>Profile</h1> } />
        </Route>
        
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
