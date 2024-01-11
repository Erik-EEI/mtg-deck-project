import './DefaultButton.css';
const DefaultButton = ({ text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={'default-button'}
            >{text}</button>
    );
};

export default DefaultButton;