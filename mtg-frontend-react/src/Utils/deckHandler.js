
    const getDeck = ( deckName ) => {
    const deckContainer = JSON.parse( localStorage.getItem('deck-container') );
    if(!deckContainer) return null;
    return deckContainer[deckName];
    }

    const getAllDecks = () => {
        const decks = JSON.parse(localStorage.getItem('deck-container'));
        return decks ? decks : [];
    }

    const setAllDecks =( allDecks ) => {
    localStorage.setItem('deck-container', JSON.stringify( allDecks ));
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

    const deleteAllDecks = () => {
    localStorage.setItem('deck-container', '{}');
    }

export {
    getDeck,
    saveDeck,
    deleteDeck,
    setAllDecks,
    getAllDecks,
    deleteAllDecks
};
