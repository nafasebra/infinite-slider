import React, { Component } from 'react';
//import PropTypes from 'prop-types';

// import data of slider
import { DataSlider } from '../Data/DataSlider';

// import style of pagination
import './pagination.css';

class Pagination extends Component {
    render() {
        let { currentSlider } = this.props;

        return (
            <div className="slider-pagination">
                <ul className="pagination-item">
                    {
                        DataSlider.map((item, index) => {
                            return (
                                <li key={item.id} className={`${currentSlider === index ? "active" : ""}`}> </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

// Pagination.propTypes = {

// };

export default Pagination;