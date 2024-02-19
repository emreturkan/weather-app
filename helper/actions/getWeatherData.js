export const GetCurrentWeather = async (search) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_APP}&q=${search || "istanbul"}`
  );
  const data = await response.json();
  return data;
};

export const GetForecastWeather = async (search) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_FORECAST_API}&q=${search || "istanbul"}`
  );
  const data = await response.json();
  return data;
};

export const GetSearchWeather = async (search) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_SEARCH_API}&q=${search}`
  );
  const data = await response.json();
  return data;
};
