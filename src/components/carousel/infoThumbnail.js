import React from "react";
import styled from "styled-components";

import BuyIcon from "../../assets/buyIcon.svg";
import Button from "../button";
import device from "../styles/device";

const InfoWrapper = styled.div`
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

export const InfoThumbnail = ({ ...props }) => (
    <InfoWrapper>
        <Title>{props.thumbnail.title}</Title>
        <TextThumbnail>{props.thumbnail.description}</TextThumbnail>
        <Button text={"Buy Now"} src={BuyIcon} theme={props.thumbnail.theme} />
        <Button inverse text={"Watch Trailer"} theme={props.thumbnail.theme}/>
    </InfoWrapper>
)

export default InfoThumbnail;