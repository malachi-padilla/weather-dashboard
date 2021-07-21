import axios from 'axios';

export async function getCityAndRegion(ip) {
  return new Promise(async (resolve, reject) => {
    await axios.get(`https://ipapi.co/${ip}/json/`).then(async (response) => {
      const {
        data: { city },
        data: { region_code },
      } = response;

      const returnObject = {
        city,
        region_code,
      };

      resolve(returnObject);
    });
  });
}
