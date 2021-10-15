import React, { useEffect, useState } from 'react';
import { getDayOfTheWeek, getIcon, getTimeFromUnix } from '../../util/utilFunctions';
import './ForecastModal.css';

const ForecastModal = ({ setForeCastModalOpen, location, fiveDayForecast }) => {
	const [futureForecast, setFutureForecast] = useState();
	useEffect(() => {
		if (fiveDayForecast) {
			setFutureForecast(fiveDayForecast.list.slice(1, -2));
		}
	}, [fiveDayForecast]);

	return (
		<div className='forecastModalContainer'>
			<div className='titleBar'>
				<button className='exitBtn' onClick={() => setForeCastModalOpen(false)}>
					<i class='fas fa-arrow-left'></i>
				</button>
				<h1 className='forecastTitle'>{location}</h1>
			</div>
			<div className='forecastContainer'>
				{futureForecast &&
					futureForecast.map((item, index) => (
						<div className='forecastCard' key={index}>
							<div className='forecast-heading'>
								<h1 className='cardTitle'>{getDayOfTheWeek(item.dt)}</h1>
							</div>
							<div className='conditionBar'>
								<h1 className='description'>{item.weather[0].main}</h1>
								<h1 className='icon'>{getIcon(item.weather[0].main)}</h1>
							</div>
							<div className='infoContainer'>
								<div className='infoBar'>
									<h2 className='condition'>Hi</h2>
									<h2 className='value'>{Number.parseInt(item.temp.max)} &#176;</h2>
								</div>
								<div className='infoBar'>
									<h2 className='condition'>Low</h2>
									<h2 className='value'>{Number.parseInt(item.temp.min)} &#176;</h2>
								</div>
								<div className='infoBar'>
									<h2 className='condition'>Humidity</h2>
									<h2 className='value'>{item.humidity}%</h2>
								</div>
								<div className='infoBar'>
									<h2 className='condition'>Sunrise</h2>
									<h2 className='value'>{getTimeFromUnix(item.sunrise)}</h2>
								</div>
								<div className='infoBar'>
									<h2 className='condition'>Sunset</h2>
									<h2 className='value'>{getTimeFromUnix(item.sunset)}</h2>
								</div>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default ForecastModal;
