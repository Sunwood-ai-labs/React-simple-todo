import React from 'react';

const Input = ({ ...props }) => {
  return (
    <input className="border rounded px-2 py-1" {...props} />
  );
};

export default Input;
