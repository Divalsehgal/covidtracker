import axios from "axios";
const url = `https://covid19.mathdro.id/api`;
export const fetchData = async (country) => {
  let changeableURL = url;
  if (country) {
    changeableURL = `${url}/countries/${country}`;
  }

  return await axios.get(changeableURL).then((response) => {
    const modifiedResponse = {
      confirmed: response.data.confirmed,
      recovered: response.data.recovered,
      deaths: response.data.deaths,
      lastUpdate: response.data.lastUpdate,
    };
    return modifiedResponse;
  });
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(`${url}/daily`);
  const modifiedResponse = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return modifiedResponse;
};

export const fetchCountries = async () => {
  const {
    data: { countries },
  } = await axios.get(`${url}/countries`);
  console.log(countries);
  return countries.map((country) => country.name);
};
