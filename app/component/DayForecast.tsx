import Image from "next/image";
import { DayForecast } from "../utils/Types/DayForecast";
import { getCurrentIcon } from "../utils/currentIcon";

type DayForecastProps = {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
  tempScale: string;
};

const DayForecast = ({ data, tempScale }: DayForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 w-full mb-10">
      {data.forecast.forecastday[0].hour.map((hour, index) => {
        let weatherIcon = getCurrentIcon(hour.condition.text, 1);
        const dateString = hour.time;
        const timeParts = dateString.split(" ")[1].split(":");
        const hours = timeParts[0];
        const minutes = timeParts[1];

        return (
          <div
            key={index}
            className="bg-white p-6 text-center rounded-lg flex flex-col items-center text-center"
          >
            <p>
              {hours}:{minutes}
            </p>
            <Image
              className="m-auto"
              width={60}
              height={60}
              src={weatherIcon}
              alt={hour.condition.text}
            />
            <div className="flex gap-1">
              <p>{tempScale === "C" ? hour.temp_c.toFixed() : hour.temp_f.toFixed() }°</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DayForecast;
