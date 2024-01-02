"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const startDeg = 48;
  const endDeg = 360;

  useEffect(() => {
    const secondTimeout = setInterval(() => {
      setSeconds((prev) => (prev + 1) % 60);
    }, 1000);
    const hourTimeout = setInterval(
      () => {
        setHour((prev) => (prev + 1) % 12);
      },
      1000 * 60 * 60,
    );
    const minuteTimeout = setInterval(() => {
      setMinute((prev) => (prev + 1) % 60);
    }, 1000 * 60);

    return () => {
      clearTimeout(secondTimeout);
      clearTimeout(hourTimeout);
      clearTimeout(minuteTimeout);
    };
  }, []);

  return (
    <main>
      <div className="flex h-[400px] w-[400px] rounded-full bg-red-600 p-4">
        <div className="relative flex h-full w-full border-spacing-4 items-center justify-center rounded-full border border-dashed border-white">
          <div
            className="absolute flex origin-bottom transition-transform left-[26%] top-[24%]"
            style={{ rotate: hour * (endDeg / 12) + 48 + "deg" }}
          >
            <Image
              src="/hour-hand.svg"
              alt="hour hand"
              width={100}
              height={100}
            />
          </div>
          <div
            className="absolute flex origin-bottom transition-transform left-[26%] top-[24%]"
            style={{ rotate: minute * (endDeg / 60) - 51 + "deg" }}
          >
            <Image
              src="/minute-hand.svg"
              alt="minute hand"
              width={100}
              height={100}
            />
          </div>
          <div
            className="absolute flex origin-bottom transition-transform left-[28%] top-[28%]"
            style={{ rotate: seconds * (endDeg / 60) + 60 + "deg" }}
          >
            <Image
              src="/second-hand.svg"
              alt="Second hand"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalogClock;
