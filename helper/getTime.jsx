"use client";
import React, { useEffect, useState } from "react";

const GetTime = ({ timezone }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = new Date(currentTime.getTime() + timezone * 0 * 1000);

  return (
    <div className="text-lg font-medium" suppressHydrationWarning>
      {localTime.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      })}
    </div>
  );
};

export default GetTime;
