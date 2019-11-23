import React, { Component } from 'react';
import styled from "styled-components";

import Slide from "./slide";
import Arrow from "./arrow";

const CarouselContainer = styled.div`
    display: flex;
    transition: ${(props) => props.sliding ? 'none' : 'transform 0.6s ease'};
    transform: ${(props) => {
        if (!props.sliding) return 'translateX(calc(-100%))'
        if (props.direction === 'prev') return 'translateX(calc(2 * (-100%)))'
        return 'translateX(0%)'
    }};
`

const CarouselWrapper = styled.div`
    width: 100%;
    overflow: hidden;
`

const CarouselSlot = styled.div`
    flex: 1 0 100%;
    flex-basis: 100%;
    order: ${(props) => props.order};
`

class Carousel extends Component {
    constructor (props) {
        super(props);
        this.carouselThumbnails = props.slides;
        this.state = {
            currIndex: 0,
            slideDirection: 'next',
            sliding: false
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.prevSlide = this.prevSlide.bind(this);
        this.doSliding = this.doSliding.bind(this);
      }

    doSliding(currIndex, direction) {
        this.setState({
            currIndex: currIndex,
            slideDirection: direction,
            sliding: true
        })
        setTimeout(() => {
         this.setState({
            sliding: false
          })
        }, 50)
      }

    prevSlide() {
        const curr = this.state.currIndex;
        const numItems = this.carouselThumbnails.length || 1;
        this.doSliding(curr === 0 ? numItems - 1 : curr - 1, 'prev')
    }

    nextSlide () {
        const curr = this.state.currIndex
        const numItems = this.carouselThumbnails.length || 1;
        this.doSliding(curr === numItems - 1 ? 0 : curr + 1, 'next')
    }

    getOrder(itemIndex) {
        const curr = this.state.currIndex
        const numItems = this.carouselThumbnails.length || 1
        if (itemIndex - curr < 0) {
          return numItems - Math.abs(itemIndex - curr)
        }
        return itemIndex - curr
    }
    
    render () {
        return (
            <CarouselWrapper>
                <Arrow right onClick={ this.nextSlide } />
                <Arrow onClick={ this.prevSlide } />
                <CarouselContainer sliding={this.state.sliding} direction={this.state.slideDirection}>
                {
                    this.carouselThumbnails.map((thumbnailInfo, index) =>
                        <CarouselSlot id={index} order={ this.getOrder(index) }>
                            <Slide thumbnail={thumbnailInfo}/>
                        </CarouselSlot>
                    )
                }
                </CarouselContainer>
            </CarouselWrapper>
        );
    }
  }

  export default Carousel;
