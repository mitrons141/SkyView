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
    <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-6 relative bottom-[144.6rem] left-[70px] lg:w-[22rem] lg:absolute lg:left-[28rem] lg:top-[10.8rem] lg:h-[10rem]  xl:w-[31rem] xl:absolute xl:left-[28rem] xl:top-[10.8rem] xl:h-[10rem]">
      <div className="flex justify-between items-center">
        <p className="text-slate-50">Air Quality Index</p>
        <p className="border border-green-500 px-2 py-0.5 rounded-[1rem] bg-green-500">
        {aqiCategory}
        </p>
      </div>
      <div className="flex flex-col justify-between items-center pt-6 lg:flex-row xl:flex-row">
        <img className="w-10 lg:w-6 pb-2" alt="weather" src="icons/air.png" />
        <div className="flex justify-between items-center lg:flex-col xl:flex-col">
          <p className="text-slate-50 text-s lg:text-xs px-6">PM2.5</p>
          <p className="text-slate-50 text-3xl lg:text-xl">
            {components.pm2_5 || "N/A"}
          </p>
        </div>
        <div className="flex justify-between items-center lg:flex-col xl:flex-col">
          <p className="text-slate-50 text-s lg:text-xs px-6">SO2</p>
          <p className="text-slate-50 text-3xl lg:text-xl">{components.so2 || "N/A"}</p>
        </div>
        <div className="flex justify-between items-center lg:flex-col xl:flex-col">
          <p className="text-slate-50 text-s lg:text-xs px-6">NO2</p>
          <p className="text-slate-50 text-3xl lg:text-xl">{components.no2 || "N/A"}</p>
        </div>
        <div className="flex justify-between items-center lg:flex-col xl:flex-col">
          <p className="text-slate-50 text-s lg:text-xs px-6">O3</p>
          <p className="text-slate-50 text-3xl lg:text-xl">{components.o3 || "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

const Highlights = ({ data }) => {
  return (
    <div className="px-8 pt-6 realtive top-[4.6rem] lg:absolute lg:left-[23.9rem] lg:top-[4.4rem] xl:absolute xl:left-[23.9rem] xl:top-[4.4rem]">
      <div className="border border-gray-800 rounded-[2rem] w-[19.6rem] h-[102rem] px-8 pb-4 pt-2 bg-transparent shadow-2xl lg:w-[49rem] lg:h-[36rem] xl:w-[91rem] xl:h-[27rem]">
        <p className="text-slate-50 py-6 ">Today's highlights</p>
        <br />
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 relative top-[19rem] left-1 lg:absolute lg:top-[17.5rem] lg:w-[10.5rem] lg:left-16 xl:absolute xl:top-[17.5rem] xl:left-16 xl:w-[15rem]">
          <p className="text-slate-50 ">Humidity</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-10 lg:w-8 xl:w-10" alt="weather" src="icons/humidity.png" />
            <p className="text-slate-50 text-3xl lg:text-2xl">{data.main.humidity}%</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 relative top-[19.6rem] left-1 lg:absolute lg:top-[17.5rem] lg:w-[10.5rem] lg:left-[15.5rem] xl:absolute xl:top-[17.5rem] xl:left-[20rem] xl:w-[15rem]">
          <p className="text-slate-50 ">Air Pressure</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-10 lg:w-8 xl:w-10" alt="weather" src="icons/airp.png" />
            <p className="text-slate-50 text-3xl lg:text-2xl lg:pl-1">{data.main.pressure}hPa</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl h-[20rem] w-[242px] p-6 pb-8 relative top-[20em] left-1 lg:absolute lg:top-[6.5em] lg:left-[27rem] lg:w-[22rem] lg:h-[10rem] xl:absolute xl:top-[6.5em] xl:left-[37rem] xl:w-[31rem] xl:h-[10rem]">
          <p className="text-slate-50 ">Sunrise & Sunset</p>
          <div className="flex flex-col justify-between items-center pt-10 lg:flex-row xl:flex-row">
            <img className="w-12 lg:w-8 pb-2 xl:w-12" alt="weather" src="icons/sunrise.png" />
            <div>
              <p className="text-slate-50 text-xs px-2">Sunrise</p>
              <p className="text-slate-50 text-3xl lg:text-xl">
                {new Date(data.sys.sunrise * 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <img className="w-12 lg:w-8 pb-2 xl:w-12" alt="weather" src="icons/sunset.png" />
            <div>
              <p className="text-slate-50 text-xs px-2">Sunrise</p>
              <p className="text-slate-50 text-3xl lg:text-xl">
                {new Date(data.sys.sunset* 1000).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 relative top-[20.5rem] left-1 lg:absolute lg:top-[17.5rem] lg:w-[10.5rem] lg:left-[27rem] xl:absolute xl:top-[17.5rem] xl:left-[37rem] xl:w-[15rem]">
          <p className="text-slate-50 ">Visibility</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-10 lg:w-8 xl:w-10" alt="weather" src="icons/visibility.png" />
            <p className="text-slate-50 text-3xl lg:text-2xl">{data.visibility / 1000}Km</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 relative top-[21rem] left-1 lg:absolute lg:top-[17.5rem] lg:w-[10.5rem] lg:left-[38.5em]  xl:absolute xl:top-[17.5rem] xl:left-[53rem] xl:w-[15rem]">
          <p className="text-slate-50 ">Feels Like</p>
          <div className="flex justify-between items-center pt-6">
            <img className="w-10 lg:w-8 xl:w-10" alt="weather" src="icons/thermometer.png" />
            <p className="text-slate-50 text-3xl lg:text-2xl">{Math.round(data.main.feels_like)}°C</p>
          </div>
        </div>
        <div className="flex flex-col border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-[1.6rem] relative top-[21.5rem] left-1 lg:absolute lg:top-[25.5rem] lg:h-[9rem] lg:left-[4.1rem] lg:w-[21.8rem] xl:absolute xl:top-[6.5rem] xl:left-[70rem] xl:w-[21rem]">
          <div className="flex justify-between items-center pb-[0.8rem]">
            <p className="text-slate-50 ">Max Temp</p>
            <p className="text-slate-50 ">Min Temp</p>
          </div>
          <div className="flex justify-between items-center pt-8 lg:pt-5">
            <p className="text-slate-50 text-3xl">{Math.round(data.main.temp_max)}°C</p>
            <p className="text-slate-50 text-3xl">{Math.round(data.main.temp_min)}°C</p>
          </div>
        </div>
        <div className="border border-gray-700 rounded-[1rem] backdrop-blur-xl w-[15rem] p-4 relative top-[22rem] left-1 lg:absolute lg:top-[25.5rem] lg:left-[27.1rem] lg:h-[9rem] lg:w-[21.8rem] xl:absolute xl:top-[17.5rem] xl:left-[70rem] xl:w-[21rem] xl:h-[7.5rem]">
          <p className="text-slate-50 ">Cloudiness</p>
          <div className="flex justify-between items-center pt-6 lg:pt-8 xl:pt-5">
            <img className="w-10 lg:w-12" alt="weather" src="icons/climate.png" />
            <p className="text-slate-50 text-3xl">{data.clouds.all}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Highlights, Air };
