import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import SunsetandMoon from "@/components/cards/sunsetAndMoonCard";
import SunsetCard from "@/components/cards/sunsetAndMoonCard";
import { Progress } from "@/components/ui/progress";
import {
  GetCurrentWeather,
  GetForecastWeather,
} from "@/helper/actions/getWeatherData";

export default async function Home() {
  const currentWeather = await GetCurrentWeather();
  const { location, current } = currentWeather;

  const forecastWeather = await GetForecastWeather();

  return (
    <div className="flex-1 flex gap-4 flex-wrap">
      <CurrentWeatherCard current={current} location={location} />
      <AirQualityCard current={current} />
      <SunsetandMoon forecastWeather={forecastWeather} />
    </div>
  );
}
