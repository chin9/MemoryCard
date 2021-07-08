import './App.css';
import Scoreboard from './components/Scoreboard';
import Cards from './components/Cards';
import React, { useState, useEffect } from 'react';

function App() {

  //keep track of scores
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  //keep track of cards
  const [cardsClicked, setCardsClicked] = useState([]);

  useEffect(()=>{
    const incrementOnClick = () => {
      setScore(score + 1);
    }

    document.addEventListener('click', incrementOnClick);

    return () => {
      document.removeEventListener('click', incrementOnClick);
    }
  }, [score, highScore]);

  const updateScore = (id) => {
    if (cardsClicked.includes(id)) {
      alert('id in array')
    } else {
      setCardsClicked(cardsClicked.concat(id));
      alert('adding id');
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard score={score} highScore={highScore}/>
      </header>
      <Cards updateScore={updateScore}/>
    </div>
  );
}

export default App;
