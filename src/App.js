import React, { Component } from 'react';

import './App.css';
import Thumbnail from './components/thumbnail';
import Carousel from './components/carousel';
import staticThumbnails from './assets/staticThumbnails.js';
import carouselThumbnails from "./assets/carouselThumbnails";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Carousel slides={carouselThumbnails}/>
        {
          staticThumbnails.map((thumbnailInfo, index) => {
            let thumbStyle;
            if (thumbnailInfo.gradient){
              thumbStyle = {
                backgroundImage: "linear-gradient(" + thumbnailInfo.theme.main +", " + thumbnailInfo.theme.gradientTo,
                color: thumbnailInfo.theme.text,
                paddingTop: "0px",
              };
            } else {
              thumbStyle = {
                backgroundColor: thumbnailInfo.theme.main,
                color: thumbnailInfo.theme.text,
              };
            }
            return (<Thumbnail style={thumbStyle}
              imgSrc={thumbnailInfo.imageSrc}
              title={thumbnailInfo.title} 
              text={thumbnailInfo.text}
              imgFirst={index % 2 === 0}>
            </Thumbnail>);
          })
        }
      </div>
    );
  }
}

export default App;
