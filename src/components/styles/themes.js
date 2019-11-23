import colors from "./palette";

const themes = {
    goldTheme: {
        main: colors.gold1,
        gradientTo: colors.white1,
        title: colors.white1,
        text: colors.white1Transparent,
        button: colors.gold1,
        transparent: colors.gold1Transparent
    },
    blueTheme: {
        main: colors.blue1,
        gradientTo: colors.white1,
        title: colors.white1,
        text: colors.white1Transparent,
        button: colors.blue1,
        transparent: colors.blue1Transparent
    },
    tealTheme: {
        main: colors.teal1,
        gradientTo: colors.white1,
        title: colors.white1,
        text: colors.white1Transparent,
        button: colors.teal1,
        transparent: colors.teal1Transparent
    },
    grayTheme: {
        main: colors.charcoal1,
        gradientTo: colors.charcoal2,
        title: colors.white1,
        text: colors.white1,
        button: colors.charcoal3,
        transparent: colors.charcoal1Transparent
    },
    whiteTheme: {
        main: colors.white1,
        gradientTo: colors.charcoal2,
        title: colors.black1,
        text: colors.black1,
        button: colors.charcoal1,
        transparent: colors.white1Transparent
    }
}

export default themes;