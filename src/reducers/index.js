import { combineReducers } from 'redux';
import WeatherReduser from './reduser_weather';

const rootReducer = combineReducers({
  state: (state = {}) => state
});

export default rootReducer;
