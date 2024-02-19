import CurrentWeatherCard from "@/components/cards/currentWeatherCard";
import { GetCurrentWeather } from "@/helper/actions/getWeatherData";

export default async function Home() {
  const currentWeather = await GetCurrentWeather();
  const { location, current } = currentWeather;

  return (
    <div className="">
      <CurrentWeatherCard current={current} location={location} />
    </div>
  );
}
