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

  // useEffect(()=>{
  //   const incrementOnClick = () => {
  //     setScore(score + 1);
  //   }

  //   document.addEventListener('click', incrementOnClick);

  //   return () => {
  //     document.removeEventListener('click', incrementOnClick);
  //   }
  // }, [score, highScore]);

  const updateScore = (id) => {
    //if cardsClicked doesn't contain id, add 1 to score, add id to cardsClicked
    //    if score > highScore, set highScore = score
    //else (if cardsClicked contains id), set score to 0, empty cardsClicked
    if (!cardsClicked.includes(id)) {
      setScore(score => score + 1);
      setCardsClicked(cardsClicked => [...cardsClicked, id]);
      console.log(id);
      console.log(score);
      if (score > highScore) {setHighScore(score)};
    } else {
      setScore(0);
      setCardsClicked([]);
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
