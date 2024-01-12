import './Discover.css';
import {
    CardDetailModal,
    DiscoverCardComponent, DiscoverPageSelector,
    DiscoverSearchComponent,
    SearchLoadingAnimation
} from "../../Components/Discover/index.js";
import {useEffect, useState} from "react";
import {sadWizardLogo} from "../../Assets/index.js";
import {useComponentWidthCalculator} from "../../Hooks/index.js";
const Discover = () => {
    const [ allCardData, setAllCardData ] = useState( null );
    const [ cardToReview, setCardToReview ] = useState(null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ cardsToDisplay, setCardsToDisplay ] = useState(null);
    const [ cardsPerPageCount, setCardsPerPageCount ] = useState(0);
    const { ref, componentWidth } = useComponentWidthCalculator();

    useEffect(() => {
        if(allCardData || allCardData === undefined) {
            const cardsPerPage = calculateCardCount()
            setCardsPerPageCount( cardsPerPage );
            setCardsToDisplay( generateCardsForPage(currentPage, cardsPerPage) );
        }
    }, [currentPage, allCardData, componentWidth]);

    const handleOnClick = ( cardData ) => {
        if( cardData ) setCardToReview( cardData );
        setIsModalVisible(true );
    }

    const handleCloseModalClick = () => {
        setIsModalVisible(false );
    }

    const listenForEscapeKey = (event) => {
        if (event.key === 'Escape') {
            setIsModalVisible(false);
        }
    };

    const generateCardsForPage = ( pageNo, cardCount ) => {
        if( allCardData === undefined ) return (
            <div className='no-cards-found-container'>
                <img src={sadWizardLogo} alt='Sorry, no cards found'/>
                <p>Sorry, no cards found!</p>
            </div>
        )
        const cards = [];

        //TODO Raise card/page to constant
        for(let i = 0; i < cardCount; i++ ){
            const cardIndex = ((pageNo - 1) * cardCount) + i;
            if(!allCardData[cardIndex]) break;

            cards.push(<DiscoverCardComponent key={i} cardData={allCardData[ cardIndex ]} onClick={ handleOnClick }/>)
        }
        return cards;
    }

    const calculateCardCount = () => {
        return Math.floor(componentWidth / 280 ) * 2 ;
    }

    return (
        <>
        <div id='discover-page-container' className={isModalVisible ? 'blur' : ''}>
            <div id='discover-search-container'>
                <DiscoverSearchComponent setResults={setAllCardData} setIsLoading={setIsLoading} setPage={setCurrentPage} />
            </div>
            <section className={'discover-result-area-container'}>
                <div id='discover-cards-container' ref={ref}>
                    {isLoading ? <SearchLoadingAnimation /> : cardsToDisplay }
                </div>
                {allCardData && <DiscoverPageSelector
                    currentPage={currentPage}
                    setPage={setCurrentPage}
                    allResultCount={allCardData.length}
                    cardsPerPageCount={ cardsPerPageCount }
                />}
            </section>

        </div>
            <CardDetailModal
                cardData={cardToReview}
                isModalVisible={isModalVisible}
                handleOnClick={handleCloseModalClick}
                handleOnKeyClose={listenForEscapeKey}
            />
        </>
    );
};

export default Discover;