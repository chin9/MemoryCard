import React from 'react';

const Scoreboard = (props) => {

    return (
        <div>
            <div>Current score: {props.score}</div> 
            <div>High score: {props.highScore}</div> 
            </div>
    )
}

export default Scoreboard;