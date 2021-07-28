import React, { useState } from 'react';
import './ForecastModal.css';

const ForecastModal = ({ setForeCastModalOpen, location }) => {
  return (
    <div className='forecastModalContainer'>
      <button className='exitBtn' onClick={() => setForeCastModalOpen(false)}>
        <i class='fas fa-arrow-left'></i>
      </button>
      <h1 className='forecastTitle'>{location}</h1>
      <div className='forecastContainer'>
        <div className='forecastCard'></div>
        <div className='forecastCard'></div>
        <div className='forecastCard'></div>
        <div className='forecastCard'></div>
        <div className='forecastCard'></div>
      </div>
    </div>
  );
};

export default ForecastModal;
