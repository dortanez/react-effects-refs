import React, { useState,useEffect } from 'react';
import axios from 'axios';

const DeckOfCards = () => {
    const [deck, setDeck] = useState(null);
    useEffect(() => {
        async function getCard() {
            const res = await axios.get('https://deckofcardsapi.com/api/deck/')
            setDeck(res)
        }
        getCard();

    },[setDeck])
    


    return (
        <div>
            <button>GIMME A CARD!</button>
        </div>

    )
}

export default DeckOfCards;