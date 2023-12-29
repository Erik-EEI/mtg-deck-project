import './SearchLoadingAnimation.css';
import {searchingWizardLogo} from "../../../Assets/index.js";
const SearchLoadingAnimation = () => {
    return (
        <img src={searchingWizardLogo} alt='Loading cards' className='card-searching-animation'/>
    );
};

export default SearchLoadingAnimation;