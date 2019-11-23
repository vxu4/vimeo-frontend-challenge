import size from "./device-sizes";

export const device = {
    mobileS: `(min-width: ` + size.mobileS + `px)`,
    mobileM: `(min-width: ` + size.mobileM + `px)`,
    mobileL: `(min-width: ` + size.mobileL + `px)`,
    tablet: `(min-width: ` + size.tablet + `px)`,
    laptop: `(min-width: ` + size.laptop + `px)`,
    laptopL: `(min-width: ` + size.tablet + `px)`,
    desktop: `(min-width: ` + size.tablet + `px)`,
    desktopL: `(min-width: ` + size.tablet + `px)`
};

export default device;