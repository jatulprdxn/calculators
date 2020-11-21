import React from 'react';
import { OPERATIONS } from '../utils/constant';
const Calculator = ({ handleOperation }) => {
  return (
    <div>
      {OPERATIONS.map(operation => (
        <button onClick={handleOperation}>{operation}</button>
      ))}
    </div>
  );
};

export default Calculator;
