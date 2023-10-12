export const getHumidityLevel = (humidity: number) => {
  if (humidity <= 55) {
    return <p>Normal 🤙🏻</p>;
  } else if (humidity > 55 && humidity < 65) {
    return <p>Sticky muggy 🙄</p>;
  } else {
    return <p>Very wet 💦</p>;
  }
};
