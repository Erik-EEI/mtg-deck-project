import './MyDecks.css';
import { DeckCardComponent } from "../../Components/MyDecks/index.js";
import {useEffect, useState} from "react";

const MyDecks = () => {
    const [ deckArray, setDeckArray ] = useState([]);
    const retrieveDecks = () => {
        const decks = JSON.parse(localStorage.getItem('deck-container'));
        return decks ? decks : [];
    }

    useEffect(() => {
        const decks = retrieveDecks();
        setDeckArray( decks );
    }, []);

    return (
        <div className={'my-decks-page-container'}>
            <h1>MY DECKS</h1>
            <div className={'my-decks-card-container'}>
                {Object.entries(deckArray).map((deck) => <DeckCardComponent key={deck[0]} deckName={deck[0]} deckCards={deck[1]} />)}
            </div>
        </div>
    );
};

export default MyDecks;
