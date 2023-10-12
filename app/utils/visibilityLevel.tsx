export const getVisibilityLevel = (visibility: number) => {
  if (visibility >= 10) {
    return <p>Excellent 😀</p>;
  } else if (visibility > 5 && visibility < 10) {
    return <p>Good 🙂</p>;
  } else if (visibility > 1 && visibility < 5) {
    return <p>Moderate 😐</p>;
  } else {
    return <p>Poor 🙁</p>;
  }
};
