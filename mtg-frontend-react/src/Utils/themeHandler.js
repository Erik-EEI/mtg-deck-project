const changeNavButtonColor = (theme, rootElement) => {
        rootElement.style.setProperty('--theme-nav-button-bg', theme.button.nav.button_bg);
        rootElement.style.setProperty('--theme-nav-button-top', theme.button.nav.button_top);
        rootElement.style.setProperty('--theme-nav-button-left', theme.button.nav.button_left);
        rootElement.style.setProperty('--theme-nav-button-right', theme.button.nav.button_right);
        rootElement.style.setProperty('--theme-nav-button-bottom', theme.button.nav.button_bottom);
        rootElement.style.setProperty('--theme-nav-button-active', theme.button.nav.button_active);
}
const changeDefaultButtonColor = (theme, rootElement) => {
        rootElement.style.setProperty('--theme-def-button-bg', theme.button.default.button_bg);
        rootElement.style.setProperty('--theme-def-button-top', theme.button.default.button_top);
        rootElement.style.setProperty('--theme-def-button-left', theme.button.default.button_left);
        rootElement.style.setProperty('--theme-def-button-right', theme.button.default.button_right);
        rootElement.style.setProperty('--theme-def-button-bottom', theme.button.default.button_bottom);
        rootElement.style.setProperty('--theme-def-button-active', theme.button.default.button_active);
        rootElement.style.setProperty('--theme-def-button-hover-bg', theme.button.default.button_hover_bg);
}
const changeBackground = (theme, rootElement) => rootElement.style.backgroundImage = theme.background;
const changeMainColor = (theme, rootElement) => rootElement.style.setProperty('--theme-main-color', theme.mainColor);
const changeShadowColor = ( theme, rootElement) => rootElement.style.setProperty('--theme-shadow-color', theme.shadow.main);
const changePanelBackground = ( theme, rootElement) => rootElement.style.setProperty('--theme-panel-bg', theme.panelBackground);
const changeSecondaryColor = (theme, rootElement) => rootElement.style.setProperty('--theme-secondary-color', theme.secondaryColor);
const changePanelShadowColor = ( theme, rootElement) => rootElement.style.setProperty('--theme-panel-shadow-color', theme.shadow.panel);

const changeTheme = ( theme ) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
    changeMainColor( theme, rootElement );
    changeBackground( theme, rootElement );
    changeShadowColor( theme, rootElement );
    changeNavButtonColor( theme, rootElement );
    changeSecondaryColor( theme, rootElement );
    changePanelBackground( theme, rootElement );
    changePanelShadowColor( theme, rootElement );
    changeDefaultButtonColor( theme, rootElement );

    localStorage.setItem('theme', JSON.stringify(theme));
    }
}

const applyTheme = () => {
    const savedTheme = JSON.parse( localStorage.getItem('theme') );
    if( savedTheme ) changeTheme( savedTheme );
}

const getTheme = () => {
    const savedTheme = JSON.parse( localStorage.getItem('theme') );
    return savedTheme ? savedTheme : {};
}



export {
    changeTheme,
    applyTheme,
    getTheme
}
