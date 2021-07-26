import axios from 'axios';

const API_KEY = '6b40cdb10amshb4063933287bfbbp18a32cjsn8eb53791c1c3';
const API_HOST = 'community-open-weather-map.p.rapidapi.com';

export async function getCurrentWeather(location) {
  let options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: location,
      units: 'imperial',
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  };
  return new Promise(async (resolve, reject) => {
    axios.request(options).then((response) => resolve(response));
  });
}

export async function getFiveDayForecast(location) {
  let options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/forecast',
    params: { q: location, units: 'imperial' },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  };
  return new Promise(async (resolve, reject) => {
    axios.request(options).then((response) => resolve(response));
  });
}

export async function searchByCity(city) {
  let options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/find',
    params: {
      q: city,
      mode: 'null',
      type: 'link, accurate',
      units: 'imperial',
    },
    headers: {
      'x-rapidapi-key': API_KEY,
      'x-rapidapi-host': API_HOST,
    },
  };
  return new Promise(async (resolve, reject) => {
    axios.request(options).then((response) => resolve(response));
  });
}
