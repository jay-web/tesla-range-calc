import {counterDefaultVal} from "./constants/defaultValues";

export const speedUp = (value) => {
    return {
        type: "SPEED_UP",
        value,
        step: counterDefaultVal.speed.step,
        max: counterDefaultVal.speed.max
    }
}

export const speedDown = (value) => {
    return {
        type: "SPEED_DOWN",
        value,
        step: counterDefaultVal.speed.step,
        min: counterDefaultVal.speed.min
    }
}

export const temperatureUp = (value) => {
    return {
        type: "TEMPERATURE_UP",
        value,
        step: counterDefaultVal.temperature.step,
        max: counterDefaultVal.temperature.max
    }
}

export const temperatureDown = (value) => {
    return {
        type: "TEMPERATURE_DOWN",
        value,
        step: counterDefaultVal.temperature.step,
        min: counterDefaultVal.temperature.min
    }
}

export const changeClimate = () => {
    return {
        type: "CHANGE_CLIMATE",
    }
}

export const changeWheel = (value) => {
    return {
        type: "CHANGE_WHEEL",
        value
    }
}

export const updateStats = () => {
    return {
        type: "UPDATE_STATS"
    }
}