import React from 'react';

const Today = ({ data }) => {
  const todayForecast = data.list.slice(0, 8); // Get the first 8 entries for today's forecast (3-hourly)

  return (
    <div className='absolute bottom-[9rem] left-[30rem]'>
      <p className='text-slate-50 text-xl'>Today at</p>
      <div className='pt-3 flex flex-row space-x-8'>
        {todayForecast.map((forecast) => (
          <div key={forecast.dt} className='border border-gray-800 rounded-[2rem] w-[6rem] p-5 pl-7 backdrop-blur-xl shadow-2xl'>
            <p className='text-slate-50 pb-2'>{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: 'numeric', minute: 'numeric' })}</p>
            <img className='w-12' alt='weather' src={`icons/${forecast.weather[0].icon}.png`} />
            <p className='text-slate-50 pt-2'>{Math.round(forecast.main.temp)}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Today;