import { HourForecast } from "./HourForecast";

export type DayForecast = {
  date: string;
  day: {
    condition: {
      icon: string;
      text: string;
    };

    daily_chance_of_rain: number;
    maxtemp_c: number;
    mintemp_c: number;
    maxtemp_f: number;
    mintemp_f: number;
  };
  astro: {
    sunrise: string;
    sunset: string;
  };
  hour: HourForecast[];
};
