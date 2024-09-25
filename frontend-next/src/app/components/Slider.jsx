'use client'
import React, { useState } from 'react';

const Slider = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState(min);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="my-4">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={handleChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
      <p className="text-lg text-center mt-2">Value: {value}</p>
    </div>
  );
};

export default Slider;
