import React from "react";
import "./TeslaBattery.css";
import TeslaCar from "../TeslaCar/TeslaCar";
import TeslaNotice from "../TeslaNotice/TeslaNotice";


const TeslaBattery = () => {
    return (
        <form className="tesla-battery">
            <h1>Range Per Charge</h1>
            <TeslaCar />
            <TeslaNotice />
        </form>
    )
}

export default TeslaBattery;