const changeBackground = (theme) => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.style.backgroundImage = theme.background;
    }
};

const changeNavButtonColor = (theme) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-nav-button-bg', theme.button.nav.button_bg);
        rootElement.style.setProperty('--theme-nav-button-top', theme.button.nav.button_top);
        rootElement.style.setProperty('--theme-nav-button-left', theme.button.nav.button_left);
        rootElement.style.setProperty('--theme-nav-button-right', theme.button.nav.button_right);
        rootElement.style.setProperty('--theme-nav-button-bottom', theme.button.nav.button_bottom);
        rootElement.style.setProperty('--theme-nav-button-active', theme.button.nav.button_active);
    }
}

const changeDefaultButtonColor = (theme) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-def-button-bg', theme.button.default.button_bg);
        rootElement.style.setProperty('--theme-def-button-top', theme.button.default.button_top);
        rootElement.style.setProperty('--theme-def-button-left', theme.button.default.button_left);
        rootElement.style.setProperty('--theme-def-button-right', theme.button.default.button_right);
        rootElement.style.setProperty('--theme-def-button-bottom', theme.button.default.button_bottom);
        rootElement.style.setProperty('--theme-def-button-active', theme.button.default.button_active);
        rootElement.style.setProperty('--theme-def-button-hover-bg', theme.button.default.button_active);
    }
}

const changeMainColor = (theme) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-main-color', theme.mainColor);
    }
}

const changeSecondaryColor = (theme) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-secondary-color', theme.secondaryColor);
    }
}

const changeShadowColor = ( theme ) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-shadow-color', theme.shadowColor);
    }
}



export {
    changeBackground,
    changeNavButtonColor,
    changeShadowColor,
    changeDefaultButtonColor,
    changeMainColor,
    changeSecondaryColor
}
