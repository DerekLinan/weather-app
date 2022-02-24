const config = require('../config.js');
import axios from 'axios';

const root = 'https://api.weatherapi.com/v1/';

export const getCurrentWeather = (searchLocation) => {
    return axios.get(`${root}current.json?key=${config.weatherAPIKey}&q=${searchLocation}&aqi=yes`);
}

export const getForecast = (searchLocation) => {
    return axios.get(`${root}forecast.json?key=${config.weatherAPIKey}&q=${searchLocation}&days=7&aqi=no&alerts=yes`)
}

export const getAutocomplete = (searchLocation) => {
    return axios.get(`${root}search.json?key=${config.weatherAPIKey}&q=${searchLocation}`)
}

export const getAstronomy = (searchLocation) => {
    const date = new Date();
    const currentDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`
    return axios.get(`${root}astronomy.json?key=${config.weatherAPIKey}&q=${searchLocation}&dt=${currentDate}`)
}