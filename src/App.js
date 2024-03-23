import React, { useState } from "react";
import "./App.css";
import Counter from "./Counter";

const App = () => {
  const [value] = useState(1);
  return (
    <div>
      <Counter value={value} />
    </div>
  );
};

export default App;
