import { FETCH_WEATHER, ROOT_URL } from '../constants/action_types';

export function fetchWeather(city) {
  const url = `${ROOT_URL}${city},us`;
  const request = fetch(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
