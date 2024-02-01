import {
    backgroundBannerBlue,
    backgroundBannerGreen,
    backgroundBannerRed,
    backgroundBlue,
    backgroundGreen,
    backgroundPicture
} from "../Assets/index.js";

const RED_THEME = {
    name: 'Red',
    background: backgroundPicture,
    banner: backgroundBannerRed,
    shadowColor: 'rgb(255,0,0)',
    buttonColor: 'rgb(255,0,0)'
}

const BLUE_THEME = {
    name: 'Blue',
    background: backgroundBlue,
    banner: backgroundBannerBlue,
    shadowColor: 'rgb(41,54,121)',
    buttonColor: 'rgb(41,54,121)',
}

const GREEN_THEME = {
    name: 'Green',
    background: backgroundGreen,
    banner: backgroundBannerGreen,
    shadowColor: 'rgb(52,126,53)',
    buttonColor: 'rgb(52,126,53)',
}

export {
    RED_THEME,
    BLUE_THEME,
    GREEN_THEME
}
