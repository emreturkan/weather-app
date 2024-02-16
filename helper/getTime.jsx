"use client";
import React, { useEffect, useState } from "react";

const GetTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-2xl font-medium" suppressHydrationWarning>
      {currentTime.toLocaleTimeString()}
    </div>
  );
};

export default GetTime;
