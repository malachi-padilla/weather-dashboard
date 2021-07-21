import React, { useEffect, useState } from 'react';
import publicIp from 'public-ip';
import { getCurrentWeather, getFiveDayForecast } from './api/weatherData';
import { getCityAndRegion } from './api/ipAddressData';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');
  useEffect(() => {
    const getAllData = async () => {
      let ip = await publicIp.v4();
      const cityAndRegion = await getCityAndRegion(ip);
      const { city } = cityAndRegion;
      setLocation(city);
      const currentWeather = await getCurrentWeather(city);
      setCurrentWeather(currentWeather.data);
      const weatherData = await getFiveDayForecast(city);
      setWeatherData(weatherData.data);
    };
    getAllData();
  }, []);
  return <div></div>;
};

export default App;
