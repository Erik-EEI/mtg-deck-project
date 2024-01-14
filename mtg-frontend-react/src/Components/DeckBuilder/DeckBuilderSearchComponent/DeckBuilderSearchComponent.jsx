import './DeckBuilderSearchComponent.css';
import {ColorSearchOption, DefaultButton, SearchFieldComponent} from "../../Discover/index.js";
import UseGetSymbology from "../../../Hooks/useGetSymbology.jsx";
import {useEffect, useState} from "react";
import {useSearchCards} from "../../../Hooks/index.js";
import {DeckBuilderCardSelector} from "../index.js";

const DeckBuilderSearchComponent = ({ onCardClick }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColors, setSearchColors] = useState([]);
    const [typeSearchTerm, setTypeSearchTerm] = useState('');
    const [lastSearchCode, setLastSearchCode] = useState('');
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
    const generateSearchCode = () => {
        return searchTerm+searchColors+typeSearchTerm;
    } // TODO Lift to custom hook

    //TODO include type search field here too
    const handleSearchButtonClick = () => {
        if( searchTerm === '' &&
            searchColors.length === 0 &&
            typeSearchTerm === ''
        ){
            console.log('Empty')
        } else if( lastSearchCode === generateSearchCode() ){
            console.log('No modifications')
        }else{
            setLastSearchCode( generateSearchCode() );
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
                <DefaultButton
                    text={'Search'}
                    onClick={handleSearchButtonClick}
                    />
            </section>
            <section className={'deck-builder-search-results'}>
                <DeckBuilderCardSelector cardArray={resultCardsData?.data} isLoading={isResultsLoading} onCardClick={onCardClick}/>
            </section>
        </div>
    );
};

export default DeckBuilderSearchComponent;
