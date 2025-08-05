import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/dashboard.css';
import AnimatedButton from '../components/AnimatedButton';
import Footer from '../components/Footer';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1>Welcome! Choose your role to continue.</h1>
      <div className="btn-group">
        <AnimatedButton text="Login as Admin" onClick={() => navigate('/admin')} />
        <AnimatedButton text="Login as Guest" onClick={() => navigate('/guest')} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
