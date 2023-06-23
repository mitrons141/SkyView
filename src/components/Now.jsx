import React from 'react'

const Now = ({ data }) => {
  return (
    <div className='px-8'>
        <div className='border border-gray-800 rounded-[2rem] w-[22rem] px-8 py-4 backdrop-blur-xl shadow-2xl'>
            <div className="flex justify-between items-center">
                <div className='pb-10 leading-[4rem]'>
                  <p className="text-lg text-slate-50 leading-[4rem]">Now</p>
                  <p className='text-6xl text-slate-50'>{Math.round(data.main.temp)}°C</p>
                  <p className='text-slate-50'>{data.weather[0].description}</p>
                </div>
                <img className="w-18 px-10 pb-4" alt="weather" src={`icons/${data.weather[0].icon}.png`}/>
            </div>
            <div>
              <p className="text-3xl text-slate-50 pb-4">{data.city}</p>
            </div>
        </div>
    </div>
  )
}

export default Now