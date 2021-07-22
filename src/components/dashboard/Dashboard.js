import React from 'react';
import { getDate } from '../../util/utilFunctions';
import './Dashboard.css';

const Dashboard = ({ currentWeather, loading }) => {
  console.log(currentWeather);
  const weatherIcon = currentWeather ? currentWeather.weather[0].icon : null;
  console.log(weatherIcon);

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
            <i class='fas fa-sun'></i>
            <span className='subInfo'>Sunny</span>
          </div>
        </div>
      ) : (
        <div className='infoBox'>
          <div className='info1'>
            {Number.parseInt(currentWeather.mains.temp)}
            &#176;
          </div>
          <div className='info2'>
            <span>{currentWeather.name}</span>
            <span className='subInfo'>{getDate()}</span>
          </div>
          <div className='info3'>
            <image
              className='weatherIcon'
              src={`http://openweathermap.org/img/w/${weatherIcon}.png`}></image>
            <span className='subInfo'>{currentWeather.weather[0].main}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
