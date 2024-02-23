import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import ForecastDays from "@/components/cards/forecastDays";
import SunsetandMoon from "@/components/cards/sunsetAndMoonCard";

import {
  GetCurrentWeather,
  GetForecastWeather,
} from "@/helper/actions/getWeatherData";

export default async function Home() {
  const currentWeather = await GetCurrentWeather();
  const { location, current } = currentWeather;

  const forecastWeather = await GetForecastWeather();

  return (
    <div className="flex-1 flex gap-4 flex-col sm:flex-row  ">
      <div className="flex flex-col flex-1 gap-y-4 ">
        <CurrentWeatherCard current={current} location={location} />
        <ForecastDays forecastWeather={forecastWeather} />
      </div>
      <AirQualityCard current={current} />
      <SunsetandMoon forecastWeather={forecastWeather} />
    </div>
  );
}
