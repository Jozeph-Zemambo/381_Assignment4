// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import AboutUs from './components/aboutus';
import Productpage from './components/Productpage';

// Placeholder components
const HomePage = () => <h1>Home Page</h1>;
const ProductsPage = () => <h1>Products Page</h1>;
const LoginPage = () => <h1>Login Page</h1>;

function App() {
  return (
    <Router>
      <NavBar />
      <AboutUs />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Productpage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;