import axios from "axios";
const url = "https://covid19.mathdro.id/api";

const fetchData = async () => {
  try {
    const {
      data: { confirmed, deaths, recovered, lastUpdate },
    } = await axios.get(url);
   
    return { confirmed, deaths, recovered, lastUpdate };
  } catch (error) {}
};

export default fetchData;

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const modifyData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    console.log(modifyData);
    return modifyData;
  } catch (error) {}
};

export const fetchcountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((countries) => countries.name);
  } catch (error) {}
};
