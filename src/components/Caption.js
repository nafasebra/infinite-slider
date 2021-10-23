import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import style of caption
import './caption.css';

class Caption extends Component {
    render() {
        let { title, text } = this.props;

        return (
            <div className="caption"> 
            <div>
              <h2 className="caption__title">
                {title}
              </h2>
              <p className="caption__desc">
                {text}
              </p>
            </div>
          </div>
        );
    }
}

Caption.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string
}

export default Caption;