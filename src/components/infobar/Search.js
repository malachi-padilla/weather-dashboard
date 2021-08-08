import React, { useState } from 'react';
import './Search.css';
import PlacesAutocomplete from 'react-places-autocomplete';

const Search = ({ setLocation, location }) => {
  const [textIput, setTextinput] = useState('');

  const handleSelect = (value) => {
    setTextinput(value);
    setLocation(value);
  };

  const searchOptions = {
    types: ['(cities)'],
  };

  const renderFunc = ({
    getInputProps,
    getSuggestionItemProps,
    suggestions,
    loading,
  }) => (
    <div className='inputContainer'>
      <div className='inputWrapper'>
        <i class='fas fa-search'></i>
        <input
          {...getInputProps({
            placeholder: 'Search',
            className: 'searchInput',
          })}
        />
      </div>

      <div className='suggestionsContainer'>
        {loading && '...Loading'}
        {suggestions.map((suggestion) => {
          return (
            <span className='suggestion' key={suggestion.placeId}>
              {suggestion.description}
            </span>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className='searchContainer'>
      <div className='searchBar'>
        <PlacesAutocomplete
          value={textIput}
          onChange={setTextinput}
          onSelect={handleSelect}
          searchOptions={searchOptions}>
          {renderFunc}
        </PlacesAutocomplete>
        <div className='buttonContainer'></div>
      </div>
    </div>
  );
};

export default Search;
