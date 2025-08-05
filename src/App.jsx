import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashboard';
import GuestDashboard from './pages/GuestDashboard';
import ModeratorDashboard from './pages/ModeratorDashboard';
import NotFound from './pages/NotFound';
import './styles/global.css'; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admin" element={<AdminDashboard username="Aman" role="admin" />} />
      <Route path="/guest" element={<GuestDashboard username="Bharat" role="guest" />} />
      <Route path="/moderator" element={<ModeratorDashboard username="Mod" role="moderator" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;