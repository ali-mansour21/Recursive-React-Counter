import React, { useState } from "react";
import "./App.css";

const App = ({ value, isRoot, onRemove, parentRemove }) => {
  const [subOptions, setSubOptions] = useState([]);

  const handleAddSubOption = () => {
    const newValue = subOptions.length === 0 ? value : value + 1;
    setSubOptions((prevSubOptions) => [
      ...prevSubOptions,
      <App
        key={newValue}
        value={newValue}
        onRemove={() => handleRemoveChild(newValue)}
        parentRemove={onRemove}
      />,
    ]);
  };

  const handleRemoveChild = (childValue) => {
    setSubOptions((prevSubOptions) =>
      prevSubOptions.filter((option) => option.props.value !== childValue)
    );
  };

  const handleRemoveParent = () => {
    if (isRoot) {
      onRemove();
    } else {
      parentRemove(value);
    }
  };

  return (
    <div style={{ paddingLeft: 15 }}>
      <span>-{value}</span>
      <button className="increment" onClick={handleAddSubOption}>
        +
      </button>
      <button className="decrement" onClick={handleRemoveParent}>
        -
      </button>
      {subOptions}
    </div>
  );
};

const MainApp = () => {
  const [value] = useState(1);
  const [isMainAppVisible, setIsMainAppVisible] = useState(true);
  const [subOptions, setSubOptions] = useState([]);

  const handleRemoveMain = () => {
    setIsMainAppVisible(false);
  };

  const handleRemoveChild = (childValue) => {
    setSubOptions((prevSubOptions) =>
      prevSubOptions.filter((option) => option.props.value !== childValue)
    );
  };

  return (
    <div>
      {isMainAppVisible && (
        <App
          value={value}
          isRoot
          onRemove={handleRemoveMain}
          parentRemove={handleRemoveChild}
        />
      )}
    </div>
  );
};

export default MainApp;
