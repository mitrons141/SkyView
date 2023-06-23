import React from "react";

const getAqiCategory = (aqi) => {
  if (aqi < 20) {
    return "Good";
  } else if (aqi < 80 && aqi > 20) {
    return "Fair";
  } else if (aqi < 250 && aqi > 80) {
    return "Moderate";
  } else if (aqi < 350 && aqi > 250) {
    return "Poor";
  } else {
    return "Very Poor";
  }
};

const Air = ({ datas }) => {
  const { main, components } = datas.list[0];
  const aqiCategory = getAqiCategory(main.aqi);

  return (
    <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[31rem] p-6 absolute left-[29rem] top-[11.6rem]">
      <div className="flex justify-between items-center">
        <p className="text-slate-50">Air Quality Index</p>
        <p className="border border-green-500 px-2 py-0.5 rounded-[1rem] bg-green-500">
        {aqiCategory}
        </p>
      </div>
      <div className="flex justify-between items-center pt-6">
        <img className="w-12" alt="weather" src="icons/50d.png" />
        <div>
          <p className="text-slate-50 text-xs px-2">PM2.5</p>
          <p className="text-slate-50 text-3xl">
            {components.pm2_5 || "N/A"}
          </p>
        </div>
        <div>
          <p className="text-slate-50 text-xs px-2">SO2</p>
          <p className="text-slate-50 text-3xl">{components.so2 || "N/A"}</p>
        </div>
        <div>
          <p className="text-slate-50 text-xs px-2">NO2</p>
          <p className="text-slate-50 text-3xl">{components.no2 || "N/A"}</p>
        </div>
        <div>
          <p className="text-slate-50 text-xs px-2">O3</p>
          <p className="text-slate-50 text-3xl">{components.o3 || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

const Highlights = ({ data }) => {
  return (
    <div className="px-4 pt-8 absolute top-[4.6rem] left-[25rem]">
      <div className="border border-gray-800 rounded-[2rem] w-[91rem] h-[27rem] px-8 pb-8 pt-2 bg-transparent shadow-2xl">
        <p className="text-slate-50 py-6">Today's highlights</p>
        <br />
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 absolute top-[18.4rem]">
          <p className="text-slate-50">Humidity</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <p className="text-slate-50 text-3xl">{data.main.humidity}%</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 absolute top-[18.4rem] left-[20rem]">
          <p className="text-slate-50">Pressure</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <p className="text-slate-50 text-3xl">{data.main.pressure}hPa</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[31rem] p-6 pb-8 absolute top-[7em] left-[37rem]">
          <p className="text-slate-50">Sunrise & Sunset</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <div>
              <p className="text-slate-50 text-xs px-2">Sunrise</p>
              <p className="text-slate-50 text-3xl">
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <div>
              <p className="text-slate-50 text-xs px-2">Sunrise</p>
              <p className="text-slate-50 text-3xl">
                {new Date(data.sys.sunset* 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 absolute top-[18.4rem] left-[37rem]">
          <p className="text-slate-50">Visibility</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <p className="text-slate-50 text-3xl">{data.visibility / 1000}Km</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 absolute top-[18.4rem] left-[53rem]">
          <p className="text-slate-50">Feels Like</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <p className="text-slate-50 text-3xl">{Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[21rem] p-[1.6rem] absolute top-[7rem] left-[70rem]">
          <div className="flex justify-between items-center pb-[0.8rem]">
            <p className="text-slate-50">Max Temp</p>
            <p className="text-slate-50">Min Temp</p>
          </div>
          <div className="flex justify-between items-center pt-8">
            <p className="text-slate-50 text-3xl">{Math.round(data.main.temp_max)}°C</p>
            <p className="text-slate-50 text-3xl">{Math.round(data.main.temp_min)}°C</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[21rem] p-4 absolute top-[18.4rem] left-[70rem]">
          <p className="text-slate-50">Cloudiness</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-12" alt="weather" src="icons/50d.png" />
            <p className="text-slate-50 text-3xl">{data.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Highlights, Air };
