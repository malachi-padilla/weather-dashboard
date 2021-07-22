import axios from 'axios';

export async function getCurrentWeather(location) {
  let options = {
    method: 'GET',
    url: 'https://community-open-weather-map.p.rapidapi.com/weather',
    params: {
      q: location,
      units: 'imperial',
    },
    headers: {
      'x-rapidapi-key': '6b40cdb10amshb4063933287bfbbp18a32cjsn8eb53791c1c3',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
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
      'x-rapidapi-key': '6b40cdb10amshb4063933287bfbbp18a32cjsn8eb53791c1c3',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
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
      'x-rapidapi-key': '6b40cdb10amshb4063933287bfbbp18a32cjsn8eb53791c1c3',
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    },
  };
  return new Promise(async (resolve, reject) => {
    axios.request(options).then((response) => resolve(response));
  });
}
