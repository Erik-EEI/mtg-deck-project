import './Settings.css';
import {
    ExportComponent, ImportComponent,
    ResetComponent,
    SettingsButton,
    ThemePickerComponent,
    UsernameChangerComponent
} from "../../Components/Settings/index.js";
import {useEffect, useState} from "react";

const Settings = () => {
    const [ activePage, setActivePage ] = useState('Name');
    const pageComponents = {
        'Name': <UsernameChangerComponent />,
        'Theme': <ThemePickerComponent />,
        'Export': <ExportComponent />,
        'Import': <ImportComponent />,
        'Reset': <ResetComponent />,
    };

    useEffect(() => {

    }, [activePage]);


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
