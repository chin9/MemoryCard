import './App.css';
import Scoreboard from './components/Scoreboard';
import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard score={score}/>
      </header>
    </div>
  );
}

export default App;
