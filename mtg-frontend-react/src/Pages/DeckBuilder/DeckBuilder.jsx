import './DeckBuilder.css';
import {useParams} from "react-router-dom";
import {DeckBuilderSearchComponent} from "../../Components/DeckBuilder/index.js";
import {useState} from "react";

const DeckBuilder = () => {
    const [ isLoading, setIsLoading ] = useState( false );
    const [ allCardData, setAllCardData ] = useState( null );
    const [ currentPage, setCurrentPage ] = useState(0);
    const { name } = useParams();

    return (
        <div className={'deck-builder-page-container'}>
            <h1 className={'deck-builder-deck-name'}>{name}</h1>
            <div className={'deck-builder-search-container'}>
                <DeckBuilderSearchComponent setResults={setAllCardData} setIsLoading={setIsLoading} setPage={setCurrentPage}/>
            </div>
            <div className={'deck-builder-result-container'}>RESULT</div>
            <div className={'deck-builder-controls-container'}>
                <button> SAVE </button>
                <button> ERASE </button>
            </div>
        </div>
    );
};

export default DeckBuilder;