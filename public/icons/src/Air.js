import { useState, useEffect } from "react";
import {Highlights,Air} from "./components/Highlights";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./api";

const AirPollutionData = ({ lat,lon}) => {
  const [pollutionData, setPollutionData] = useState(null);

  useEffect(() => {
    const fetchPollutionData = async () => {
      try {
        const response = fetch(
            `${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        setPollutionData(response.data.list[0].components);
      } catch (error) {
        console.error('Error fetching pollution data:', error);
      }
    };

    fetchPollutionData();
  }, []);

  if (!pollutionData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Air title="PM2.5" value={pollutionData.pm2_5} />
      <Air title="SO2" value={pollutionData.so2} />
      <Air title="NO2" value={pollutionData.no2} />
      <Air title="O3" value={pollutionData.o3} />
    </div>
  );
};

export default AirPollutionData;
