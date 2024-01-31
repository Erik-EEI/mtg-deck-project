import './EmptyAreaIcon.css';
import {emptyIcon} from "../../../Assets/index.js";

const EmptyAreaIcon = ({ message }) => {
    return (
        <div className={'empty-area-icon-container'}>
            <img src={emptyIcon}  alt={'Empty Area Icon'}/>
            <h1>{ message }</h1>
        </div>
    );
};

export default EmptyAreaIcon;
