import './DashboardCard.css';

const DashboardCard = ({ icon, picture, mainText, subText, destinationUrl}) => {
    return (
        <div className='dashboard-card-container'>
            <img src={picture} alt='Card Background' className='card-background' />
            <div className='card-content'>
                <img src={icon} alt='Card Icon' className='card-icon' />
                <h2 className='card-main-text'>{mainText}</h2>
                <p className='card-sub-text'>{subText}</p>
            </div>
        </div>
    );
};

export default DashboardCard;