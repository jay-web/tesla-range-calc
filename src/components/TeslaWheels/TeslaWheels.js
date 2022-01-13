import React from "react";
import PropTypes from "prop-types";
import "./TeslaWheels.css";

const LabelLists = (props) => {
    const {value, handleWheelChange } = props.wheels;
    const sizes = [19, 21];

    const LabelItems = sizes.map(size => {
      return  <label key={size} className={`tesla-wheels__item tesla-wheels__item--${size} ${value === size ? 'tesla-wheels__item--active' : '' }`}>
            <input
                type="radio"
                name="wheelSize"
                value={size}
                checked={value == size}
                onChange={() => handleWheelChange(size)}
                />
                <p>
                    {size}
                </p>
        </label>
    })

    return (
        <div>
            {LabelItems}
        </div>
    )
}

const TeslaWheels = (props) => {
    return (
        <div className="tesla-wheels__component">
            <p className="tesla-wheels__title">Wheels</p>
            <div className="tesla-wheels__container cf">
                <LabelLists wheels={props}/>
            </div>
        </div>
    )
}

TeslaWheels.propTypes = {
    value: PropTypes.number,
    handleWheelChange: PropTypes.func
}

export default TeslaWheels;