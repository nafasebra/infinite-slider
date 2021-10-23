import React, { PureComponent } from 'react';

// include data of slider
import { DataSlider } from './Data/DataSlider';

// import style
import './App.css';

class App extends PureComponent {

  constructor() {
    super();

    this.state = {
      current: 0,
      captionOpacity: 1,
      direction: '',
      yPositions: [0, 100, 200, 300]
    }
    
  }


  prevSlide() { 

    let {current} = this.state;

    let yPositions = this.state.yPositions.slice();

    yPositions.push(yPositions.shift());

    this.setState({
      current: current > 0 ? current - 1 : current = DataSlider.length - 1,
      yPositions,
      direction: 'up',
    })


    //handle animation
    requestAnimationFrame(() => {
      this.setState({
        captionOpacity: 0.5
      })
      setTimeout(() => {
        this.setState({
          captionOpacity: 1
        })
      }, 500);
    })

    console.log(this.state);
  }

  nextSlide() {

    let { current } = this.state;

    let yPositions = this.state.yPositions.slice();

    yPositions.unshift(yPositions.pop());

    this.setState({
      current: current < DataSlider.length - 1 ? current + 1 : current = 0,
      yPositions,
      direction: 'down'
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
      }, 500);
    })

    console.log(this.refSlide);
    
  }

  setTransition = (index) => {
    let { yPositions } = this.state;
    const pos = yPositions[index];

    return {
      transform: `translateY(${pos}%)`,
      WebkitTransition: 'all 500ms ease-in-out',
      MozTransition: 'all 500ms ease-in-out',
      msTransition: 'all 500ms ease-in-out',
      OTransition: 'all 500ms ease-in-out'
    }
  }


  render() {
    let { 
      captionOpacity,
      current
    } = this.state;


    return (
      <div className="app-container">
        <div className="slider-container">
          <div className="slider">
          {
            DataSlider.map((item, index) => {
              let style = this.setTransition(index);
              return (
                <div key={item.id} className="slider__item" >
                  <img src={item.srcImage} style={style} alt={item.altImage} />
                </div>
              )
            })
          }
          </div>

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
    );
  }
}

export default App;
