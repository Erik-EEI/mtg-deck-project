import './Discover.css';
import {
    CardDetailModal,
    DiscoverCardComponent, DiscoverPageSelector,
    DiscoverSearchComponent,
    SearchLoadingAnimation
} from "../../Components/Discover/index.js";
import {useEffect, useState} from "react";
import {sadWizardLogo} from "../../Assets/index.js";
const Discover = () => {
    const [ allCardData, setAllCardData ] = useState( null );
    const [ cardToReview, setCardToReview ] = useState(null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ isModalVisible, setIsModalVisible ] = useState(false);
    const [ currentPage, setCurrentPage ] = useState(0);
    const [ cardsToDisplay, setCardsToDisplay ] = useState(null);

    useEffect(() => {
        if(allCardData || allCardData === undefined) {
            setCardsToDisplay( generateCardsForPage(currentPage) );
        }
    }, [currentPage, allCardData]);

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

    const generateCardsForPage = ( pageNo ) => {
        if( allCardData === undefined ) return (
            <div className='no-cards-found-container'>
                <img src={sadWizardLogo} alt='Sorry, no cards found'/>
                <p>Sorry, no cards found!</p>
            </div>
        )
        const cards = [];

        //TODO Raise card/page to constant
        for(let i = 0; i < 6; i++ ){
            const cardIndex = ((pageNo - 1) * 6) + i;
            if(!allCardData[cardIndex]) break;

            cards.push(<DiscoverCardComponent key={i} cardData={allCardData[ cardIndex ]} onClick={ handleOnClick }/>)
        }
        return cards;
    }
    //TODO Implement loading card animation
    return (
        <>
        <div id='discover-page-container' className={isModalVisible ? 'blur' : ''}>
            <div id='discover-search-container'>
                <DiscoverSearchComponent setResults={setAllCardData} setIsLoading={setIsLoading} setPage={setCurrentPage} />
            </div>
            <section className={'discover-result-area-container'}>
                <div id='discover-cards-container'>
                    {isLoading ? <SearchLoadingAnimation /> : cardsToDisplay }
                </div>
                {allCardData && <DiscoverPageSelector currentPage={currentPage} setPage={setCurrentPage} allResultCount={allCardData.length}/>}
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