import "./App.css";
import { useState, useEffect } from "react";
import { Search, Navbar } from "./components/Navbar.jsx";
import Now from "./components/Now";
import Forecast from "./components/Forecast";
import { Highlights, Air } from "./components/Highlights";
import Today from "./components/Today";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [airPollution, setAirPollution] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);
  const [weatherCondition, setWeatherCondition] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
  
    const isCurrentLocation = searchData.label === "Current Location";
    const isLocationAlreadySearched = searchHistory.some(
      (item) => item.label === searchData.label
    );
  
    if (!isCurrentLocation && !isLocationAlreadySearched) {
      setSearchHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, searchData];
        if (updatedHistory.length > 5) {
          updatedHistory.shift(); // Remove the oldest search item
        }
        return updatedHistory;
      });
    }
  
    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const airPollutionFetch = fetch(
      `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
    );
  
    Promise.all([currentWeatherFetch, forecastFetch, airPollutionFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        const airPollutionResponse = await response[2].json();
  
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
        setAirPollution(airPollutionResponse);
        setWeatherCondition(weatherResponse.weather[0].main);
      })
      .catch(console.log);
  };

    const handleHistoryItemClick = (searchItem) => {
      if (!searchHistory.some((item) => item.value === searchItem.value)) {
        setSearchHistory((prevHistory) => [...prevHistory, searchItem]);
      }
      handleOnSearchChange(searchItem);
    };

    const getCurrentLocationWeather = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
    
            const currentWeatherFetch = fetch(
              `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );
            const forecastFetch = fetch(
              `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );
            const airPollutionFetch = fetch(
              `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`
            );
            Promise.all([currentWeatherFetch, forecastFetch, airPollutionFetch])
              .then(async (response) => {
                const weatherResponse = await response[0].json();
                const forecastResponse = await response[1].json();
                const airPollutionResponse = await response[2].json();

                const url = `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
                fetch(url)
                .then(response => response.json())
                .then(data => {;
                  const cityName = data.name;
                  const country = data.sys.country;
    
                setCurrentWeather({
                  city: `${cityName},${country}`,
                  ...weatherResponse,
                });
                setForecast({ city: `${cityName} ${country}`, ...forecastResponse });
                setAirPollution(airPollutionResponse);
                setWeatherCondition(weatherResponse.weather[0].main);
              })
              })
              .catch(console.log);
          },
          (error) => {
            console.log(error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    };

    useEffect(() => {
      getCurrentLocationWeather();
    }, []);
    
  return (
    <div className={`App ${weatherCondition}`}>
      <Navbar onSearchChange={handleOnSearchChange} onCurrentLocationClick={getCurrentLocationWeather} />
      <Search onSearchChange={handleOnSearchChange} searchHistory={searchHistory} setSearchHistory={setSearchHistory} />
      {currentWeather && <Now data={currentWeather} />}
      {forecast && <Forecast data={forecast} />}
      {currentWeather && <Highlights data={currentWeather} />}
      {forecast && <Today data={forecast} />}
      {airPollution && <Air datas={airPollution} />}
      {searchHistory.length > 0 && (
        <div className="history-section border border-gray-800 rounded-[2rem] w-[22rem] px-8 py-4 backdrop-blur-xl shadow-2xl absolute left-[30rem] top-[50rem]">
          <h2 className="text-lg text-slate-50">Search History</h2>
          <ul className="text-slate-50 pt-2 cursor-pointer">
            {searchHistory.map((searchItem, index) => (
              <li key={index} onClick={() => handleHistoryItemClick(searchItem)}>
                {searchItem.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;