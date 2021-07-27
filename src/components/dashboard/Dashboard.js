import React from 'react';
import { getDate } from '../../util/utilFunctions';
import './Dashboard.css';

const Dashboard = ({ currentWeather, isDay }) => {
  const weatherIcon = currentWeather ? currentWeather.weather[0].icon : null;

  const condition = currentWeather && currentWeather.weather[0].main;

  return (
    <div className='dashboardContainer'>
      {!currentWeather ? (
        <div className='infoBox'>
          <div className='info1'>75 &#176;</div>
          <div className='info2'>
            <span>Los Angeles</span>
            <span className='subInfo'>{getDate()}</span>
          </div>
          <div className='info3'>
            <i class='far fa-moon' style={{ opacity: 1 }}></i>
            <span className='subInfo'>Clear</span>
          </div>
        </div>
      ) : (
        <div className='infoBox'>
          <div className='info1'>
            {Number.parseInt(currentWeather.main.temp)}
            &#176;
          </div>
          <div className='info2'>
            <span>{currentWeather.name}</span>
            <span className='subInfo'>{getDate()}</span>
          </div>
          <div className='info3'>
            {condition === 'Thunderstorm' ? (
              <i class='fas-fa-bolt' style={{ opacity: 1 }}></i>
            ) : condition === 'Drizzle' ? (
              <i class='fas fa-cloud-sun-rain' style={{ opacity: 1 }}></i>
            ) : condition === 'Rain' && isDay ? (
              <i class='fas fa-cloud-showers-heavy' style={{ opacity: 1 }}></i>
            ) : condition === 'Rain' && !isDay ? (
              <i class='fas fa-cloud-moon-rain' style={{ opacity: 1 }}></i>
            ) : condition === 'Snow' ? (
              <i class='fas fa-snowflake' style={{ opacity: 1 }}></i>
            ) : condition === 'Haze' ? (
              <i class='fas fa-smog' style={{ opacity: 1 }}></i>
            ) : condition === 'Fog' ? (
              <i class='fas fa-smog' style={{ opacity: 1 }}></i>
            ) : condition === 'Mist' ? (
              <i class='fas fa-smog' style={{ opacity: 1 }}></i>
            ) : condition === 'Dust' ? (
              <i class='fas fa-smog' style={{ opacity: 1 }}></i>
            ) : condition === 'Clouds' && isDay ? (
              <i class='fas fa-cloud' style={{ opacity: 1 }}></i>
            ) : condition === 'Clouds' && !isDay ? (
              <i class='fas fa-cloud-moon'></i>
            ) : condition === 'Clear' && isDay ? (
              <i class='far fa-sun' style={{ opacity: 1 }}></i>
            ) : condition === 'Clear' && !isDay ? (
              <i class='far fa-moon' style={{ opacity: 1 }}></i>
            ) : null}
            <span className='subInfo'>{condition}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
