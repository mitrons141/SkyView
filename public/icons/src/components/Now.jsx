import React from "react";
const Now = ({ data }) => {
  return (
    <div className='px-8 pt-4'>
    <div className='border border-gray-800 rounded-[2rem] w-[22rem] max-w-full mx-auto px-8 py-4 backdrop-blur-xl shadow-2xl lg:relative lg:right-[410px] xl:relative xl:right-[740px]'>
      <div className="flex flex-col justify-between items-center lg:flex-row xl:flex-row lg:justify-between lg:items-start xl:justify-between xl:items-start">
        <div className='pb-10 leading-[4rem]'>
          <p className="text-lg text-slate-50 leading-[4rem]">Now</p>
          <p className='text-6xl text-slate-50'>{Math.round(data.main.temp)}°C</p>
          <p className='text-slate-50'>{data.weather[0].description}</p>
        </div>
        <img className="w-18 px-8 pb-4 xl:pt-8" alt="weather" src={`icons/${data.weather[0].icon}.png`}/>
      </div>
      <div className="flex justify-center items-center lg:justify-start lg:items-start xl:justify-start xl:items-start">
        <img className="w-8 pb-2 2xl:pt-1" alt="weather" src="icons/gps.png" />
        <p className="text-3xl text-slate-50 pl-2 pb-4">{data.city}</p>
      </div>
    </div>
  </div>
  );
};

export default Now;
