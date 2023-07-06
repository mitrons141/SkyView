import React from "react";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );
  return (
    <div className="px-8 py-6">
      <div className="border border-gray-800 rounded-[2rem] w-[19.6rem] px-8 py-4 backdrop-blur-xl shadow-2xl lg:w-[22rem] lg:h-[42rem] xl:w-[22rem]">
        <div>
          <p className="text-slate-50 py-4 ">7 Days Forecast</p>
          <>
            {data.list.slice(0, 7).map((item, idx) => (
              <div className="flex justify-between items-center py-2 lg:space-y-4">
                <div classname="pr-2">
                  <p className="text-slate-50 ">
                    {Math.round(item.pop * 100)}%
                  </p>
                  <p className="text-slate-50 ">Rain</p>
                </div>
                <p className="text-slate-50 w-2 pr-8 ">{item.weather[0].description}</p>
                <p className=" text-slate-50 text-xl pl-6 ">
                  {Math.round(item.main.temp)}°C
                </p>
                <p className="text-slate-50 ">{forecastDays[idx]}</p>
              </div>
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default Forecast;
