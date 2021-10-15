import React from 'react';
import './Infobar.css';
import Search from './Search';
import WeatherDetails from './WeatherDetails';

const InfoBar = ({ setLocation, currentWeather, location, setForeCastModalOpen }) => {
	return (
		<div className='info-bar-container'>
			<Search setLocation={setLocation} location={location} />

			<WeatherDetails currentWeather={currentWeather} setForeCastModalOpen={setForeCastModalOpen} />
		</div>
	);
};

export default InfoBar;
