import React, { useEffect, useState } from 'react';
import './App.css';
import publicIp from 'public-ip';
import { getCurrentWeather, getFiveDayForecast } from './api/weatherData';
import { getCityAndRegion } from './api/ipAddressData';
import InfoBar from './components/infobar/InfoBar';
import Dashboard from './components/dashboard/Dashboard';

const App = () => {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [location, setLocation] = useState('');
  useEffect(() => {
    const getAllData = async () => {
      let ip = await publicIp.v4();
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

  return (
    <div className='mainContainer'>
      <Dashboard currentWeather={currentWeather} />
      <InfoBar setLocation={setLocation} currentWeather={currentWeather} />
    </div>
  );
};

export default App;
