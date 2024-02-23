import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import ForecastDays from "@/components/cards/forecastDays";
import ForecastHours from "@/components/cards/forecastHours";
import SunsetandMoon from "@/components/cards/sunsetAndMoonCard";

import {
  GetCurrentWeather,
  GetForecastWeather,
} from "@/helper/actions/getWeatherData";

export default async function SearchPage({ searchParams }) {
  const search = searchParams?.q || "istanbul";
  const currentWeather = await GetCurrentWeather(search);
  const { location, current } = currentWeather;

  const forecastWeather = await GetForecastWeather(search);

  return (
    <div className="flex-1 flex gap-4 flex-col sm:flex-row ">
      <div className="flex w-full lg:w-9/12 flex-col  gap-y-4 ">
        <CurrentWeatherCard current={current} location={location} />
        <ForecastDays forecastWeather={forecastWeather} />
      </div>
      <div className="w-full flex flex-col gap-y-4 h-full">
        <AirQualityCard current={current} />
        <ForecastHours forecastWeather={forecastWeather} />
      </div>

      <div className="w-full">
        <SunsetandMoon forecastWeather={forecastWeather} />
      </div>
    </div>
  );
}
