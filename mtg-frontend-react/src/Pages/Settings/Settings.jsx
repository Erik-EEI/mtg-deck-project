import './Settings.css';
import {SettingsButton, UsernameChangerComponent} from "../../Components/Settings/index.js";
import {useState} from "react";

const Settings = () => {
    const [ activePage, setActivePage ] = useState('Name');
    const pageComponents = {
        'Name': <UsernameChangerComponent />,
        'Theme': '',
        'Export': '',
        'Import': '',
        'Reset': '',
    };


    return (
        <div className={'settings-container'}>
            <div className={'settings-box'}>
                <section className={'settings-control-container'}>
                    {Object.keys(pageComponents).map((label) => <SettingsButton key={label} label={label} onclick={() =>setActivePage(label)} activePage={activePage} />)}
                </section>
                <div className={'settings-separation-line'} />
                <section className={'settings-options-container'}>
                    {pageComponents[activePage]}
                </section>
            </div>
        </div>
    );
};

export default Settings;
