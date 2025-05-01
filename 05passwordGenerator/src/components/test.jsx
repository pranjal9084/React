import React, { useRef } from 'react';

const Test = () => {
  const count = useRef(0);

  const handleClick = () => {
    count.current += 1;
    console.log("Current count:", count.current);
  };

  return (
    <div style={{ color:'white', padding: '20px', fontFamily: 'Arial' }}>
      <h2>useRef Counter Example</h2>
      <button onClick={handleClick}>Click Me</button>
      <p>Open the console to see the count (it doesn’t re-render)</p>
    </div>
  );
};

export default Test;
