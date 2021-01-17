import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './DeckOfCards.css';

const DeckOfCards = () => {
    const [deck, setDeck] = useState(null);
    const [drawnCard, setDrawnCard] = useState(null);
    useEffect(() => {
        async function newDeck() {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/new');
            await axios.get(`https://deckofcardsapi.com/api/deck/${res.data.deck_id}/shuffle/`);
            setDeck(res.data.deck_id)
        }
        newDeck();
    },[setDeck])

    const drawCard = () => {
        async function getCard() {
            const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
            setDrawnCard(res.data.cards[0].image);
            if(res.data.remaining === 0) {
                alert('Error: no cards remaining!');

            } 
        
        }
        getCard();
    }

    return (
        <div>
            <button id='drawBtn' onClick={drawCard}>GIMME A CARD!</button>
            <img src={drawnCard}/>
            <div>
                <h4 id='message'>Error: no cards remaining!</h4>
                <button id='restartBtn'>Restart</button>
            </div>
        </div>

    )
}

export default DeckOfCards;