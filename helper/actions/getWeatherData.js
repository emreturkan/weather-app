export const GetCurrentWeather = async (search) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_APP}&q=${search || "istanbul"}`
  );
  const data = await response.json();
  return data;
};

export const GetForecastWeather = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_FORECAST_API}`
  );
  const data = await response.json();
  return data;
};
