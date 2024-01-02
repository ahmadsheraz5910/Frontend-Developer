"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const AnalogClock = () => {
  const date = new Date()
  
  const [hour, setHour] = useState(date.getHours());
  const [minute, setMinute] = useState(date.getMinutes());
  const [seconds, setSeconds] = useState(date.getSeconds());

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
        <div className="relative h-full w-full border-spacing-4 rounded-full border border-dashed border-white">
          <div
            className="absolute flex transition-transform"
            style={{
              transform: `translate(-78%, -70%) rotate(${
                hour * (360 / 12) + 50
              }deg)`,
              transformOrigin: "80% 80%",
              top: "50%",
              left: "50%",
            }}
          >
            <Image
              src="/hour-hand.svg"
              alt="hour hand"
              width={114}
              height={106}
            />
          </div>
          <div
            className="absolute flex origin-bottom transition-transform"
            style={{
              transform: `translate(-8%, -66%) rotate(${
                minute * (360 / 60) + -51
              }deg)`,
              transformOrigin: "16% 82%",
              top: "50%",
              left: "50%",
            }}
          >
            <Image
              src="/minute-hand.svg"
              alt="minute hand"
              width={173}
              height={146}
            />
          </div>
          <div
            className="absolute flex origin-bottom transition-transform"
            style={{
              transform: `translate(2%, 4%) rotate(${
                seconds * (360 / 60) + -121
              }deg)`,
              transformOrigin: "0 0",
              top: "50%",
              left: "50%",
            }}
          >
            <Image
              src="/second-hand.svg"
              alt="Second hand"
              width={172}
              height={99}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default AnalogClock;
