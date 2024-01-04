import './DeckBuilder.css';
import {useParams} from "react-router-dom";
import {
    DeckBuilderCardBoard,
    DeckBuilderSearchComponent,
    DeckBuilderStatusBoard
} from "../../Components/DeckBuilder/index.js";
import {useState} from "react";

const DeckBuilder = () => {
    const { name } = useParams();
    const [currentDeck, setCurrentDeck] = useState(
        {
        deckName: name,
        cards:{}
        });


    const handleCardClick = ( cardData ) => {
        if( currentDeck.cards[ cardData.name] ) currentDeck.cards[ cardData.name ].amount++;
        else currentDeck.cards[ cardData.name ] = { amount : 1, data: cardData };

        setCurrentDeck(structuredClone(currentDeck));
    }

    //TODO Implement deck loading from browser memory
    return (
        <div className={'deck-builder-page-container'}>
            <h1 className={'deck-builder-deck-name'}>{name}</h1>
            <div className={'deck-builder-search-container'}>
                <DeckBuilderSearchComponent onCardClick={handleCardClick}/>
            </div>
            <div className={'deck-builder-result-container'}>
                <DeckBuilderStatusBoard deck={currentDeck}/>
                <DeckBuilderCardBoard deck={currentDeck}/>
            </div>
            <div className={'deck-builder-controls-container'}>
                <button> SAVE </button>
                <button> ERASE </button>
            </div>
        </div>
    );
};

export default DeckBuilder;