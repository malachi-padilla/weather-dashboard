import React from 'react';
import './WeatherDetails.css';

const WeatherDetails = ({ currentWeather, setForeCastModalOpen }) => {
  console.log(currentWeather);
  return (
    <div className='detailsContainer'>
      <div className='detailsBox'>
        <div className='detailBar'>
          <i class='fas fa-temperature-high'></i>
          <h4 className='condition'>Hi</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.main.temp_max)
              : '80'}
            &#176;
          </h4>
        </div>

        <div className='detailBar'>
          <i class='fas fa-temperature-low'></i>
          <h4 className='condition'>Low</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.main.temp_min)
              : '52'}
            &#176;
          </h4>
        </div>
        <div className='detailBar'>
          <i class='fas fa-temperature-high'></i>
          <h4 className='condition'>Feels Like</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.main.feels_like)
              : '80'}
            &#176;
          </h4>
        </div>
        <div className='detailBar'>
          <i class='fas fa-wind'></i>
          <h4 className='condition'>Wind</h4>
          <h4 className='value'>
            {currentWeather ? currentWeather.wind.speed + ' mph' : '10 mph'}
          </h4>
        </div>
        <div className='detailBar'>
          <i class='fas fa-water'></i>
          <h4 className='condition'>Humidity</h4>
          <h4 className='value'>
            {currentWeather ? currentWeather.main.humidity + '%' : '10 %'}
          </h4>
        </div>
        <div className='detailBar'>
          <i class='fas fa-eye'></i>
          <h4 className='condition'>Visibility</h4>
          <h4 className='value'>
            {currentWeather
              ? Number.parseInt(currentWeather.visibility / 1000) + ' mi'
              : '10 mi'}
          </h4>
        </div>
      </div>
      <button
        className='forecastBtn'
        onClick={() => setForeCastModalOpen((current) => !current)}>
        Future forecast
      </button>
    </div>
  );
};

export default WeatherDetails;
