import { FETCH_WEATHER } from '../constants/action_types';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_WEATHER:
      return [...state, action.payload.data];
  }
  return state;
}
