import axios from 'axios';
import { FETCH_WEATHER, ROOT_URL } from '../constants/action_types';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${city},us`;
  const request = axios.get(url);
  console.log(request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
