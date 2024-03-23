import React, { useState } from "react";

const Counter = ({ options }) => {
  return (
    <ul>
      {options.map((option, index) => {
        <li key={index}>
          <Counter options={option.subOptions} />
        </li>;
      })}
    </ul>
  );
};

export default Counter;
