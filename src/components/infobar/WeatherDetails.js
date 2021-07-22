import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ currentWeather }) => {
  return (
    <div className='detailsContainer'>
      <h4 className='title'>Weather Details</h4>
      <div className='detailsBox'>
        <div className='detailBar'>
          <h4 className='condition'>Hi</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.main.temp_max)
              : '80'}
            &#176;
          </h4>
        </div>
        <div className='detailBar'>
          <h4 className='condition'>Low</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.main.temp_min)
              : '52'}
            &#176;
          </h4>
        </div>
        <div className='detailBar'>
          <h4 className='condition'>Humidity</h4>
          <h4 className='value'></h4>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
