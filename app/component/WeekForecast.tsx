import Image from "next/image";

type DayForecast = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: number;
    mintemp_c: number;
  };
};

type WeekForecastProps = {
  data: {
    forecast: {
      forecastday: DayForecast[];
    };
  };
};

const WeekForecast = ({ data }: WeekForecastProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-3 w-full mb-10">
      {data.forecast.forecastday.map((day, index) => (
        <div
          key={index}
          className="bg-white/40 p-6 text-center rounded-lg flex flex-col items-center"
        >
          <p>
            {new Date(day.date).toLocaleString("en-US", { weekday: "short" })}
          </p>
          <Image
            width={60}
            height={60}
            src={`https:${day.day.condition.icon}`}
            alt={day.day.condition.text}
          />
          <div className="flex gap-1">
            <p>{day.day.maxtemp_c.toFixed()}°</p>
            <p>{day.day.mintemp_c.toFixed()}°</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeekForecast;
