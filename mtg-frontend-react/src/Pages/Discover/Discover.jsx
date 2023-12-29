import './Discover.css';
import {
    CardDetailModal,
    DiscoverCardComponent,
    DiscoverSearchComponent,
    SearchLoadingAnimation
} from "../../Components/Discover/index.js";
import {useState} from "react";
import {sadWizardLogo} from "../../Assets/index.js";
const Discover = () => {
    const [ allCardData, setAllCardData ] = useState( null );
    const [ cardToReview, setCardToReview ] = useState(null );
    const [ isLoading, setIsLoading ] = useState( false );
    const [ isModalVisible, setIsModalVisible ] = useState(false);

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

    const displayCardPage = ( pageNo ) => {
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
                <DiscoverSearchComponent setResults={setAllCardData} setIsLoading={setIsLoading} />
            </div>
            <div id='discover-cards-container'>
                {isLoading ? <SearchLoadingAnimation /> : (allCardData || allCardData === undefined) && displayCardPage(1) }
            </div>
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