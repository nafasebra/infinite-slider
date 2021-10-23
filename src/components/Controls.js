import React, { PureComponent } from 'react';

// import style of controls
import './controls.css';


class Controls extends PureComponent {
    render() {
        let {
            prevClick,
            nextClick
        } = this.props;

        return (
            <div className="controls">
                <button 
                    onClick={prevClick}
                    className="prev__button"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
                </button>
                <button 
                    onClick={nextClick}
                    className="next__button"
                >  
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </button>
            </div>
        );
    }
}

export default Controls;