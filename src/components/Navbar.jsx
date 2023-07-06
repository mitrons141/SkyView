import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({ onSearchChange, searchHistory, onCurrentLocationClick }) => {
  const [search, setSearch] = useState(null);
  const [history, setHistory] = useState([]);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        if (history.indexOf(search) === -1) {
          setHistory([...history, search]);
        }
        const filteredOptions = response.data.filter(
          (city) =>
            !searchHistory.some(
              (searchItem) =>
                searchItem.value === `${city.latitude} ${city.longitude}`
            )
        );
        return {
          options: filteredOptions.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <nav className="navbar bg-transparent">
      <div className="mx-auto px-10 py-6">
        <div className="flex justify-between items-center">
                <img className="h-12 md:h-16 w-auto object-contain" src="logo.png"/>
          <AsyncPaginate
            className="px-3 w-[130px] md:w-[200px] lg:w-[250px] xl:w-[300px]"
            placeholder="Search"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
          />
          <button
            className="px-4 py-2 rounded-md text-sm font-medium leading-5 text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-500 transition duration-150 ease-in-out"
            onClick={onCurrentLocationClick}
          >
            <span className="flex items-center">
              <img className="w-6" alt="weather" src="icons/target.png" />
              <span class="pl-2 hidden md:block lg:block xl:block">Current Location</span>
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Search;
