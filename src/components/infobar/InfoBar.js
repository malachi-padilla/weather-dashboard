import React from 'react';
import './Infobar.css';
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
      <div className='dividerContainer'>
        <h3 className='title'>Weather details</h3>
        <span className='divider'> </span>
      </div>
      <WeatherDetails
        currentWeather={currentWeather}
        setForeCastModalOpen={setForeCastModalOpen}
      />
    </div>
  );
};

export default InfoBar;
