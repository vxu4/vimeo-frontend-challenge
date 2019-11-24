import React from "react";
import styled from "styled-components";

import device from "../styles/device";

const Thumbnail = styled.img`
    width: 250px;
    margin: 50px;
    height: auto;
    @media ${device.mobileS} {
        justify-self: center;
        align-self: flex-start;
        grid-row: 2 / 3;
        grid-column: 2 / 3;
    }

    @media ${device.laptop} {
        grid-row: 1 / 2;
        justify-self: flex-end;
    }
`;

export const ImgThumbnail = ({ ...props }) => (
    <Thumbnail src={props.src}/>
)

export default ImgThumbnail;