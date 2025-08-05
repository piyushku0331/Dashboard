import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import Footer from '../components/Footer';
import '../styles/dashboard.css';

const AdminDashboard = ({ username, role }) => {
  return (
    <div className="container">
      <Header username={username} role={role} />
      <h2>🛡️ Welcome Admin, {username}!</h2>
      <Counter label="Tasks Reviewed" buttonText="Review Task" />
      <Footer />
    </div>
  );
};

export default AdminDashboard;
