import React, { PureComponent } from 'react';

// include data of slider
import { DataSlider } from './Data/DataSlider';

// import style
import './App.css';

// import components
import Controls from './components/Controls';
import Caption from './components/Caption';


class App extends PureComponent {

  constructor() {
    super();

    this.state = {
      current: 0,
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
    let { current } = this.state;

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

          <Caption
            title={DataSlider[current].captionTitle}
            text={DataSlider[current].captionDesc}
          />

          <Controls 
            prevClick={() => this.prevSlide()}
            nextClick={() => this.nextSlide()}
          />

          <div className="slider-pagination"></div>
        </div>
      </div>
    );
  }
}

export default App;
