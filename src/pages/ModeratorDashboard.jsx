import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const ModeratorDashboard = ({ username, role }) => {
  return (
    <div className="container">
      <Header username={username} role={role} />
      <h2>💬 Welcome Moderator, {username}!</h2>
      <Counter label="Moderation Events" buttonText="Moderate" />
      <Footer />
    </div>
  );
};

export default ModeratorDashboard;
