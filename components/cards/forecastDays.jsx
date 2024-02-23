import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import { CalendarDays } from "lucide-react";

const ForecastDays = ({ forecastWeather }) => {
  const forecast = forecastWeather?.forecast?.forecastday;

  const getDayOfWeek = (date) => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dateObj = new Date(date);
    const dayOfWeek = daysOfWeek[dateObj.getDay()];
    return dayOfWeek;
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center  gap-x-2">
          <CalendarDays className="w-4 h-4" />
          <h3>10-Day Forecast</h3>
        </div>
      </CardHeader>
      {forecast.slice(1, 11).map((item, index) => (
        <CardContent key={index}>
          <div className="flex items-center">
            <p> {getDayOfWeek(item?.date)}</p>
            {item?.day?.condition?.icon && (
              <Image
                src={`https:${item?.day?.condition?.icon}`}
                alt={item?.day?.condition?.text}
                width={30}
                height={30}
                priority
              />
            )}
            <div>
              <p>{`${item.day.mintemp_c}°/ ${item.day.maxtemp_c}°`}</p>
            </div>
          </div>
        </CardContent>
      ))}
    </Card>
  );
};

export default ForecastDays;
