import React, { useState } from "react";

const Counter = ({ value }) => {
  const [subOptions, setSubOptions] = useState([]);

  const handleAddSubOption = () => {
    const newValue =
      subOptions.length === 0 ? value : value + subOptions.length;
    setSubOptions((prevSubOptions) => [
      ...prevSubOptions,
      <Counter key={newValue} value={newValue} />,
    ]);
  };

  return (
    <div style={{ paddingLeft: 15 }}>
      <span>-{value}</span>
      <button className="increment" onClick={handleAddSubOption}>
        +
      </button>
      <button className="decrement">-</button>
      {subOptions}
    </div>
  );
};

export default Counter;
