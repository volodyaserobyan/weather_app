import { weatherSlice } from "./weather-slice";

export const reducer = {
  weatherInfo: weatherSlice.reducer,
};

export {
  getWeatherInfo
} from "./weather-slice";