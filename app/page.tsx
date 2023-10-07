"use client";
import React, { useState } from "react";

import Input from "./component/Input";

const Home = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.weatherapi.com/v1/forecast.json?key=8ef2f4e6d12643c1baf161027230110&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
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

  return (
    <div className="flex bg-cover bg-slate-300 h-screen">
      <div className="bg-slate-200 rounded-lg flex self-center m-auto w-11/12 h-5/6">
        {/* Left side */}
        <div className="rounded-lg bg-white w-1/3">
          <div className="flex flex-col p-6">
            <Input handleSearch={handleSearch} setLocation={setLocation} />
            <h1>Weather Icon</h1>
            {data.current ? (
              <div>{data.current.temp_c}</div>
            ) : null}
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
