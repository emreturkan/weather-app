export const GetCurrentWeather = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_WEATHER_APP);
  const data = await response.json();
  return data;
};
