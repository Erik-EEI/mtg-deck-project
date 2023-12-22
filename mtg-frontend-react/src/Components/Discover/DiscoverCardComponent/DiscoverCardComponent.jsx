import './DiscoverCardComponent.css';

const DiscoverCardComponent = ({ cardData, onClick }) => {
    return (
        <img
            src={cardData.image_uris.large}
            className='discover-card'
            onClick={() => onClick(cardData)}
        />
    );
};

export default DiscoverCardComponent;