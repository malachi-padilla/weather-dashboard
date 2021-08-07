import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ currentWeather, setForeCastModalOpen }) => {
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
          <h4 className='condition'>Wind</h4>
          <h4 className='value'>
            {currentWeather ? currentWeather.wind.speed + ' mph' : '10 mph'}
          </h4>
        </div>
        <div className='detailBar'>
          <h4 className='condition'>Humidity</h4>
          <h4 className='value'>
            {currentWeather ? currentWeather.main.humidity + '%' : '10 %'}
          </h4>
        </div>
        <h4
          style={{
            cursor: 'pointer',
            textDecoration: 'underline',
            color: '#a3cef1',
          }}
          onClick={() => setForeCastModalOpen((current) => !current)}>
          Future forecast
        </h4>
      </div>
    </div>
  );
};

export default WeatherDetails;
