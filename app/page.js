import AirQualityCard from "@/components/cards/airQualityCard";
import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import { Progress } from "@/components/ui/progress";
import { GetCurrentWeather } from "@/helper/actions/getWeatherData";

export default async function Home() {
  const currentWeather = await GetCurrentWeather();
  const { location, current } = currentWeather;

  console.log("currentWeather", currentWeather);

  return (
    <div className="flex gap-4">
      <CurrentWeatherCard current={current} location={location} />
      <AirQualityCard current={current} />
    </div>
  );
}
