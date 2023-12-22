import './Discover.css';
import {useGetRandomCard} from "../../Hooks/index.js";
import {CardDetailModal, DiscoverCardComponent, DiscoverSearchComponent} from "../../Components/Discover/index.js";
import {useState} from "react";
const Discover = () => {
    const { randomCardData, isRandomCardLoading, isRandomCardError, reFetchRandomCard } = useGetRandomCard();
    const [ cardToReview, setCardToReview ] = useState(null);
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
    //TODO Implement loading card animation
    return (
        <>
        <div id='discover-page-container' className={isModalVisible ? 'blur' : ''}>
            <div id='discover-search-container'>
                <DiscoverSearchComponent fetchRandomCard={reFetchRandomCard} />
            </div>
            <div id='discover-cards-container'>
                {randomCardData && <DiscoverCardComponent cardData={randomCardData} onClick={handleOnClick}/>}
            </div>
        </div>
            <CardDetailModal
                cardData={cardToReview}
                isModalVisible={isModalVisible}
                handleOnClick={handleCloseModalClick}
                handleOnKeyClose={listenForEscapeKey} />
        </>
    );
};

export default Discover;