import './DeckBuilderSearchComponent.css';
import {ColorSearchOption, SearchFieldComponent} from "../../Discover/index.js";
import UseGetSymbology from "../../../Hooks/useGetSymbology.jsx";
import {useEffect, useState} from "react";
import {useSearchCards} from "../../../Hooks/index.js";
import {DeckBuilderCardSelector} from "../index.js";

const DeckBuilderSearchComponent = ({ onCardClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColors, setSearchColors] = useState([]);
    const [typeSearchTerm, setTypeSearchTerm] = useState('');
    const { symbologyData, isSymbologyError, isSymbologyLoading } = UseGetSymbology();
    const { resultCardsData, isResultsLoading, isResultsError, reFetchSearchCards } = useSearchCards( searchTerm, searchColors, typeSearchTerm );

    useEffect(() => {
    }, [resultCardsData]);

    const generateColorPickers = () => {
        const colors = ["{W}","{U}","{B}","{R}", "{G}"];

        return colors.map((colorCode) =>{
            const icon = symbologyData.data.find((symbolObject) => symbolObject.symbol === colorCode).svg_uri;
            return <ColorSearchOption key={colorCode} colorIcon={icon} colorText={colorCode} selectedValues={searchColors} setSelectedValues={setSearchColors} />
        })
    }

    //TODO include type search field here too
    const handleSearchButtonClick = () => {
        if( searchTerm === '' && searchColors.length === 0){
            console.log('Empty')
        } else {
            reFetchSearchCards();
        }
    }
//TODO Elevate constants, check ? on deckBuilderCardSelector props
    return (
        <div className={'deck-builder-search-component'}>
            <section className={'deck-builder-search-controls'}>
                <SearchFieldComponent onChange={setSearchTerm} value={searchTerm} placeholderText={'Enter Name'}/>
                <SearchFieldComponent onChange={setTypeSearchTerm} value={typeSearchTerm} placeholderText={'Enter Type'}/>
                <div className={'deck-builder-search-color-container'}>
                { symbologyData && generateColorPickers() }
                </div>
                <button
                    type={'button'}
                    onClick={handleSearchButtonClick}
                    > SEARCH </button>
            </section>
            <section className={'deck-builder-search-results'}>
                <DeckBuilderCardSelector cardArray={resultCardsData?.data} isLoading={isResultsLoading} onCardClick={onCardClick}/>
            </section>
        </div>
    );
};

export default DeckBuilderSearchComponent;