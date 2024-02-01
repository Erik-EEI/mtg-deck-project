const changeBackground = (theme) => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.style.backgroundImage = theme.background;
    }
};

const changeButtonColor = (theme) => {
    const rootElement = document.getElementById('root');
    if(rootElement){
        rootElement.style.setProperty('--theme-button-bg', theme.button.button_bg);
        rootElement.style.setProperty('--theme-button-top', theme.button.button_top);
        rootElement.style.setProperty('--theme-button-left', theme.button.button_left);
        rootElement.style.setProperty('--theme-button-right', theme.button.button_right);
        rootElement.style.setProperty('--theme-button-bottom', theme.button.button_bottom);
        rootElement.style.setProperty('--theme-button-active', theme.button.button_active);
    }
}



export {
    changeBackground,
    changeButtonColor
}
