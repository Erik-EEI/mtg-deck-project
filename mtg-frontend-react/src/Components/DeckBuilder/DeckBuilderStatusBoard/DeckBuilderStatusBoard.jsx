import './DeckBuilderStatusBoard.css';
import {useEffect, useState} from "react";
import { ManaCostGraph } from "../index.js";

const DeckBuilderStatusBoard = ({ deck }) => {

    const [ cardCount, setCardCount ] = useState(0);
    const [ averageManaCost, setAverageManaCost ] = useState(0);

    useEffect(() => {
        setCardCount( getCardCount() );
        setAverageManaCost( getAverageManaCost() );
    }, [deck]);


    const getCardCount = () => {
        let cardCount = 0;

        for( let card in deck.cards ){
            cardCount += deck.cards[card].amount;
        }
        console.log(cardCount)

        return cardCount;
    }

    const getAverageManaCost = () => {
        const manaCostArray = [];

        for( let card in deck.cards ){
            if( deck.cards[card].data.cmc ) manaCostArray.push( deck.cards[card].data.cmc );
        }

        console.log(manaCostArray);
        return (manaCostArray.reduce((acc,curr) => acc + curr,0) / manaCostArray.length).toFixed(1);
    }

    return (
        <div className={'deck-builder-status-board'}>
            <h3>{deck.deckName}</h3>
            <p>{cardCount} / 60</p>
            <p>Average mana cost : {averageManaCost}</p>
            <ManaCostGraph deck={ deck } />
        </div>
    );
};

export default DeckBuilderStatusBoard;