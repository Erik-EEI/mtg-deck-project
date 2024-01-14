import './DeckBuilder.css';
import {useNavigate, useParams} from "react-router-dom";
import {
    DeckBuilderCardBoard,
    DeckBuilderSearchComponent,
    DeckBuilderStatusBoard, DeckNameInputField
} from "../../Components/DeckBuilder/index.js";
import {useEffect, useState} from "react";
import {checkIcon, pencilIcon} from "../../Assets/index.js";

const DeckBuilder = () => {
    const { name } = useParams();
    const [isLoadedFromMemory, setIsLoadedFromMemory] = useState(false);
    const [deckName, setDeckName] = useState(name);
    const [currentDeck, setCurrentDeck] = useState(
        {
        deckName: deckName,
        cards:{}
        });

    useEffect(() => {
        const deckContainer = JSON.parse( localStorage.getItem('deck-container') );

        if( deckContainer && deckContainer[name] && !isLoadedFromMemory ){
            const deckFromStorage = {
                deckName: deckName,
                cards: deckContainer[name]
            }

            setIsLoadedFromMemory( true );
            setCurrentDeck(deckFromStorage);
        }

        updateCurrentDeckName();
    }, [currentDeck, deckName]);

//TODO Might be better to load deck by ID instead of deck name
    const handleCardClick = (cardData) => {
        const updatedDeck = { ...currentDeck };
        if (updatedDeck.cards[cardData.name]) {
            updatedDeck.cards[cardData.name].amount++;
        } else {
            updatedDeck.cards[cardData.name] = { amount: 1, data: cardData };
        }

        setCurrentDeck(updatedDeck);
    };
    const updateCurrentDeckName = () => {
        if( deckName !== currentDeck.deckName){
            const updatedDeck = { ...currentDeck };
            updatedDeck.deckName = deckName;

            setCurrentDeck( updatedDeck );
        }
    }

    const handlePlusAmount = (cardName) => {
        const updatedDeck = { ...currentDeck };
        updatedDeck.cards[cardName].amount++;

        setCurrentDeck(updatedDeck);
    };

    const handleMinusAmount = (cardName) => {
        const updatedDeck = { ...currentDeck };
        updatedDeck.cards[cardName].amount--;

        if (updatedDeck.cards[cardName].amount === 0) {
            delete updatedDeck.cards[cardName];
        }

        setCurrentDeck(updatedDeck);
    };

    const handleRemove = (cardName) => {
        const updatedDeck = { ...currentDeck };
        delete updatedDeck.cards[cardName];

        setCurrentDeck(updatedDeck);
    };

    const handleSaveDeck = () => {
        let deckContainer = JSON.parse(localStorage.getItem('deck-container')) || {};
        if( !deckContainer ) deckContainer = {};

        deckContainer[currentDeck.deckName] = currentDeck.cards;

        localStorage.setItem('deck-container', JSON.stringify(deckContainer));
    };
    const handleResetDeck = () => {
        const factoryResetDeck = {
            deckName: name,
            cards:{}
        };

        setCurrentDeck( factoryResetDeck );
    }

    return (
        <div className={'deck-builder-page-container'}>
            <DeckNameInputField setDeckName={setDeckName}/>
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
                <button
                type={'button'}
                onClick={handleSaveDeck}
                > SAVE </button>
                <button
                type={"button"}
                onClick={handleResetDeck}
                > ERASE </button>
            </div>
        </div>
    );
};

export default DeckBuilder;
