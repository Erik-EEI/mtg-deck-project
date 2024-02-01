import './Settings.css';
import SettingsButton from "../../Components/Settings/index.js";
import {useState} from "react";

const Settings = () => {
    const [ activePage, setActivePage ] = useState('Name');

    return (
        <div className={'settings-container'}>
            <div className={'settings-box'}>
                <section className={'settings-control-container'}>
                    <SettingsButton label={'Name'} onclick={() =>setActivePage('Name')} activePage={activePage}/>
                    <SettingsButton label={'Theme'} onclick={() =>setActivePage('Theme')} activePage={activePage}/>
                    <SettingsButton label={'Export'} onclick={() =>setActivePage('Export')} activePage={activePage}/>
                    <SettingsButton label={'Import'} onclick={() =>setActivePage('Import')} activePage={activePage}/>
                    <SettingsButton label={'Reset'} onclick={() =>setActivePage('Reset')} activePage={activePage}/>
                </section>
                <div className={'settings-separation-line'} />
                <section className={'settings-options-container'}>

                </section>
            </div>
        </div>
    );
};

export default Settings;
