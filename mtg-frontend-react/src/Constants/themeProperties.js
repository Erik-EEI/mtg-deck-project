import {
    backgroundBannerBlue,
    backgroundBannerGreen,
    backgroundBannerRed,
    backgroundPicture
} from "../Assets/index.js";

const RED_THEME = {
    name: 'Red',
    background: 'url(/src/Assets/background/dashboard-background.jpg)',
    banner: backgroundBannerRed,
    shadowColor: 'rgb(255,0,0)',
    buttonColor: 'rgb(255,0,0)'
}

const BLUE_THEME = {
    name: 'Blue',
    background: 'url(/src/Assets/background/bg_blue.jpg)',
    banner: backgroundBannerBlue,
    shadowColor: 'rgb(41,54,121)',
    buttonColor: 'rgb(41,54,121)',
}

const GREEN_THEME = {
    name: 'Green',
    background: 'url(/src/Assets/background/bg-green.jpg)',
    banner: backgroundBannerGreen,
    shadowColor: 'rgb(52,126,53)',
    buttonColor: 'rgb(52,126,53)',
}

export {
    RED_THEME,
    BLUE_THEME,
    GREEN_THEME
}
