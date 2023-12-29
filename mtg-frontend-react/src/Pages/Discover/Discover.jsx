import './Discover.css';
import {useGetRandomCard} from "../../Hooks/index.js";
import {CardDetailModal, DiscoverCardComponent, DiscoverSearchComponent} from "../../Components/Discover/index.js";
import {useState} from "react";
const Discover = () => {
    const [ cardToReview, setCardToReview ] = useState(null);
    const [ allCardData, setAllCardData ] = useState( null );
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
                <DiscoverSearchComponent setResults={setAllCardData} />
            </div>
            <div id='discover-cards-container'>
                { allCardData && displayCardPage(1)}
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