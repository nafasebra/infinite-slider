import React, { Component } from 'react';

// import style
import './Slider.css';


class Slider extends Component {
    render() {
        return (
            <div className="slider-container">
                <div className="slider">
                    <div className="slider-item"></div>
                    <div className="slider-item"></div>
                    <div className="slider-item"></div>

                    <div className="controls">
                        <button className="prev-button"></button>
                        <button className="next-button"></button>
                    </div>

                    <div className="slider-pagination"></div>
                </div>
            </div>
        );
    }
}

export default Slider;
