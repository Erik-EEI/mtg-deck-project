import './MyDecks.css';
import { DeckCardComponent } from "../../Components/MyDecks/index.js";

const MyDecks = () => {
    const retrieveDecks = () => {
        const cards = [];
        const deckContainer = JSON.parse(localStorage.getItem('deck-container'));

        for (let [key, value ] of Object.entries(deckContainer)) {
            console.log( deckContainer )
            console.log( key )
            console.log( value )
            cards.push(<DeckCardComponent key={key} deckName={key} deckCards={value} />);
        }

        return cards;
    }

    const decks = retrieveDecks(); // Call retrieveDecks once and store the result

    return (
        <div className={'my-decks-page-container'}>
            <h1>MY DECKS</h1>
            <div className={'my-decks-card-container'}>
                {decks}
            </div>
        </div>
    );
};

export default MyDecks;
