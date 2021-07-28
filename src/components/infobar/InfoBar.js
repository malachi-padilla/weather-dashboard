import React from 'react';
import './InfoBar.css';
import Search from './Search';
import WeatherDetails from './WeatherDetails';

const InfoBar = ({
  setLocation,
  currentWeather,
  location,
  setForeCastModalOpen,
}) => {
  return (
    <div className='info-bar-container'>
      <Search setLocation={setLocation} location={location} />
      <span className='divider'></span>
      <WeatherDetails
        currentWeather={currentWeather}
        setForeCastModalOpen={setForeCastModalOpen}
      />
      <span className='divider'></span>
    </div>
  );
};

export default InfoBar;
