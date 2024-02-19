export const GetCurrentWeather = async (search) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_WEATHER_APP}&q=${search || "cide"}`
  );
  const data = await response.json();
  return data;
};
