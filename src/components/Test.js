import React, { useState, useEffect } from "react";

const Test = (props) => {
  const [count, setCount] = useState("");

  useEffect(() => {
    console.log(count);
    // setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>Test.js</h1>
      <input
        type="text"
        onChange={(e) => {
          setCount(e.target.value);
        }}
      />
    </div>
  );
};

export default Test;
