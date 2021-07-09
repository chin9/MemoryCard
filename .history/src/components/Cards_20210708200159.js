import React, {useState, useEffect} from 'react';
import apple from '../images/apple.png';
import grapes from '../images/grapes.png';
import bananas from '../images/bananas.png';
import orange from '../images/orange-juice.png';
import mango from '../images/mango.png';
import blueberry from '../images/blueberry.png';
import pineapple from '../images/pineapple.png';
import '../style/Cards.css'

const Cards = (props) => {



    useEffect(()=>{
        const apple = document.getElementById(0);
        const grapes = document.getElementById(1);
        const bananas = document.getElementById(2);
        const orange = document.getElementById(3);
        const mango = document.getElementById(4);
        const blueberry = document.getElementById(5);
        const pineapple = document.getElementById(6);


        function randomizeOrder() {
            var parent = document.querySelector(".card-display");
            for(var i = 0; i < parent.children.length; i++){
            parent.appendChild(parent.children[Math.random() * i | 0]);            
        }
        }

        const updateScoreWithFruit = (e) => {
            props.updateScore(e.id);
            randomizeOrder();
        }
        

        apple.addEventListener('click', ()=>{updateScoreWithFruit(apple)});
        grapes.addEventListener('click', ()=>{updateScoreWithFruit(grapes)});
        bananas.addEventListener('click', ()=>{updateScoreWithFruit(bananas)});
        orange.addEventListener('click', ()=>{updateScoreWithFruit(orange)});
        mango.addEventListener('click', ()=>{updateScoreWithFruit(mango)});
        blueberry.addEventListener('click', ()=>{updateScoreWithFruit(blueberry)});
        pineapple.addEventListener('click', ()=>{updateScoreWithFruit(pineapple)});


        console.log('mounted');

        return ()=>{
            apple.removeEventListener('click', updateScoreWithFruit(apple));
            grapes.removeEventListener('click', updateScoreWithFruit(grapes));
            bananas.removeEventListener('click', updateScoreWithFruit(bananas));
            orange.removeEventListener('click', updateScoreWithFruit(orange));
            mango.removeEventListener('click', ()=>{updateScoreWithFruit(mango)});
            blueberry.removeEventListener('click', ()=>{updateScoreWithFruit(blueberry)});
            pineapple.removeEventListener('click', ()=>{updateScoreWithFruit(pineapple)});

        }

    }, []);




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
        <div>
            <img src={mango} alt='mango' className='fruit' id={4}></img>
            <h4>Mango</h4>
        </div>
        <div>
            <img src={blueberry} alt='mango' className='fruit' id={5}></img>
            <h4>Blueberries</h4>
        </div>
        <div>
            <img src={pineapple} alt='mango' className='fruit' id={5}></img>
            <h4>Pineapple</h4>
        </div>
    </div>
    );
}

export default Cards;