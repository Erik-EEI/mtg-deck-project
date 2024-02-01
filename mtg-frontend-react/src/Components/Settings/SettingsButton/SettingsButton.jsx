import './SettingsButton.css';

const SettingsButton = ({ onclick, label, activePage}) => {
    return (
        <button className={activePage === label ? 'settings-button settings-button-active' : 'settings-button'} onClick={onclick}>{label}</button>
    );
};

export default SettingsButton;
