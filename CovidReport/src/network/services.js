import axios from 'axios';

import {URL} from '../assets/common/config';

export const fetchData = async () => {
  let apiData;

  try {
    const data = await axios.get(URL);
    apiData = data;
  } catch (error) {
    console.error(error);
  }
  return apiData;
};
