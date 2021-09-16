import React, { Component } from 'react';
// import Slider from './Components/Slider';

// import style
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      topSlide: 0
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  prevSlide() { 
    if(this.state.topSlide === 0) {
      this.setState({
        topSlide: -200
      })
    } else {
      this.setState({
        topSlide: this.state.topSlide + 100
      })
    }
  }

  nextSlide() {
    if(this.state.topSlide === -200) {
      this.setState({
        topSlide: 0
      })
    } else {
      this.setState({
        topSlide: this.state.topSlide - 100
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
            top: this.state.topSlide + '%'
          }}
        >
          <div className="slider">
            {/* <div className="slider__item">
              <img 
                  src="https://img3.akspic.ru/originals/8/0/5/5/45508-nauka-nebo-ozero_pejto-pustynya-ekosistema-2048x1152.jpg" 
                  alt="item-2" 
              />
            </div> */}

            <div className="caption"> 
              <h2 className="caption__title">Hello nature 1</h2>
              <p className="caption__desc"></p>
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
