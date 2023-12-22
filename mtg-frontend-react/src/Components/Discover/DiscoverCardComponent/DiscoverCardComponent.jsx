import './DiscoverCardComponent.css';

const DiscoverCardComponent = ({ cardData }) => {
    return (
        <img src={cardData.image_uris.large} className='discover-card'/>
    );
};

export default DiscoverCardComponent;