import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";

import { LocateIcon } from "lucide-react";

import Image from "next/image";

import GetTime from "@/helper/getTime";
import { Droplets } from "lucide-react";
import { Wind } from "lucide-react";

const CurrentWeatherCard = async ({ current, location }) => {
  const day = new Date(current?.last_updated_epoch * 1000).toLocaleString(
    "default",
    { weekday: "long" }
  );
  return (
    <Card className="w-full xl:w-3/12  flex flex-col gap-y-8  ">
      <CardHeader>
        <div className="flex justify-between">
          <h3 className="text-xl font-medium">{day}</h3>
          <GetTime timezone={location?.localtime_epoch} />
        </div>
        <div className="flex items-start gap-x-2 ">
          <h3 className="text-xl">{location?.name}</h3>
          <LocateIcon className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-8xl text-center font-bold">{current?.temp_c}°</p>
      </CardContent>
      <CardFooter className="flex flex-col justify-start items-start">
        <div>
          {current?.condition.icon && (
            <Image
              src={`https:${current?.condition.icon}`}
              alt={current?.condition.text}
              width={50}
              height={50}
              priority
            />
          )}
          <p className="text-xl font-medium">{current?.condition.text}</p>
        </div>
        <div className="flex items-center gap-x-6 mt-1 text-sm">
          <div className="flex items-center gap-x-1">
            <Droplets className="w-4 h-4" />
            <p>Humidity: {current?.humidity}</p>
          </div>
          <div className="flex items-center gap-x-1">
            <Wind className="w-4 h-4" />
            <p>Wind: {current?.wind_mph} km/h</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CurrentWeatherCard;
