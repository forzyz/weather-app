export const getAirQualityLevel = (airQualityIndex: number) => {
  if (airQualityIndex === 1) {
    return "Good 😃";
  } else if (airQualityIndex === 2) {
    return "Moderate 🙂";
  } else if (airQualityIndex === 3) {
    return "Unhealthy for Sensitive Groups 🙄";
  } else if (airQualityIndex === 4) {
    return "Unhealthy 😖";
  } else if (airQualityIndex === 5) {
    return "Very unhealthy 😓";
  } else {
    return "Hazardous 😵";
  }
};
