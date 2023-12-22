import './Discover.css';
import {useGetRandomCard} from "../../Hooks/index.js";
import {DiscoverCardComponent, DiscoverSearchComponent} from "../../Components/Discover/index.js";
const Discover = () => {
    const { randomCardData, isRandomCardLoading, isRandomCardError, reFetchRandomCard } = useGetRandomCard();

    return (
        <div id='discover-page-container'>
            <div id='discover-search-container'>
                <DiscoverSearchComponent fetchRandomCard={reFetchRandomCard} />
            </div>
            <div id='discover-cards-container'>
                {randomCardData && <DiscoverCardComponent cardData={randomCardData}/>}

            </div>
        </div>
    );
};

export default Discover;