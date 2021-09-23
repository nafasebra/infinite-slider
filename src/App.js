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
      topPosSlide: 0,
      index: 0,
      captionOpacity: 1,
      slides: []
    }
  }

  componentDidMount() {

    this.setState({
      slides: [
                DataSlider[DataSlider.length - 1],
                ...DataSlider,
                DataSlider[0]
              ]
    })

    console.log(this.state.slides);
  }

  prevSlide() { 

    let [index, slides] = this.state;

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

    // set dynamic change top position variable and caption index
    //let positionLastItem = (DataSlider.length - 1) * 100;
    // change top position slider when clicked on up button
    if(index <= 0) {
      this.setState({
        ...this.state,
        topPosSlide: this.state.topPosSlide + 100,
        index: 2
      })
      // DataSlider.pop();
    } else {
      this.setState({
        ...this.state,
        topPosSlide: this.state.topPosSlide + 100,
        index: this.state.index - 1
      })
    }

    
  }

  nextSlide() {

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

    // set dynamic change top position variable
    // let positionLastItem = (DataSlider.length - 1) * 100;
    // change top position slider when clicked on down button
    if(this.state.index === 2) {
      this.setState({
        ...this.state,
        topPosSlide: this.state.topPosSlide - 100,
        index: 0
      })
      // DataSlider.shift();
    } else {
      this.setState({
        ...this.state,
        topPosSlide: this.state.topPosSlide - 100,
        index: this.state.index + 1
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
              <div 
                style={{
                  opacity: this.state.captionOpacity,
                  transition: 'all 0.5s'
                }}
              >
                <h2 className="caption__title">
                  {/* {DataSlider[this.state.index].captionTitle} */}
                </h2>
                <p className="caption__desc">
                  {/* {DataSlider[this.state.index].captionDesc} */}
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
