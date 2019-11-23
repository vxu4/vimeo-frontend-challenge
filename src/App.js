import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Thumbnail from './components/thumbnail';
import Carousel from './components/carousel';
import colors from './components/styles/palette';
import staticThumbnails from './assets/staticThumbnails.js';

const Main = styled.div`
  display: grid;
  grid-template-columns: 100%;
  justify-content: center;
  align-content: center;
  grid-template-rows: auto auto auto auto;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Main>
        <Carousel style={{gridRow: "1 / 2"}}>
        </Carousel>
        <Thumbnail style={{backgroundColor: colors.white1,
                    color: colors.charcoal1,
                    gridRow: "2 / 3"}}
                    imgSrc={staticThumbnails[0].imageSrc}
                    title={staticThumbnails[0].title} 
                    text={staticThumbnails[0].text}
                    imgFirst={true}>
        </Thumbnail>
        <Thumbnail style={{backgroundColor: colors.charcoal1,
                           color: colors.white1,
                           gridRow: "3 / 4",
                           paddingBottom: "30px"}}
                    imgSrc={staticThumbnails[1].imageSrc}
                    title={staticThumbnails[1].title} 
                    text={staticThumbnails[1].text}
                    imgFirst={false}>
        </Thumbnail>
        <Thumbnail style={{backgroundImage: "linear-gradient(" + colors.charcoal1 +", " + colors.charcoal2,
                    color: colors.white1,
                    gridRow: "4 / 5",
                    paddingTop: "30px"}}
                    imgSrc={staticThumbnails[2].imageSrc}
                    title={staticThumbnails[2].title} 
                    text={staticThumbnails[2].text}
                    imgFirst={true}>
        </Thumbnail>
      </Main>
    );
  }
}

export default App;
