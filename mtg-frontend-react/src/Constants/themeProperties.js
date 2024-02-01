import {
    backgroundBannerBlue,
    backgroundBannerGreen,
    backgroundBannerRed,
} from "../Assets/index.js";

const RED_THEME = {
    name: 'Red',
    background: 'url(/src/Assets/background/dashboard-background.jpg)',
    banner: backgroundBannerRed,
    shadowColor: 'rgba(255, 0, 0, 0.8)',
    buttonColor: 'rgb(255,0,0)',
    button : {
        nav:{
            button_bg:'radial-gradient(circle, #51000000, #6b0000)',
            button_top: '4px ridge #0e0000',
            button_left: '4px groove #310000',
            button_right: '4px ridge #1f0101',
            button_bottom: '4px groove #230000',
            button_active: 'radial-gradient(circle, rgba(0, 0, 0, 0.7), #a10404)'
        },
        default: {
            button_bg: 'radial-gradient(circle, #8b0000, #8b0000)',
            button_top: '4px ridge #490000',
            button_left: '4px groove #310000',
            button_right: '4px ridge #1f0101',
            button_bottom: '4px groove #230000',
            button_active: 'radial-gradient(circle, #ec6a6a, #e52b2b)',
            button_hover_bg: 'radial-gradient(circle, #e52b2b, #8b0000)',
        },
    }
}

const BLUE_THEME = {
    name: 'Blue',
    background: 'url(/src/Assets/background/bg_blue.jpg)',
    banner: backgroundBannerBlue,
    shadowColor: 'rgb(41,54,121)',
    buttonColor: 'rgb(41,54,121)',
    button: {
        nav: {
            button_bg: 'radial-gradient(circle, #51000000, #080d50)',
            button_top: '4px ridge #00040e',
            button_left: '4px groove #000731',
            button_right: '4px ridge #01081f',
            button_bottom: '4px groove #000223',
            button_active: 'radial-gradient(circle, rgba(0, 0, 0, 0.7), #0419a1)'
        },
        default: {
            button_bg: 'radial-gradient(circle, #00008b, #00008b)',
            button_top: '4px ridge #000049',
            button_left: '4px groove #000031',
            button_right: '4px ridge #01001f',
            button_bottom: '4px groove #000023',
            button_active: 'radial-gradient(circle, #6a6aec, #2b2be5)',
            button_hover_bg: 'radial-gradient(circle, #2b2be5, #00008b)',
        },
    }
}

const GREEN_THEME = {
    name: 'Green',
    background: 'url(/src/Assets/background/bg-green.jpg)',
    banner: backgroundBannerGreen,
    shadowColor: 'rgb(52,126,53)',
    buttonColor: 'rgb(52,126,53)',
    button : {
        nav:{
            button_bg:'radial-gradient(circle, #51000000, #0a5008)',
            button_top: '4px ridge #010e00',
            button_left: '4px groove #003102',
            button_right: '4px ridge #091f01',
            button_bottom: '4px groove #082300',
            button_active: 'radial-gradient(circle, rgba(0, 0, 0, 0.7), #09a104)'
        },
        default: {
            button_bg: 'radial-gradient(circle, #006400, #006400)',
            button_top: '4px ridge #003200',
            button_left: '4px groove #002200',
            button_right: '4px ridge #001f00',
            button_bottom: '4px groove #001c00',
            button_active: 'radial-gradient(circle, #006a00, #005c00)',
            button_hover_bg: 'radial-gradient(circle, #005c00, #004f00)',
        },
    }
}

export {
    RED_THEME,
    BLUE_THEME,
    GREEN_THEME
}
