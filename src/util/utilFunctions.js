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
