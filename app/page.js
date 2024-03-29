import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import ForecastDays from "@/components/cards/forecastDays";
import ForecastHours from "@/components/cards/forecastHours";
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
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 ">
      <div className="flex w-full flex-col  gap-y-4 ">
        <CurrentWeatherCard current={current} location={location} />
        <ForecastDays forecastWeather={forecastWeather} />
      </div>
      <div className="w-full flex flex-col gap-y-4 ">
        <AirQualityCard current={current} />
        <ForecastHours forecastWeather={forecastWeather} />
      </div>

      <div className="w-full">
        <SunsetandMoon forecastWeather={forecastWeather} />
      </div>
    </div>
  );
}
