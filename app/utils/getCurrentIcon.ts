export const getCurrentIcon = (weatherText: string, isDay: number) => {
  switch (weatherText && isDay != undefined) {
    case weatherText === "Clear" && isDay === 0:
      return "/assets/moon/10.png";
    case weatherText === "Clear" && isDay === 1:
      return "/assets/sun/26.png";
    case weatherText === "Partly Sunny" && isDay === 1:
      return "/assets/sun/27.png";
    case weatherText === "Scattered Thunderstorms" && isDay === 1:
      return "/assets/cloud/12.png";
    case weatherText === "Scattered Thunderstorms" && isDay === 0:
      return "/assets/moon/20.png";
    case weatherText === "Showers" && isDay === 1:
      return "/assets/rain/39.png";
    case weatherText === "Rain and Snow" && isDay === 0:
      return "/assets/moon/21.png";
    case weatherText === "Rain and Snow" && isDay === 1:
      return "/assets/cloud/28.png";
    case weatherText === "Overcast" && isDay === 0:
      return "/assets/moon/15.png";
    case weatherText === "Overcast" && isDay === 1:
      return "/assets/sun/27.png";
    case weatherText === "Light Snow" && (isDay === 1 || isDay === 0):
      return "/assets/snow/36.png";
    case (weatherText === "Freezing Drizzle" ||
      weatherText === "Patchy freezing drizzle possible") &&
      isDay === 1:
      return "/assets/sun/13.png";
    case (weatherText === "Freezing Drizzle" ||
      weatherText === "Patchy freezing drizzle possible") &&
      isDay === 0:
      return "/assets/moon/3.png";
    case (weatherText === "Partly cloudy" || weatherText === "Cloudy") &&
      isDay === 0:
      return "/assets/moon/15.png";
    case weatherText === "Partly cloudy" && isDay === 1:
      return "/assets/sun/27.png";
    case (weatherText === "Mist" || weatherText === "Fog" ) && isDay === 0:
      return "/assets/moon/14.png";
    case (weatherText === "Mist" || weatherText === "Fog" ) && isDay === 1:
      return "/assets/sun/4.png";
  }

  return "/assets/sun/26.png";
};
