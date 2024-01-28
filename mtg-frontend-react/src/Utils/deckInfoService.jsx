const getColorOrientation = ( deck ) => {
    const colorFreqTable = {};

    for(let card of Object.values(deck)){
        const cardColor = card.data.color_identity[0];
        if(colorFreqTable[cardColor]) colorFreqTable[cardColor] += card.amount;
        else colorFreqTable[cardColor] = card.amount;
    }

    const highestCardCount = Math.max( ...Object.values(colorFreqTable) );
    const deckOrientation = [];

    Object.entries( colorFreqTable ).forEach(([color,amount]) => highestCardCount === amount ? deckOrientation.push(color) : '');
    return deckOrientation;
}

export {
    getColorOrientation
}