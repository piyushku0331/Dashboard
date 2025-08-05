import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = ({ username, role }) => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <p>User: {username} ({role})</p>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
};

export default Header;