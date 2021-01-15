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
            console.log(res)

        }
        getCard();
    }

    return (
        <div>
            <button onClick={drawCard}>GIMME A CARD!</button>
            <img src={drawnCard}/>
        </div>

    )
}

export default DeckOfCards;