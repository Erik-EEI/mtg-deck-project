import './DashboardCard.css';
import {useNavigate} from "react-router-dom";

const DashboardCard = ({ icon, picture, mainText, subText, destinationUrl}) => {

    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(destinationUrl);
    }

    return (
        <div className='dashboard-card-container' onClick={handleOnClick}>
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