import './DiscoverSearchComponent.css';
import {useEffect, useState} from "react";
import {useGetRandomCard, useGetSymbology, useSearchCards} from "../../../Hooks/index.js";
import {ColorSearchOption, DefaultButton, SearchFieldComponent, ToughnessSelectorComponent} from "../index.js";
const DiscoverSearchComponent = ({setResults, setIsLoading, setPage}) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchColors, setSearchColors] = useState([]);
    const [typeSearchTerm, setTypeSearchTerm] = useState('');
    const [powerPreference, setPowerPreference] = useState([0,20]);
    const [toughnessPreference, setToughnessPreference] = useState([0,20]);
    const [ displaySearchResults, setDisplaySearchResults ] = useState(true);
    const { symbologyData, isSymbologyError, isSymbologyLoading } = useGetSymbology()
    const { randomCardData, isRandomCardLoading, isRandomCardError, reFetchRandomCard } = useGetRandomCard();
    const { resultCardsData, isResultsLoading, isResultsError, reFetchSearchCards } = useSearchCards( searchTerm, searchColors, powerPreference, toughnessPreference, typeSearchTerm );

    useEffect(() => {

        if( resultCardsData && displaySearchResults ) {
            setResults(resultCardsData.data);
            setIsLoading(false);
        } else if( randomCardData && !displaySearchResults ){
            setResults([randomCardData]);
            setIsLoading(false);
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
        if( searchTerm === '' && searchColors.length === 0 && typeSearchTerm === ''){
            console.log('Empty')
        } else {
            setIsLoading( true );
            setDisplaySearchResults(true);
            reFetchSearchCards();
            setPage(1);
        }
    }

    const handleRandomButtonClick = () => {
        setIsLoading( true );
        setDisplaySearchResults(false);
        reFetchRandomCard();
        setPage(1);
    }
//TODO Include power/toughness change to reset state
    return (
        <div id='discover-search-component-container'>
            <h2>SEARCH</h2>
            <SearchFieldComponent onChange={setSearchTerm} value={searchTerm} placeholderText={'Enter Name'}/>
            <SearchFieldComponent onChange={setTypeSearchTerm} value={typeSearchTerm} placeholderText={'Enter Type'}/>
            <p> COLOR </p>
            <section className={'discover-search-color-container'}>
            { symbologyData && generateColorPickers() }
            </section>
            <p> POWER / TOUGHNESS </p>
            <ToughnessSelectorComponent setPowerPreference={setPowerPreference} setToughnessPreference={setToughnessPreference} />
            <DefaultButton text={'Surprise me!'} onClick={ handleRandomButtonClick } />
            <DefaultButton text={'Search'} onClick={ handleSearchButtonClick } />
        </div>
    );
};

export default DiscoverSearchComponent;