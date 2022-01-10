import React, {useState, useEffect } from "react";
import {getModelData} from "../../services/BatteryService";
import "./TeslaBattery.css";
import TeslaCar from "../TeslaCar/TeslaCar";
import TeslaStats from "../TeslaStats/TeslaStats";
import TeslaNotice from "../TeslaNotice/TeslaNotice";


const TeslaBattery = () => {
    const [config, setConfig] = useState({speed:55, temperature: 20, climate: true,  wheels: 19});
    const [carstats, setCarstats ] = useState([]);
    const [carModels, setCarModels ] = useState(['60', '60D', '75', '75D', '90D', 'P100D']);

    const calculateStats = (models, value) => {
        const dataModels = getModelData();
        
        return models.map((model) => {
            const {speed, temperature, climate, wheels } =  value;
            const miles = dataModels[model][wheels][climate ? 'on' : 'off'].speed[speed][temperature];

            return {
                model, 
                miles
            };
        });
    }

    useEffect(() => {
        setCarstats(calculateStats(carModels, config));
    }, [carModels, config])



    return (
        <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <TeslaCar wheelsize={config.wheels}/> 
            <TeslaStats carstats={carstats}/>
            <TeslaNotice />
        </form>
    )
}

export default TeslaBattery;