import './Discover.css';
import {useGetRandomCard} from "../../Hooks/index.js";
const Discover = () => {
    const { randomCardData, isRandomCardLoading, isRandomCardError, reFetchRandomCard } = useGetRandomCard();

    return (
        <div id='discover-page-container'>
            <div id='discover-search-container'>

            </div>
            <div id='discover-cards-container'>

            </div>
        </div>
    );
};

export default Discover;