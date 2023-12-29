import './DiscoverSearchComponent.css';
import {useEffect, useState} from "react";
import {useGetRandomCard, useGetSymbology, useSearchCards} from "../../../Hooks/index.js";
import {ColorSearchOption} from "../index.js";
const DiscoverSearchComponent = ({setResults}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColors, setSearchColors] = useState([]);
    const [ displaySearchResults, setDisplaySearchResults ] = useState(true);
    const { symbologyData, isSymbologyError, isSymbologyLoading } = useGetSymbology()
    const { resultCardsData, isResultsLoading, isResultsError, reFetchSearchCards } = useSearchCards( searchTerm, searchColors );
    const { randomCardData, isRandomCardLoading, isRandomCardError, reFetchRandomCard } = useGetRandomCard();

    useEffect(() => {

        if( resultCardsData && displaySearchResults ) {
            setResults(resultCardsData.data);
        } else if( randomCardData && !displaySearchResults ){
            setResults([randomCardData]);
        }

    }, [ resultCardsData, randomCardData]);

    const generateColorPickers = () => {
        const colors = ["{W}","{U}","{B}","{R}", "{G}"];

        return colors.map((colorCode) =>{
            const icon = symbologyData.data.find((symbolObject) => symbolObject.symbol === colorCode).svg_uri;
            return <ColorSearchOption key={colorCode} colorIcon={icon} colorText={colorCode} selectedValues={searchColors} setSelectedValues={setSearchColors} />
        })
    }

    const handleSearchButtonClick = () => {
        if( searchTerm === '' && searchColors.length === 0){
            console.log('Empty')
        } else {
            setDisplaySearchResults(true);
            reFetchSearchCards();
        }
    }

    const handleRandomButtonClick = () => {
        setDisplaySearchResults(false);
        reFetchRandomCard();
    }

    return (
        <div id='discover-search-component-container'>
            <h2>SEARCH</h2>
            <input
            type='text'
            placeholder='Enter Name'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p> COLOR </p>
            <section className={'discover-search-color-container'}>
            {symbologyData && generateColorPickers() }
            </section>
            <button onClick={ handleRandomButtonClick }> Surprise me! </button>
            <button onClick={ handleSearchButtonClick }> SEARCH </button>
        </div>
    );
};

export default DiscoverSearchComponent;