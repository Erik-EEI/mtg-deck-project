const addCardToDeck  = ( deck, setDeck, cardData ) => {
    const updatedDeck = { ...deck };
    if (updatedDeck.cards[cardData.name]) updatedDeck.cards[cardData.name].amount++;
    else updatedDeck.cards[cardData.name] = { amount: 1, data: cardData };

    setDeck(updatedDeck);
}

const updateDeckName = ( deck, deckName, setDeck ) => {
    if(deckName !== deck.deckName){
        const updatedDeck = { ...deck };
        updatedDeck.deckName = deckName;

        setDeck( updatedDeck );
    }
}

const incrementCardAmount = ( deck, setDeck, cardName ) => {
    const updatedDeck = { ...deck };
    updatedDeck.cards[cardName].amount++;

    setDeck(updatedDeck);
}

const decreaseCardAmount = ( deck, setDeck, cardName ) => {
    const updatedDeck = { ...deck };
    updatedDeck.cards[cardName].amount--;

    if (updatedDeck.cards[cardName].amount === 0) delete updatedDeck.cards[cardName];
    setDeck(updatedDeck);
}

const removeCardFromDeck = ( deck, setDeck, cardName ) => {
    const updatedDeck = { ...deck };
    delete updatedDeck.cards[cardName];

    setDeck(updatedDeck);
}

const resetDeck = ( setDeck, deckName ) => {
    const factoryResetDeck = {
        deckName: deckName,
        cards:{}
    };

    setDeck( factoryResetDeck );
};

export {
    addCardToDeck,
    updateDeckName,
    decreaseCardAmount,
    removeCardFromDeck,
    incrementCardAmount,
    resetDeck
}
