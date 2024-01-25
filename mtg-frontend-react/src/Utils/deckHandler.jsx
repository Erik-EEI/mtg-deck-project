
    const getDeck = ( deckName ) => {
    const deckContainer = JSON.parse( localStorage.getItem('deck-container') );
    return deckContainer[deckName];
    }

    const saveDeck = ( deck ) => {
        let deckContainer = JSON.parse(localStorage.getItem('deck-container')) || {};
        if( !deckContainer ) deckContainer = {};

        deckContainer[deck.deckName] = deck.cards;

        localStorage.setItem('deck-container', JSON.stringify(deckContainer));
    }

export {
    getDeck,
    saveDeck
};