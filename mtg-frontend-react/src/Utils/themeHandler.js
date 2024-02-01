const changeBackground = (theme) => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
        rootElement.style.backgroundImage = theme.background;
    }
};



export {
    changeBackground
}
