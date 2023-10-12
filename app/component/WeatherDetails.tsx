import Image from "next/image";
import { getHumidityLevel } from "../utils/humidityLevel";
import { getVisibilityLevel } from "../utils/visibilityLevel";
import { getAirQualityLevel } from "../utils/airQualityLevel";
import { DayForecast } from "../utils/DayForecast";

type WeatherDetailsProps = {
  data: {
    current: {
      uv: number;
      wind_kph: number;
      humidity: number;
      vis_km: number;
      air_quality: {
        ["us-epa-index"]: number;
      };
    };
    forecast: {
      forecastday: DayForecast[];
    };
  };
};

const WeatherDetails = ({ data }: WeatherDetailsProps) => {
  return (
    <div className="flex flex-col ml-300">
      <p>Today's Highlights</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-2 gap-4">
        <div className="bg-white flex flex-col p-5 gap-6 rounded-xl">
          <p className="text-slate-400">UV Index</p>
          <div className="flex items-center justify-center text-5xl pb-5">
            <h1>{data.current.uv}</h1>
          </div>
        </div>
        <div className="bg-white flex flex-col p-5 gap-6 rounded-xl">
          <p className="text-slate-400">Wind Status</p>
          <div className="text-5xl">
            <h1>
              {data.current.wind_kph}
              <span className="text-xl pl-1">km/h</span>
            </h1>
          </div>
        </div>
        <div className="bg-white flex flex-col p-4 gap-2 rounded-xl">
          <p className="text-slate-400">Sunrise & Sunset</p>
          <div className="flex flex-col text-xl pb-2 gap-5">
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src="/assets/sunrise.png"
                alt="sunrise_image"
              />
              <h1>{data.forecast.forecastday[0].astro.sunrise}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Image
                width={40}
                height={40}
                src="/assets/sunset.png"
                alt="sunset_image"
              />
              <h1>{data.forecast.forecastday[0].astro.sunset}</h1>
            </div>
          </div>
        </div>
        <div className="bg-white flex flex-col p-4 gap-6 rounded-xl">
          <p className="text-slate-400">Humidity</p>
          <div className="flex items-center text-5xl">
            <h1>
              {data.current.humidity}
              <span className="text-3xl">﹪</span>
            </h1>
          </div>
          {getHumidityLevel(data.current.humidity)}
        </div>
        <div className="bg-white flex flex-col p-4 gap-6 rounded-xl">
          <p className="text-slate-400">Visibility</p>
          <div className="flex items-center text-5xl">
            <h1>
              {data.current.vis_km}
              <span className="text-xl pl-1">km</span>
            </h1>
          </div>
          {getVisibilityLevel(data.current.vis_km)}
        </div>
        <div className="bg-white flex flex-col p-4 gap-6 rounded-xl">
          <p className="text-slate-400">Air Quality</p>
          <div className="flex items-center text-5xl">
            <h1>{data.current.air_quality["us-epa-index"]}</h1>
          </div>
          {getAirQualityLevel(data.current.air_quality["us-epa-index"])}
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
