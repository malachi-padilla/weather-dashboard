import React, { useEffect, useState } from 'react';
import './App.css';
import publicIp from 'public-ip';
import { getCurrentWeather, getFiveDayForecast } from './api/weatherData';
import { getCityAndRegion } from './api/ipAddressData';
import InfoBar from './components/infobar/InfoBar';
import Dashboard from './components/dashboard/Dashboard';
import day from './assets/day.jpg';
import night from './assets/night.jpg';
import { getImage } from './api/imageData';

const currentTime = new Date().getHours();
const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState('');
  const [isDay, setIsDay] = useState(null);
  const [url, setUrl] = useState('');
  useEffect(() => {
    const getAllData = async () => {
      let ip = await publicIp.v4();
      setIsDay(currentTime >= 6 && currentTime <= 17);
      const cityAndRegion = await getCityAndRegion(ip);
      const { city } = cityAndRegion;
      setLocation(city);
      const currentWeather = await getCurrentWeather(city);
      setCurrentWeather(currentWeather.data);
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      const currentWeather = await getCurrentWeather(location);
      setCurrentWeather(currentWeather.data);
    };
    getAllData();
  }, [location]);

  useEffect(() => {
    if (currentWeather) {
      if (isDay) {
        getImage(currentWeather.weather[0].main + ',day').then((response) => {
          setUrl(response.full);
        });
      } else
        getImage(currentWeather.weather[0].main + ',night').then((response) => {
          setUrl(response.full);
        });
    }
  }, [currentWeather]);

  return (
    <div className='mainContainer'>
      <img className='backgroundImage' src={url} alt='background' />
      <Dashboard currentWeather={currentWeather} />
      <InfoBar
        setLocation={setLocation}
        currentWeather={currentWeather}
        location={location}
      />
    </div>
  );
};

export default App;
