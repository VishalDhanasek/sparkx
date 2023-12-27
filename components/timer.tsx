"use client"
import React, { useCallback, useEffect, useRef, useState } from "react";

interface CountDownTime {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

interface TimerProps {
  countdownDays: number;
}

const Timer3: React.FC<TimerProps> = ({ countdownDays }) => {
  const [countDownTime, setCountDownTime] = useState<CountDownTime>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const getTimeDifference = (countDownTime: number) => {
    const currentTime = new Date().getTime();
    const timeDifference = countDownTime - currentTime;

    let days =
      Math.floor(timeDifference / (24 * 60 * 60 * 1000)) >= 10
        ? Math.floor(timeDifference / (24 * 60 * 60 * 1000)).toString()
        : `0${Math.floor(timeDifference / (24 * 60 * 60 * 1000))}`;

    const hours =
      Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)) >=
      10
        ? Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)).toString()
        : `0${Math.floor((timeDifference % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60))}`;

    const minutes =
      Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)) >= 10
        ? Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60)).toString()
        : `0${Math.floor((timeDifference % (60 * 60 * 1000)) / (1000 * 60))}`;

    const seconds =
      Math.floor((timeDifference % (60 * 1000)) / 1000) >= 10
        ? Math.floor((timeDifference % (60 * 1000)) / 1000).toString()
        : `0${Math.floor((timeDifference % (60 * 1000)) / 1000)}`;

    if (timeDifference < 0) {
      setCountDownTime({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      });
      clearInterval(intervalRef.current!);
    } else {
      setCountDownTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }
  };

  const startCountDown = useCallback(() => {
    const customDate = new Date();
    const countDownDate = new Date(
      customDate.getFullYear(),
      customDate.getMonth() + 4,
      customDate.getDate() ,
      customDate.getHours(),
      customDate.getMinutes(),
      customDate.getSeconds() + 1
    );

    intervalRef.current = setInterval(() => {
      getTimeDifference(countDownDate.getTime());
    }, 1000);

    return () => clearInterval(intervalRef.current!);
  }, [countdownDays]);

  useEffect(() => {
    startCountDown();
    return () => clearInterval(intervalRef.current!);
  }, [startCountDown]);

  return (


    <div className="bg-[url('https://images.unsplash.com/photo-1519750157634-b6d493a0f77c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover  h-[500px]">
       <div className="max-w-3xl mx-auto mt-10 text-center ">
            <h1 className="h2 text-white mb-2"><br></br><br></br>Grand Finale Timer</h1>
            <p className="text-xl text-white mb-10">Hurry up and Register you seat right now!</p>
          </div>
    
      <div className="flex flex-col items-center justify-center gap-4 sm:gap-8">
        
        <div className="flex justify-center gap-2 sm:gap-4">
          {/* Days */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-10 w-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-white rounded-lg">
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 !-left-[3px] rounded-full bg-gradient-to-r from-gradient1 to-gradient2 "></div>
              <span className="lg:text-4xl sm:text-3xl text-xl h2 text-gray">
                {countDownTime?.days}
              </span>
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 -right-[3px] rounded-full bg-gradient-to-r from-gradient1 to-gradient2 "></div>
            </div>
            <span className="text-white text-xs sm:text-lg h3 text-center capitalize">
              {countDownTime?.days === "01" ? "Day" : "Days"}
            </span>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-10 w-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-white rounded-lg">
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 !-left-[3px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-4xl sm:text-3xl text-xl h2 text-gray">
                {countDownTime?.hours}
              </span>
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 -right-[3px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-white text-xs sm:text-lg h3 text-center ">
              {countDownTime?.hours === "01" ? "Hour" : "Hours"}
            </span>
          </div>

          {/* Minutes */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-10 w-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-white rounded-lg">
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 !-left-[3px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-4xl sm:text-3xl text-xl h2 text-gray">
                {countDownTime?.minutes}
              </span>
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 -right-[3px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-white text-xs sm:text-lg h3 text-center capitalize">
              {countDownTime?.minutes === "01" ? "Minute" : "Minutes"}
            </span>
          </div>

          {/* Seconds */}
          <div className="flex flex-col gap-2 relative">
            <div className="h-10 w-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex justify-between items-center bg-white rounded-lg">
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 !-left-[3px] rounded-full bg-[#191A24]"></div>
              <span className="lg:text-4xl sm:text-3xl text-xl h2 text-gray">
                {countDownTime?.seconds}
              </span>
              <div className="relative h-1.5 w-1.5 sm:h-2 sm:w-2 -right-[3px] rounded-full bg-[#191A24]"></div>
            </div>
            <span className="text-white text-xs sm:text-lg h3 text-center capitalize">
              {countDownTime?.seconds === "01" ? "Second" : "Seconds"}
            </span>
          </div>
        </div>
      </div>
      </div>
    
  );
};

export default Timer3;
