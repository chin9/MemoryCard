import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import React, { useState, useEffect } from 'react';

function App() {

  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(()=>{
    const incrementOnClick = () => {
      setScore(score + 1);
    }

    document.addEventListener('click', incrementOnClick);

    return () => {
      document.removeEventListener('click', incrementOnClick);
    }
  }, [score, highScore]);

  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard score={score} highScore={highScore}/>
      </header>
      <Cards/>
    </div>
  );
}

export default App;
