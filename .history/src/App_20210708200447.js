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
  const [currCard, setCurrCard] = useState(null);
  const [update, setUpdate] = useState(false);


  useEffect(()=> {
    console.log('score: ' + score);
    if (score > highScore) {
      setHighScore(score);
    }
    setUpdate(false);
    console.log(cardsClicked);
  }, [score, cardsClicked]);

  useEffect(()=> {

    console.log('card clicked: ' + currCard);
    console.log('update?: ' + update); 


    if (currCard === null || update === false) {
      // do nothing
    } else {
      const exists = cardsClicked.some(v => v === currCard);   
      if (!exists) {
        setScore(score => score + 1);
        setCardsClicked(cardsClicked => [...cardsClicked, currCard]);        
        } else {
      setScore(0);
      setCardsClicked([]);
    }     
    }
    // setUpdate(false);
    // console.log(cardsClicked.some(v => v === ));

  }, [currCard, update]);


  const updateScore = (id) => {

    setCurrCard(id);
    setUpdate(true);

  }

  return (
    <div className="App">
      <header className="App-header">
        <Scoreboard score={score} highScore={highScore}/>
      </header>
      <Cards updateScore={updateScore}/>
      <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  );
}

export default App;
