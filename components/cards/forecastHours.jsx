import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const ForecastHours = ({ forecastWeather }) => {
  const forecast = forecastWeather?.forecast?.forecastday;
  const currentHour = new Date().getHours();
  let hoursToShow = [];

  if (forecast && forecast.length > 0) {
    const hourData = forecast[0].hour;

    for (let i = 1; i < 8; i++) {
      hoursToShow.push(hourData[(currentHour + i) % 24]);
    }
  }

  return (
    <Card className="!flex items-center justify-center pt-4">
      <CardContent>
        <div className="flex items-center justify-between gap-x-6 py-2">
          {hoursToShow.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-center gap-y-8 gap-x-4 "
            >
              <p>{item.time.split(" ")[1].slice(0, 2)}</p>

              <Image
                src={`https:${item.condition.icon}`}
                alt={item.condition.text}
                width={50}
                height={50}
              />
              <p className="text-lg font-medium">{Math.floor(item.temp_c)}°</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ForecastHours;
