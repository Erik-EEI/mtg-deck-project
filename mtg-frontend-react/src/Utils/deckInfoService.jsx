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

const calculateAverageValue = ( deck, key ) => {
    const sum = Object.values(deck).reduce((acc,curr) =>{
        const value =  Number( curr.data[key] );

        return value ? acc + Number(curr.data[key]) : acc;
    }, 0);

    const cardCount = Object.values(deck).filter((card) => card.data[key]).length;

    return (sum / cardCount).toFixed(1);
};

const getCardWithMaxValue = ( deck, key ) => {
    const resultCard =  Object.values(deck).reduce((acc,curr) => Number(curr.data[key]) > Number(acc.data[key]) ? curr : acc);

    return resultCard.data;
}

const getDeckAvailability = ( deck ) => {
    const gameFreqTable = {};

    for(let card of Object.values(deck)){
        const availableGames = card.data.games;
        availableGames.forEach((game) => gameFreqTable[game] ? gameFreqTable[game]++ : gameFreqTable[game] = 1);
    }

    return Object.entries(gameFreqTable)
        .filter(([_,count]) => count >= Object.values(deck).length)
        .map(([game,_]) => ` ${game}`);
}

export {
    getColorOrientation,
    calculateAverageValue,
    getCardWithMaxValue,
    getDeckAvailability
}
