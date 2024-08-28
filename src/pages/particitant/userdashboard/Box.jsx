import React from 'react';
import { Link } from 'react-router-dom';

const Box = ({ color, text, to }) => (
  <Link to={to}>
    <div style={{ backgroundColor: color, textAlign: 'center', borderRadius: '15px' }} className='h-[15vh] w-[20vw] m-4 flex justify-center items-center'>
      <div style={{ fontSize: '16px', color: 'white' }}>
        {text}
      </div>
    </div>
  </Link>

);

const BoxGrid = ({ boxes }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', }}>
      {boxes.map((box, index) => (
        <Box key={index} color={box.color} text={box.text} to={box.to} />
      ))}
    </div>
  );
};

export default BoxGrid;
