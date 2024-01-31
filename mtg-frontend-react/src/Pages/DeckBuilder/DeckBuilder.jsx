import './DeckBuilder.css';
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {buildHandler, deckHandler} from "../../Utils/index.js";
import {DefaultButton} from "../../Components/Discover/index.js";
import {
    DeckBuilderCardBoard,
    DeckBuilderSearchComponent,
    DeckBuilderStatusBoard,
    DeckNameInputField
} from "../../Components/DeckBuilder/index.js";

const DeckBuilder = () => {
    const { name } = useParams();
    const [deckName, setDeckName] = useState(name);
    const [isLoadedFromMemory, setIsLoadedFromMemory] = useState(false);
    const [currentDeck, setCurrentDeck] = useState(
        {
        deckName: deckName,
        cards:{}
        });

    const loadDeckFromMemory = () => {
        const cardArray = deckHandler.getDeck(name);

        if (cardArray && !isLoadedFromMemory) {
            const deckFromStorage = {
                deckName,
                cards: cardArray,
            };

            setIsLoadedFromMemory(true);
            setCurrentDeck(deckFromStorage);
        }
    };

    useEffect(() => {
        loadDeckFromMemory();
        updateCurrentDeckName();
    }, [deckName]);

    const handleCardClick = (cardData) => buildHandler.addCardToDeck( currentDeck,setCurrentDeck,cardData );
    const updateCurrentDeckName = () => buildHandler.updateDeckName( currentDeck, deckName, setCurrentDeck );
    const handlePlusAmount = (cardName) => buildHandler.incrementCardAmount( currentDeck, setCurrentDeck, cardName );
    const handleMinusAmount = (cardName) => buildHandler.decreaseCardAmount( currentDeck, setCurrentDeck, cardName );
    const handleRemove = (cardName) => buildHandler.removeCardFromDeck( currentDeck, setCurrentDeck, cardName );
    const handleResetDeck = () => buildHandler.resetDeck( setCurrentDeck, deckName );
    const handleSaveDeck = () => deckHandler.saveDeck( currentDeck );

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
                <DefaultButton text={'RESET'} onClick={handleResetDeck} />
                <DefaultButton text={'SAVE'} onClick={handleSaveDeck}/>
            </div>
        </div>
    );
};

export default DeckBuilder;
