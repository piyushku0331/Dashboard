import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>⛔ 404: Page Not Found. Please go back.</h1>
      <button onClick={() => navigate('/')}>Go Home</button>
      <Footer />
    </div>
  );
};

export default NotFound;
