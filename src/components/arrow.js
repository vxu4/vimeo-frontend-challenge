import React from 'react';
import styled from "styled-components";

import device from "./styles/device";
import colors from "./styles/palette";

const ArrowIcon = styled.div`
    padding: 0px 50px;
    color: ${colors.white1Transparent};
    font-size: 70px;
    font-family: Georgia, sans serif;
    z-index: 9999;
    position: absolute;

    :hover {
        cursor: pointer;
        color: ${colors.blue1};
    }

    @media ${device.mobileS} {
        top: 400px;
        left: ${props => props.right ? "80vw" : "1vw"}; 
    }

    @media ${device.tablet} {
        left: ${props => props.right ? "80vw" : "10vw"}; 
    }

    @media ${device.laptop} {
        top: 150px;
    }
`;

export const Arrow = ({ ...props }) => (
    <div>
    {props.right ? 
        <ArrowIcon right
            onClick={ props.onClick }>
            &#62;
        </ArrowIcon> : 
        <ArrowIcon 
            onClick={ props.onClick }>
            &#60;
        </ArrowIcon>
    }
    </div>
)

export default Arrow;