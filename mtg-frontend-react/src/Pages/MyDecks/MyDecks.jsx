import './MyDecks.css';
import { DeckCardComponent } from "../../Components/MyDecks/index.js";
import {useEffect, useState} from "react";
import {deckHandler} from "../../Utils/index.js";

const MyDecks = () => {
    const [ deckArray, setDeckArray ] = useState([]);

    useEffect(() => {
        setDeckArray( deckHandler.getAllDecks() );
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
