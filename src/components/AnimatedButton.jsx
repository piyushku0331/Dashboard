import React from 'react';

const AnimatedButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className="animated-btn">{text}</button>
  );
};

export default AnimatedButton;