import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import InfoThumbnail from "./infoThumbnail";
import ImgThumbnail from "./imgThumbnail";
import device from "../styles/device";


const ImageSlide = styled.img`
    width: 100vw;
    -webkit-filter: blur(10px) brightness(40%);
    filter: blur(10px) brightness(40%);
    margin: 0px;
    padding: 0px;
    @media ${device.mobileS} {
        height: 800px;
    }
    
    @media ${device.laptop} {
        height: 500px;
    }
`;

const OverLay = styled.div`
    background-color: ${props => props.theme.transparent};
    display: grid;  
    align-items: center;
    position: relative;
    width: 100vw;
    padding: 0px;
    @media ${device.mobileS} {
        height: 800px;
        margin-top: -800px;
        grid-template-columns: auto 70vw auto;
        grid-template-rows: auto auto;
    }
    
    @media ${device.laptop} {
        grid-template-columns: auto 300px 500px auto;
        grid-template-rows: auto;
        height: 500px;
        margin-top: -500px;
    }
`;

export const Slide = ({ ...props }) => (
    <ThemeProvider theme={props.thumbnail.theme}>
        <ImageSlide src={props.thumbnail.imgUrl}/>
        <OverLay>
            <ImgThumbnail src={props.thumbnail.imgUrl}></ImgThumbnail>
            <InfoThumbnail thumbnail={props.thumbnail}></InfoThumbnail>
        </OverLay>
    </ThemeProvider>
)

export default Slide;