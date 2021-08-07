export const getDate = () => {
  let dt = new Date();

  let options = {
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  return dt.toLocaleString('en-us', options);
};
export const getDayOfTheWeek = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  let day = date.getDay();
  const days = {
    0: 'sunday',
    1: 'monday',
    2: 'tuesday',
    3: 'wednesday',
    4: 'thursday',
    5: 'friday',
    6: 'saturday',
  };
  let dayOfTheWeek = days[day];
  return dayOfTheWeek;
};

export const getIcon = (condition) => {
  if (condition === 'Thunderstorm') {
    return <i class='fas-fa-bolt' style={{ color: '#cfdbd5' }}></i>;
  } else if (condition === 'Drizzle') {
    return <i class='fas fa-cloud-sun-rain' style={{ color: '#cfdbd5' }}></i>;
  } else if (condition === 'Rain') {
    return (
      <i class='fas fa-cloud-showers-heavy' style={{ color: '#cfdbd5' }}></i>
    );
  } else if (condition === 'Snow') {
    return <i class='fas fa-snowflake' style={{ color: '#cfdbd5' }}></i>;
  } else if (condition === 'Haze') {
    return <i class='fas fa-smog' style={{ color: '#cfdbd5' }}></i>;
  } else if (condition === 'Clouds') {
    return <i class='fas fa-cloud' style={{ color: '#cfdbd5' }}></i>;
  } else if (condition === 'Clear') {
    return <i class='far fa-sun' style={{ color: '#f5cb5c' }}></i>;
  } else {
    return null;
  }
};

export const getTimeFromUnix = (unix_timestamp) => {
  var date = new Date(unix_timestamp * 1000);
  const options = {
    hour: 'numeric',
    minute: 'numeric',
  };

  return date.toLocaleString('en-us', options);
};
