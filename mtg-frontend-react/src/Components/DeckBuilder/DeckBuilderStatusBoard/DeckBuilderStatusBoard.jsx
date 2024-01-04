import './DeckBuilderStatusBoard.css';

const DeckBuilderStatusBoard = ({ deck }) => {
    return (
        <div className={'deck-builder-status-board'}>
            <h3>{deck.deckName}</h3>
        </div>
    );
};

export default DeckBuilderStatusBoard;