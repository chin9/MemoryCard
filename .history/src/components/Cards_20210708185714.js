import React, {useState, useEffect} from 'react';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';
import bananas from '../images/bananas.png';
import orange from '../images/orange-juice.png'
import '../style/Cards.css'

const Cards = (props) => {



    useEffect(()=>{
        const apple = document.getElementById(0);
        const grapes = document.getElementById(1);
        const bananas = document.getElementById(2);
        const orange = document.getElementById(3);



        const updateScoreWithFruit = (e) => {
            props.updateScore(e.id)
        };

        apple.addEventListener('click', ()=>{updateScoreWithFruit(apple)});
        grapes.addEventListener('click', ()=>{updateScoreWithFruit(grapes)});
        bananas.addEventListener('click', ()=>{updateScoreWithFruit(bananas)});
        orange.addEventListener('click', ()=>{updateScoreWithFruit(orange)});

        console.log('mounted');

        return ()=>{
            apple.removeEventListener('click', updateScoreWithFruit(apple));
            grapes.removeEventListener('click', updateScoreWithFruit(grapes));
            bananas.removeEventListener('click', updateScoreWithFruit(bananas));
            orange.removeEventListener('click', updateScoreWithFruit(orange));
        }

    }, [uid]);




    return (
    <div className='card-display'>
        <div>
            <img src={apple} alt='apple' className='fruit' id={0}></img>
            <h4>Apple</h4>
        </div>
        <div>
            <img src={grapes} alt='grapes' className='fruit' id={1}></img>
            <h4>Grapes</h4>
        </div>
        <div>
            <img src={bananas} alt='bananas' className='fruit' id={2}></img>
            <h4>Bananas</h4>
        </div>
        <div>
            <img src={orange} alt='orange' className='fruit' id={3}></img>
            <h4>Orange</h4>
        </div>
    </div>
    );
}

export default Cards;