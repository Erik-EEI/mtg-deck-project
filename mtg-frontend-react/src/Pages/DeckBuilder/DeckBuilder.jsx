import './DeckBuilder.css';
import {useParams} from "react-router-dom";

const DeckBuilder = () => {
    const { name } = useParams();

    return (
        <div className={'deck-builder-page-container'}>
            <h1 className={'deck-builder-deck-name'}>{name}</h1>
            <div className={'deck-builder-search-container'}>SEARCH</div>
            <div className={'deck-builder-result-container'}>RESULT</div>
            <div className={'deck-builder-controls-container'}>
                <button> SAVE </button>
                <button> ERASE </button>
            </div>
        </div>
    );
};

export default DeckBuilder;