import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

// import style of slide items
import './slides.css';


class Slides extends PureComponent {
    render() {
        let {
            slideItem,
            itemStyle
        } = this.props;

        return (
            <div key={slideItem.id} className="slider__item" >
                <img 
                    src={slideItem.srcImage} 
                    style={itemStyle}
                    alt={slideItem.altImage} 
                />
            </div>
        );
    }
}

Slides.propTypes = {
    slideItem: PropTypes.object,
    itemStyle: PropTypes.object
};

export default Slides;