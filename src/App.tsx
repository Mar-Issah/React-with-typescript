import React, {useState} from 'react';
import './App.css';

function App() {

  const [num, setNum] = useState<string | number | boolean>(5);

  const handleNum = () : void=> {
    setNum(20)
  }
  return (
    <div className="App">
      <h1>{num}</h1>
      <button onClick={handleNum}>click me</button>
    </div>
  );
}

export default App;
