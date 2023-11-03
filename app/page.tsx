"use client";
import React, { useState } from "react";

import Image from "next/image";
import Input from "./component/Input";
import CurrentData from "./component/CurrentData";
import WeekForecast from "./component/WeekForecast";
import WeatherDetails from "./component/WeatherDetails";
import DayForecast from "./component/DayForecast";

type PageProps = {
  data: {
    current: {
      uv: number;
      wind_kph: number;
      humidity: number;
      vis_km: number;
      air_quality: {
        ["us-epa-index"]: number;
      };
      condition: {
        icon: string;
        text: string;
      };
      is_day: number;
      temp_c: number;
      temp_f: number
    };
    location: {
      name: string;
      region: string;
    };
    forecast: {
      forecastday: DayForecast[];
    };
  };
};

const Home = () => {
  const [data, setData] = useState<PageProps["data"] | null>(null);
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const [tempScale, setTempScale] = useState("C");
  const [dayMode, setDayMode] = useState(false);

  const url = `https://api.weatherapi.com/v1/forecast.json?key=8ef2f4e6d12643c1baf161027230110&q=${location}&days=10&aqi=yes&alerts=yes`;

  const handleSearch = async (
    e: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent
  ) => {
    if (e.key === "Enter") {
      e?.preventDefault();
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        setData(data);
        setLocation("");
        setError("");
      } catch (error) {
        setError("City not found");
        setData(null);
      }
    }
  };

  let leftContent;
  let rightContent;
  if (data === null && error === "") {
    leftContent = (
      <div>
        <h2>Welcome to the weather app!</h2>
        <p>Enter a city to get the weather.</p>
      </div>
    );
  } else if (error !== "") {
    leftContent = (
      <div>
        <p>City not found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    leftContent = (
      <>
        <div className="h-full flex">
          {data && <CurrentData data={data} tempScale={tempScale} />}
        </div>
      </>
    );
    rightContent = (
      <div className="p-4">
        <div className="flex justify-between mb-10">
          <div className="flex gap-3">
            <button
              onClick={() => setDayMode(true)}
              className={
                dayMode
                  ? "transition ease-in duration-300 border-b-2 border-black"
                  : "text-slate-400"
              }
            >
              Day
            </button>
            <button
              onClick={() => setDayMode(false)}
              className={
                !dayMode
                  ? "transition ease-in duration-300 border-b-2 border-black"
                  : "text-slate-400"
              }
            >
              Week
            </button>
          </div>
          <div className="flex gap-5">
            <button
              onClick={() => setTempScale("C")}
              className={
                tempScale === "C"
                  ? "transition ease-in rounded-full bg-black hover:bg-slate-900 text-white w-8 p-1.5"
                  : "transition ease-in rounded-full bg-white hover:bg-slate-100 w-8 p-1.5"
              }
            >
              °C
            </button>
            <button
              onClick={() => setTempScale("F")}
              className={
                tempScale === "F"
                  ? "transition ease-in rounded-full bg-black hover:bg-slate-900 text-white w-8 p-1.5"
                  : "transition ease-in rounded-full bg-white hover:bg-slate-100 w-8 p-1.5"
              }
            >
              °F
            </button>
          </div>
        </div>
        <div className="flex items-center">
          {data ? (
            dayMode ? (
              <DayForecast data={data} tempScale={tempScale}/>
            ) : (
              <WeekForecast data={data} tempScale={tempScale} />
            )
          ) : undefined}
        </div>
        <div>{data && <WeatherDetails data={data} />}</div>
      </div>
    );
  }

  return (
    <div
      className={`flex flex-1 bg-cover bg-slate-300 p-4 ${
        rightContent ? "h-fit md:h-fit md:p-10 lg:h-screen" : "h-screen"
      }`}
    >
      <div className={`bg-slate-200 rounded-lg flex flex-col md:flex-row lg:flex-row self-center m-auto w-11/12 ${!rightContent && `h-5/6`}`}>
        {/* Left side */}
        <div
          className={`rounded-lg bg-white w-full md:w-2/4 lg:w-1/4 ${
            leftContent ? "h-full" : "h-fit"
          } lg:h-auto`}
        >
          <div className="flex flex-col p-6 h-full mt-4">
            <Input
              handleSearch={handleSearch}
              location={location}
              setLocation={setLocation}
            />
            {leftContent}
          </div>
        </div>
        {/* Right side */}
        <div className="p-5 w-full md:w-9/12 lg:w-9/12">{rightContent}</div>
      </div>
    </div>
  );
};

export default Home;
