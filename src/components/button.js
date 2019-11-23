import React from "react";
import colors from "./styles/palette";
import styled from "styled-components";

const ButtonContainer = styled.button`
    width: 150px;
    height: 50px;
    border-radius: 5px;
    margin-right: 10px;
    color: ${colors.white1};
    background-color: ${props => props.theme.button};
    border: none;
    font-size: 17px;
    font-weight: bold;
    >img, >span {
        vertical-align: middle;

    }
    :hover {
        cursor: pointer;
    }
`;

const InverseButton = styled(ButtonContainer)`
    background-color: ${colors.transparent};
    border-color: ${colors.white1Transparent};
    border: 1px solid ${colors.white1Transparent};
`;

const Icon = styled.img`
    width: 30px;
    padding-right: 10px;
`;

export const Button = ({ ...props }) => (
    <React.Fragment>
        {props.inverse ?
            <InverseButton>
                <span>{props.text}</span>
            </InverseButton> :
            <ButtonContainer theme={props.theme}>
                <Icon src={props.src}/>
                <span>{props.text}</span>
            </ButtonContainer>
        }
    </React.Fragment>
)

export default Button;