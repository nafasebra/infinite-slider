import React, { Component } from 'react';
// import Slider from './Components/Slider';

// include data of slider
import { DataSlider } from './Data/DataSlider';

// import style
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      topPosSlide: 0
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  prevSlide() { 
    if(this.state.topPosSlide === 0) {
      this.setState({
        topPosSlide: -200
      })
    } else {
      this.setState({
        topPosSlide: this.state.topPosSlide + 100
      })
    }
  }

  nextSlide() {
    if(this.state.topPosSlide === -200) {
      this.setState({
        topPosSlide: 0
      })
    } else {
      this.setState({
        topPosSlide: this.state.topPosSlide - 100
      })
    }
  }


  render() {
    return (
      <div className="app-container">
        <div 
          className="slider-container"
          style={{
            position: 'absolute',
            top: this.state.topPosSlide + '%'
          }}
        >
          <div className="slider">
            {
              DataSlider.map( item => <div key={item.id} className="slider__item" >
                                        <img src={item.srcImage} alt={item.altImage} />
                                      </div>)
            }

            <div className="caption"> 
              <h2 className="caption__title">Hello nature 1</h2>
              <p className="caption__desc">this is capture for project slider, this project created by react.js library. react.js is library for create UserInterface and SPA Websites</p>
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
