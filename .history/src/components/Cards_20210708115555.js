import React from 'react';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';

const Cards = () => {
    return (
    <div>
        <div>
            <img src={apple} alt='apple'></img>
            <h4>Apple</h4>
        </div>
        <div>
            <img src={grapes} alt='grapes'></img>
            <h4>Grapes</h4>
        </div>
    </div>
    );
}

export default Cards;