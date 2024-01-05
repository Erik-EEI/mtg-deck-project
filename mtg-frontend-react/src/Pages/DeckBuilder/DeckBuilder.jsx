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

//TODO Debug card reappear bug when deleting from deck
    const handleCardClick = ( cardData ) => {
        console.log(cardData)
        if( currentDeck.cards[ cardData.name] ) currentDeck.cards[ cardData.name ].amount++;
        else currentDeck.cards[ cardData.name ] = { amount : 1, data: cardData };

        setCurrentDeck(structuredClone(currentDeck));
    }

    const handlePlusAmount = ( cardName ) => {
        console.log(cardName)
        currentDeck.cards[cardName].amount++;

        setCurrentDeck(structuredClone(currentDeck));
    }

    const handleMinusAmount = ( cardName ) => {
        currentDeck.cards[cardName].amount--;
        if(currentDeck.cards[cardName].amount === 0) delete currentDeck.cards[cardName];

        setCurrentDeck(structuredClone(currentDeck));
    }

    const handleRemove = ( cardName ) => {
        delete currentDeck.cards[cardName];

        setCurrentDeck(structuredClone(currentDeck));
    }

    //TODO Research structured clone technique
    //TODO Implement deck loading from browser memory
    return (
        <div className={'deck-builder-page-container'}>
            <h1 className={'deck-builder-deck-name'}>{name}</h1>
            <div className={'deck-builder-search-container'}>
                <DeckBuilderSearchComponent onCardClick={handleCardClick}/>
            </div>
            <div className={'deck-builder-result-container'}>
                <DeckBuilderStatusBoard deck={currentDeck}/>
                <DeckBuilderCardBoard
                    deck={currentDeck}
                    handleRemove={handleRemove}
                    handleMinusAmount={handleMinusAmount}
                    handlePlusAmount={handlePlusAmount}
                />
            </div>
            <div className={'deck-builder-controls-container'}>
                <button> SAVE </button>
                <button> ERASE </button>
            </div>
        </div>
    );
};

export default DeckBuilder;