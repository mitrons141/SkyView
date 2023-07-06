import React from 'react';

const Today = ({ data }) => {
  const todayForecast = data.list.slice(0, 8);

  return (
    <div className='relative bottom-[-3rem] pl-12 lg:absolute lg:bottom-[-24rem] xl:absolute xl:bottom-[8rem] lg:left-[25rem] lg:pr-[20rem] xl:left-[28rem]'>
      <p className='text-slate-50 text-xl'>Today at</p>
      <div className='pt-3 flex flex-wrap justify-center'>
        {todayForecast.map((forecast) => (
          <div key={forecast.dt} className='mb-4 mr-4 border border-gray-800 rounded-[2rem] w-[6rem] p-5 pl-7 backdrop-blur-xl shadow-2xl relative right-6'>
            <p className='text-slate-50 pb2'>{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</p>
            <img className='w-12' alt='weather' src={`icons/${forecast.weather[0].icon}.png`} />
            <p className='text-slate-50 pt-2'>{Math.round(forecast.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Today;
