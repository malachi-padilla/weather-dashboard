import React from 'react';
import './Infobar.css';
import Search from './Search';
import WeatherDetails from './WeatherDetails';

const InfoBar = ({ setLocation, currentWeather }) => {
  return (
    <div className='InfoBarContainer'>
      <Search setLocation={setLocation} />
      <span className='divider'></span>
      <WeatherDetails currentWeather={currentWeather} />
      <span className='divider'></span>
    </div>
  );
};

export default InfoBar;
