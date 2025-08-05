import React, { useState } from 'react';

const Counter = ({ label, buttonText }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 5) {
      setCount(count + 1);
    }
  };

  return (
    <div style={{ marginTop: '20px' }}>
      <p>{label}: {count}</p>
      <button onClick={increment} disabled={count >= 5}>{buttonText}</button>
    </div>
  );
};

export default Counter;