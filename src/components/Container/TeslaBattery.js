import React, { useState, useEffect } from "react";
import { getModelData } from "../../services/BatteryService";
import "./TeslaBattery.css";
import TeslaCar from "../TeslaCar/TeslaCar";
import TeslaStats from "../TeslaStats/TeslaStats";
import TeslaClimate from "../TeslaClimate/Teslaclimate";
import TeslaWheels from "../TeslaWheels/TeslaWheels";
import TeslaNotice from "../TeslaNotice/TeslaNotice";
import TeslaCounter from "../TeslaCounter/TeslaCounter";

const TeslaBattery = (props) => {
  const [config, setConfig] = useState({
    speed: 55,
    temperature: 20,
    climate: true,
    wheels: 19,
  });
  const [carstats, setCarstats] = useState([]);
  const [carModels, setCarModels] = useState([
    "60",
    "60D",
    "75",
    "75D",
    "90D",
    "P100D",
  ]);

  const calculateStats = (models, value) => {
    const dataModels = getModelData();

    return models.map((model) => {
      const { speed, temperature, climate, wheels } = value;
      const miles =
        dataModels[model][wheels][climate ? "on" : "off"].speed[speed][
          temperature
        ];

      return {
        model,
        miles,
      };
    });
  };

 

  useEffect(() => {
    setCarstats(calculateStats(carModels, config));
  }, [carModels, config]);

  const updateCounterState = (title, value) => {
    const copyOfConfig = { ...config };

    title == "Speed"
      ? (copyOfConfig.speed = value)
      : (copyOfConfig.temperature = value);

    setConfig(copyOfConfig);
  };

  const increment = (e, title) => {
    e.preventDefault();
    let currentValue, maxValue, step;
    const { speed, temperature } = props.defaultValues;
    if (title == "Speed") {
      currentValue = config.speed;
      maxValue = speed.max;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      maxValue = temperature.max;
      step = temperature.step;
    }

    if (currentValue < maxValue) {
      const newValue = currentValue + step;
      updateCounterState(title, newValue);
    }
  };

  const decrement = (e, title) => {
    e.preventDefault();
    let currentValue, minValue, step;
    const { speed, temperature } = props.defaultValues;
    if (title == "Speed") {
      currentValue = config.speed;
      minValue = speed.min;
      step = speed.step;
    } else {
      currentValue = config.temperature;
      minValue = temperature.min;
      step = temperature.step;
    }

    if (currentValue > minValue) {
      const newValue = currentValue - step;
      updateCounterState(title, newValue);
    }
  }; 

  const handleClimateChange = () => {
      let copyOfConfig = {...config};
      copyOfConfig.climate = !config.climate;
      setConfig(copyOfConfig);
  }

  const handleWheelChange = (size) => {
    let copyOfConfig = {...config}
    copyOfConfig.wheels = size;
    setConfig(copyOfConfig);
  }

  return (
    <form className="tesla-battery">
      <h1>Range Per Charge</h1>
      <TeslaCar wheelsize={config.wheels} />
      <TeslaStats carstats={carstats} />
      <div className="tesla-controls cf">
        <TeslaCounter
          currentValue={config.speed}
          initValues={props.defaultValues.speed}
          increment={increment}
          decrement={decrement}
        />
        <div className="tesla-climate-container cf">
          <TeslaCounter
            currentValue={config.temperature}
            initValues={props.defaultValues.temperature}
            increment={increment}
            decrement={decrement}
          />
            <TeslaClimate 
            value={config.climate}
            limit={config.temperature > 10}
            handleClimateChange={handleClimateChange}
          />
         
        </div>
        <TeslaWheels 
            value={config.wheels}
            handleWheelChange={handleWheelChange}
            />
      
      </div>
      <TeslaNotice />
    </form>
  );
};

export default TeslaBattery;
