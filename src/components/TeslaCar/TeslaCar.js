import React from 'react';
import './TeslaCar.css';
import PropTypes from 'prop-types';

const TeslaCar = (props) => {
    return (
        <div className='tesla-car'>
            <div className='tesla-wheels'>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

TeslaCar.propTypes = {
    wheelsize: PropTypes.number
}

export default TeslaCar;