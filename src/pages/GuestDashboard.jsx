import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const GuestDashboard = ({ username, role }) => {
  return (
    <div className="container">
      <Header username={username} role={role} />
      <h2>👋 Welcome Guest, {username}!</h2>
      <Counter label="Actions Taken" buttonText="Click Me" />
      <Footer />
    </div>
  );
};

export default GuestDashboard;
