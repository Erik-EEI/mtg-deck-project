
    const getDeck = ( deckName ) => {
    const deckContainer = JSON.parse( localStorage.getItem('deck-container') );
    return deckContainer[deckName];
    }

    const getAllDecks = () => {
        const decks = JSON.parse(localStorage.getItem('deck-container'));
        return decks ? decks : [];
    }

    const saveDeck = ( deck ) => {
        let deckContainer = JSON.parse(localStorage.getItem('deck-container')) || {};
        if( !deckContainer ) deckContainer = {};

        deckContainer[deck.deckName] = deck.cards;

        localStorage.setItem('deck-container', JSON.stringify(deckContainer));
    }

    const deleteDeck = ( deckName ) => {
        let deckContainer = JSON.parse(localStorage.getItem('deck-container')) || {};
        delete deckContainer[deckName];

        localStorage.setItem('deck-container', JSON.stringify(deckContainer));
    }

export {
    getDeck,
    saveDeck,
    deleteDeck,
    getAllDecks
};
