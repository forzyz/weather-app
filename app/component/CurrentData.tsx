import Image from "next/image";
import { getCurrentDate } from "../utils/currentDate";
import { getCurrentIcon } from "../utils/currentIcon";
import { getCurrentTime } from "../utils/currentTime";
import { MdLocationOn } from "react-icons/md";
import { DayForecast } from "../utils/DayForecast";

type CurrentProps = {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      is_day: number;
      temp_c: number;
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

const CurrentData = ({ data }: CurrentProps) => {
  const currentDate = getCurrentDate();
  const currentTime = getCurrentTime();
  const weatherText = data.current.condition.text;
  const isDay: number = data.current.is_day;

  const weatherIcon = getCurrentIcon(weatherText, isDay);

  return (
    <div className="flex sm:h-fit flex-col h-full items-start gap-2">
      {weatherIcon && (
        <div>
          <Image
            width={300}
            height={300}
            src={weatherIcon}
            alt={data.current.condition.text}
          />
        </div>
      )}
      <div className="w-11/12">
        <div className="flex items-center">
          <div className="mt-5 text-5xl">
            <p className="celsium">{data.current.temp_c}</p>
          </div>
        </div>
        <div className="py-5">
          <p>
            {currentDate}, <span className="text-slate-400">{currentTime}</span>
          </p>
        </div>
        <hr />
        <div className="mt-6 flex items-center">
          <Image
            width={40}
            height={40}
            src={`https:${data.current.condition.icon}`}
            alt="weather_icon"
          />
          <p className="ml-2">{data.current.condition.text}</p>
        </div>
        <div className="mt-1 flex items-center">
          <Image
            width={40}
            height={40}
            src="/assets/rain/39.png"
            alt="weather_icon"
          />
          <p className="ml-2">
            Rain - {data.forecast.forecastday[0].day.daily_chance_of_rain}%
          </p>
        </div>
        <div className="flex items-center bg-black text-white p-2 rounded-xl mt-5 ">
          <MdLocationOn />
          <p className="ml-1">{data.location.name}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentData;
