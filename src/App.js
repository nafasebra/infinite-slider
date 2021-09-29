import React, { PureComponent } from 'react';

// include data of slider
import { DataSlider } from './Data/DataSlider';

// import style
import './App.css';

class App extends PureComponent {

  constructor() {
    super();

    this.state = {
      topPosSlide: 0,
      current: 1,
      captionOpacity: 1,
      slides: [...DataSlider]
    }
  }

  prevSlide() { 

    let {current, slides, topPosSlide} = this.state;
    const slideLength = DataSlider.length;
    const slidesArr = [
      ...DataSlider.slice(-1), 
      ...DataSlider
    ].slice(0, slideLength);


    if(current >= slideLength || current <= -1) return;

    this.setState({
      topPosSlide: topPosSlide + 100,
      current: current - 1,
      slides: slidesArr
    })

    
    // handle animation
    requestAnimationFrame(() => {
      this.setState({
        captionOpacity: 0.5
      })
      setTimeout(() => {
        this.setState({
          captionOpacity: 1
        })
      }, 200);
    })

    console.log(slides);
  }

  nextSlide() {

    let { slides, current, topPosSlide } = this.state;
    const slideLength = DataSlider.length;
    const slidesArr = [
      ...DataSlider, 
      ...DataSlider.slice(0, 1)
    ].slice(-(slideLength));

    if(current >= slideLength || current <= -1) return;

    this.setState({
      topPosSlide: topPosSlide - 100,
      current: current === slideLength - 1 ? 0 : current + 1,
      slides: slidesArr
    })

    
    // handle animation
    requestAnimationFrame(() => {
      this.setState({
        captionOpacity: 0
      })
      setTimeout(() => {
        this.setState({
          captionOpacity: 1
        })
      }, 500);
    })

    console.log(slides);
  }


  render() {
    let { slides, topPosSlide, current, captionOpacity } = this.state;

    return (
      <div className="app-container">
        <div 
          className="slider-container"
          style={{
            position: 'absolute',
            top: topPosSlide + '%'
          }}
        >
          <div className="slider">
            {
              slides.map( (item, index) => <div key={index} className="slider__item" >
                                        <img src={item.srcImage} alt={item.altImage} />
                                      </div>)
            }

            <div className="caption"> 
              <div 
                style={{
                  opacity: captionOpacity,
                  transition: 'all 0.5s'
                }}
              >
                <h2 className="caption__title">
                  {DataSlider[current].captionTitle}
                </h2>
                <p className="caption__desc">
                  {DataSlider[current].captionDesc}
                </p>
              </div>
            </div>

            <div className="controls">
              <button 
                onClick={() => this.prevSlide()}
                className="prev__button"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              </button>
              <button 
                onClick={() => this.nextSlide()}
                className="next__button"
              >  
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
            </div>

            <div className="slider-pagination"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
