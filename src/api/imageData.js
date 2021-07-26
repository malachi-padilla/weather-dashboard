import axios from 'axios';

export async function getImage(condition) {
  return new Promise(async (resolve, reject) => {
    const key = 'RQg2dmIOMQ_sSlIA4g9roBeP3OEWkjAHpmuR_NXfj90';
    await axios
      .get(
        `https://api.unsplash.com/search/photos?query=${condition}clouds?&client_id=${key}`
      )
      .then(async (response) => {
        resolve(response.data.results[0].urls);
      });
  });
}
