import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import BuyIcon from "../../assets/buyIcon.svg";
import Button from "../button";
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

const InfoThumbnail = styled.div`
    @media ${device.mobileS} {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        margin-top: 0px;
        align-self: flex-end;
        margin-bottom: 0px;
    }

    @media ${device.laptop} {
        margin-top: 80px;
        align-self: flex-start;
        grid-column: 3 / 4;
        grid-row: 1 / 2;
    }
`;

const Title = styled.h1 `
    color: ${props => props.theme.title};
    padding: 0px;
    font-weight: 500;
`;

const TextThumbnail = styled.p`
    margin: 25px 0px;
    padding: 0px;
    color: ${props => props.theme.text};
`;

const ImgThumbnail = styled.img`
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

export const Slide = ({ ...props }) => (
    <ThemeProvider theme={props.thumbnail.theme}>
        <ImageSlide src={props.thumbnail.imgUrl}/>
        <OverLay>
            <ImgThumbnail src={props.thumbnail.imgUrl}></ImgThumbnail>
            <InfoThumbnail>
                <Title>{props.thumbnail.title}</Title>
                <TextThumbnail>{props.thumbnail.description}</TextThumbnail>
                <Button text={"Buy Now"} src={BuyIcon} theme={props.thumbnail.theme}/>
                <Button inverse text={"Watch Trailer"} theme={props.thumbnail.theme}/>
            </InfoThumbnail>
        </OverLay>
    </ThemeProvider>
)

export default Slide;