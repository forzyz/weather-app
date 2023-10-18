import Image from "next/image";
import { DayForecast } from "../utils/Types/DayForecast";
import { getCurrentIcon } from "../utils/currentIcon";

type WeekForecastProps = {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
  tempScale: string
};

const WeekForecast = ({ data, tempScale }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 w-full mb-10">
      {data.forecast.forecastday.map((day, index) => {
        let weatherIcon = getCurrentIcon(day.day.condition.text, 1);

        return (
          <div
            key={index}
            className="bg-white p-6 text-center rounded-lg flex flex-col items-center"
          >
            <p>
              {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
            </p>
            <Image
              className="m-auto"
              width={60}
              height={60}
              src={weatherIcon}
              alt={day.day.condition.text}
            />
            <div className="flex gap-1">
              <p>{tempScale === "C" ? day.day.maxtemp_c.toFixed() : day.day.maxtemp_f.toFixed()}°</p>
              <p>{tempScale === "C" ? day.day.mintemp_c.toFixed() : day.day.mintemp_f.toFixed()}°</p>
            </div>
          </div>
        );
      })}
      <div className="bg-white p-6 text-center rounded-lg flex flex-col items-center">
        <p>Thr</p>
        <Image
          className="m-auto"
          width={60}
          height={60}
          src="/assets/cloud/5.png"
          alt="cloud"
        />
        <div className="flex gap-1">
          <p>13°</p>
          <p>7°</p>
        </div>
      </div>
      <div className="bg-white p-6 text-center rounded-lg flex flex-col items-center">
        <p>Fri</p>
        <Image
          className="m-auto"
          width={60}
          height={60}
          src="/assets/sun/16.png"
          alt="cloud"
        />
        <div className="flex gap-1">
          <p>15°</p>
          <p>6°</p>
        </div>
      </div>
      <div className="bg-white p-6 text-center rounded-lg flex flex-col items-center">
        <p>Sat</p>
        <Image
          className="m-auto"
          width={60}
          height={60}
          src="/assets/sun/27.png"
          alt="cloud"
        />
        <div className="flex gap-1">
          <p>10°</p>
          <p>3°</p>
        </div>
      </div>
      <div className="bg-white p-6 text-center rounded-lg flex flex-col items-center">
        <p>Sun</p>
        <Image
          className="m-auto"
          width={60}
          height={60}
          src="/assets/sun/26.png"
          alt="cloud"
        />
        <div className="flex gap-1">
          <p>8°</p>
          <p>1°</p>
        </div>
      </div>
    </div>
  );
};

export default WeekForecast;
