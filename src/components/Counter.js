import React from 'react';
import '../stylesheets/Counter.css';

function Counter( { clicksnumber }) {
  return (
    <div className='counter'>
      {clicksnumber}
    </div>
  );
}

export default Counter;