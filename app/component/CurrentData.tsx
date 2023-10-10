import Image from "next/image";
import { getCurrentDate } from "../utils/currentDate";
import { getCurrentIcon } from "../utils/getCurrentIcon";

const CurrentData = ({ data }) => {
  const currentDate = getCurrentDate();
  const weatherText = data.current.condition.text;
  const isDay:number = data.current.is_day;
  console.log(isDay);
  
  const weatherIcon = getCurrentIcon(weatherText, isDay);

  return (
    <div className="flex flex-col mb-8 md:mb-0 items-start gap-2">
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
      <div className="flex items-center">
        <div>
          <p>{currentDate}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentData;
