import React from "react";
import TextBlurb from "./textBlurb";
import styled from "styled-components";
import device from "./styles/device";

const ThumbnailWrapper = styled.div`
  display: grid;
  align-content: center;
  justify-items: center;
  align-items: center;


  @media ${device.mobileS} {
    grid-template-columns: 30px auto 30px;
    grid-template-rows: auto auto;
    padding: 100px 0px;
  }

  @media ${device.tablet} {
    padding: 100px;
  }

  @media ${device.laptop} {
    padding: 120px 50px;
    grid-template-columns: auto 500px 50px 500px auto;
    grid-template-rows: auto;
  }
`;

const Left = styled.div`
    @media ${device.mobileS} {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }

    @media ${device.laptop} {
        width: 500px;
        grid-column: ${props => props.reversed ? "4 / 5" : "2 / 3"};
        grid-row: 1 / 2;
    }
`;

const Right = styled.div`
    @media ${device.mobileS} {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
        margin-bottom: 50px;
    }

    @media ${device.laptop} {
        grid-column: ${props => props.reversed ? "2 / 3" : "4 / 5"};
        grid-row: 1 / 2;
        margin-bottom: 0px;
    }
`;

const ImgThumbnail = styled.img`
    max-width: 100%;
`;

function renderOrder(props) {
    if(props.imgFirst) {
      return (
        <React.Fragment>
            <Left>
                <ImgThumbnail src={props.imgSrc}></ImgThumbnail>
            </Left>
            <Right>
                <TextBlurb 
                    title={props.title} 
                    text={props.text}>
                </TextBlurb>
            </Right>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
            <Left reversed>
                <ImgThumbnail src={props.imgSrc}></ImgThumbnail>
            </Left>
            <Right reversed>
                <TextBlurb 
                    title={props.title} 
                    text={props.text}>
                </TextBlurb>
            </Right>
        </React.Fragment>
      );
    }
  }

export const Thumbnail = ({ ...props }) => (
    <ThumbnailWrapper style={props.style}>
        {renderOrder(props)}
    </ThumbnailWrapper>
)

export default Thumbnail;