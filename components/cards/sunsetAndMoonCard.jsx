import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { SunsetIcon } from "lucide-react";
import { MoonIcon } from "@radix-ui/react-icons";
import { MoonStar } from "lucide-react";
import { Sunrise } from "lucide-react";

const SunsetandMoon = ({ forecastWeather }) => {
  const forecast = forecastWeather?.forecast?.forecastday[0]?.astro;

  return (
    <div className="grid grid-cols-2 gap-4 ">
      <Card className="w-full h-max flex flex-col gap-y-2">
        <CardHeader>
          <div className="!flex items-end justify-start  gap-x-2">
            <SunsetIcon className="w-6 h-6" />
            <h3 className="text-base font-medium">Sunset</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center font-bold">{forecast?.sunset}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-end gap-x-2">
            <Sunrise className="w-4 h-4" />
            <h3 className="text-xs font-medium ">Sunrise: </h3>
            <p className="text-xs text-center font-bold">{forecast?.sunrise}</p>
          </div>
        </CardFooter>
      </Card>
      <Card className="w-full h-max flex flex-col gap-y-2">
        <CardHeader>
          <div className="!flex items-end justify-start  gap-x-2">
            <MoonIcon className="w-6 h-6" />
            <h3 className="text-base font-medium">Moonrise</h3>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-xl text-center font-bold">{forecast?.moonrise}</p>
        </CardContent>
        <CardFooter>
          <div className="flex items-end gap-x-1">
            <MoonStar className="w-4 h-4" />
            <h3 className="text-xs font-medium ">Moonset:</h3>
            <p className="text-xs text-center font-bold">{forecast?.moonset}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SunsetandMoon;
