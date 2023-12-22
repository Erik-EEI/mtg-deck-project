import './DiscoverSearchComponent.css';
const DiscoverSearchComponent = ({ fetchRandomCard }) => {
    return (
        <div id='explore-search-component-container'>
            <h2>SEARCH</h2>
            <button onClick={fetchRandomCard}> Surprise me! </button>
        </div>
    );
};

export default DiscoverSearchComponent;