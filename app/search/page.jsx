import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import ForecastDays from "@/components/cards/forecastDays";
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
    <div className="flex-1 flex gap-4 flex-col sm:flex-row flex-wrap">
      <div>
        <CurrentWeatherCard current={current} location={location} />
        <div>
          <ForecastDays forecastWeather={forecastWeather} />
        </div>
      </div>
      <AirQualityCard current={current} />
      <SunsetandMoon forecastWeather={forecastWeather} />
    </div>
  );
}
