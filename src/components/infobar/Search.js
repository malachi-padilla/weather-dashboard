import React, { useState } from 'react';
import './Search.css';

const Search = ({ setLocation }) => {
  const [textIput, setTextinput] = useState('');

  const handleSearch = () => {
    setLocation(textIput);
    setTextinput('');
  };

  return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <div className='inputContainer'>
          <input
            value={textIput}
            className='searchInput'
            placeholder='Another Location'
            type='text'
            onChange={(e) => setTextinput(e.target.value)}></input>
        </div>
        <div className='buttonContainer'>
          <button
            className='searchBtn'
            onClick={handleSearch}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSearch() : null)}>
            <i class='fas fa-search'></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Search;
