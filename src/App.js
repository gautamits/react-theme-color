import React, {useState, useEffect} from 'react';
import ChangeColor from './ChangeColor'
import './App.css';

function App() {
  const [change, toggleChange] = useState(false)
  const [color, changeColor] = useState("#458eff")
  const [isRandom, toggleRandom] = useState(false)
  return (
    <div className="App">
      <label>change<input type="checkbox" value={change} onChange={e=>toggleChange(!change)}/></label>
      <input type="color" value={color} onChange={e=>changeColor(e.target.value)}/>
      <label>random<input type="checkbox" value={isRandom} onChange={e=>toggleRandom(!isRandom)}/></label>
      {change && <ChangeColor random={isRandom} color={color}>hello</ChangeColor>}
    </div>
  );
}

export default App;
