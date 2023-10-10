"use client";
import React, { useState } from "react";

import Image from "next/image";
import Input from "./component/Input";
import CurrentData from "./component/CurrentData";
import WeekForecast from "./component/WeekForecast";
import WeatherDetails from "./component/WeatherDetails";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=8ef2f4e6d12643c1baf161027230110&q=${location}&days=7&aqi=yes&alerts=yes`;

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
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div>
        <h2>Welcome to the weather app</h2>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div>
        <p>City not found</p>
        <p>Enter a Valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div>
          <CurrentData data={data} />
          <WeekForecast />
        </div>
        <div>
          <WeatherDetails />
        </div>
      </>
    );
  }

  return (
    <div className="flex bg-cover bg-slate-300 h-screen">
      <div className="bg-slate-200 rounded-lg flex self-center m-auto w-11/12 h-5/6">
        {/* Left side */}
        <div className="rounded-lg bg-white w-1/4">
          <div className="flex flex-col p-6">
            <Input
              handleSearch={handleSearch}
              location={location}
              setLocation={setLocation}
            />
            {content}
            <h1>Day</h1>
          </div>
        </div>
        {/* Right side */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
