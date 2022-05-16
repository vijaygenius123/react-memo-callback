import './wdyr';
import React, { useState, useCallback } from 'react';
import ChildNumber from './components/ChildNumber';
import './App.css';

const App = () => {
  const [localNumber, setLocalNumber] = useState(0);
  const [childNumber, setChildNumber] = useState(0);

  const memoizedCallback = useCallback((num) => changeChildNumber(num), []);

  function incrementLocalNumber() {
    setLocalNumber((prev) => prev + 1);
  }

  function changeChildNumber(num) {
    setChildNumber(num);
  }

  //console.count("Parent Render")
  return (
    <div className="App">
      <h1>Local Number: {localNumber}</h1>
      <button onClick={incrementLocalNumber}>Increment Local Number</button>
      <ChildNumber number={childNumber} changeChildNumber={memoizedCallback} />
    </div>
  );
};
App.whyDidYouRender = true;
export default App;
