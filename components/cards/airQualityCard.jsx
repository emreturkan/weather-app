import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Progress } from "../ui/progress";
import { SunIcon } from "@radix-ui/react-icons";
import { Dot } from "lucide-react";

const AirQualityCard = ({ current }) => {
  const air_quality = () => {
    if (current?.air_quality["us-epa-index"] === 1) {
      return "Good";
    } else if (current?.air_quality["us-epa-index"] === 2) {
      return "Moderate";
    } else if (current?.air_quality["us-epa-index"] === 3) {
      return "Unhealthy for sensitive groups";
    } else if (current?.air_quality["us-epa-index"] === 4) {
      return "Unhealthy";
    } else if (current?.air_quality["us-epa-index"] === 5) {
      return "Very unhealthy";
    } else {
      return "Hazardous";
    }
  };

  return (
    <Card className="w-full   h-full flex flex-col gap-y-4">
      <CardHeader>
        <div className="flex items-center gap-x-2">
          <SunIcon className="w-4 h-4" />
          <h3 className="text-base dark:text-slate-300 font-medium">
            Air Quality
          </h3>
        </div>
      </CardHeader>
      <CardContent>
        <Progress
          aria-label="Air Quality"
          value={current?.air_quality["us-epa-index"] * 10}
        />
      </CardContent>
      <CardFooter className="!flex items-center ">
        <Dot className="w-8 h-8" />
        <p className="text-sm font-medium">Air Quality {air_quality()}</p>
      </CardFooter>
    </Card>
  );
};

export default AirQualityCard;
