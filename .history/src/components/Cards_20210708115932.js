import React from 'react';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';
import bananas from '../images/bananas.png';
import orange from '../images/orange-juice.png'

const Cards = () => {
    return (
    <div className='card-display'>
        <div>
            <img src={apple} alt='apple'></img>
            <h4>Apple</h4>
        </div>
        <div>
            <img src={grapes} alt='grapes'></img>
            <h4>Grapes</h4>
        </div>
        <div>
            <img src={bananas} alt='bananas'></img>
            <h4>Bananas</h4>
        </div>
        <div>
            <img src={orange} alt='orange'></img>
            <h4>Orange</h4>
        </div>
    </div>
    );
}

export default Cards;