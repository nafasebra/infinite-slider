import React, { Component } from 'react';
// import Slider from './Components/Slider';

// import style
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="slider-container">
          <div className="slider">
            <div className="slider-item">
              <img 
                  src="https://www.wallpapers13.com/wp-content/uploads/2020/05/Yosemite-National-Park-Valley-in-California-USA-Mountains-Forests-Grass-Nature-Scenery-Wallpaper-Hd.jpg-915x515.jpg"
                  alt="item-1" 
              />
            </div>
            <div className="slider-item">
              <img 
                  src="https://img3.akspic.ru/originals/8/0/5/5/45508-nauka-nebo-ozero_pejto-pustynya-ekosistema-2048x1152.jpg" 
                  alt="item-2" 
              />
            </div>
            <div className="slider-item">
              <img 
                  src="https://img.wallpapersafari.com/tablet/2560/1700/91/23/L0t1MV.jpg" 
                  alt="item-3" 
              />
            </div>

            <div className="slider-text"> 
              <h2>Hello nature 1</h2>
              <p>this is capture for project slider, this project created by react.js library. react.js is library for create UserInterface and SPA Websites</p>
            </div>

            <div className="controls">
              <button className="prev-button">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
              </button>
              <button className="next-button">
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
