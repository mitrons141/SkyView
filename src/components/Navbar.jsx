import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions, GEO_API_URL } from "../api";

const Search = ({ onSearchChange,searchHistory,setSearchHistory}) => {
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
            !searchHistory.some((searchItem) => searchItem.value === `${city.latitude} ${city.longitude}`)
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
      <AsyncPaginate
        className="w-[15rem] absolute -top-[3.2rem]  left-[40rem]"
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
  );
};

const Navbar = ({ onCurrentLocationClick }) => {
  return (
    <nav className="navbar bg-transparent">
      <div className="mx-auto px-10">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a
              href="/"
              className="flex items-center py-5 px-5 text-white hover:text-gray-400"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.973 3.717c5.975 0 10.856 4.88 10.856 10.855 0 5.975-4.88 10.856-10.856 10.856-5.974 0-10.855-4.881-10.855-10.856 0-5.975 4.881-10.855 10.855-10.855zm-2.59 8.057l4.306-2.5c.116-.067.248-.105.383-.105.302 0 .583.147.75.393.167.247.208.567.116.867l-1.714 4.664c-.063.172-.184.314-.34.406-.156.092-.336.119-.508.08l-4.3-1.49c-.376-.13-.614-.492-.614-.886v-.21c0-.394.238-.755.614-.885l4.3-1.49c.172-.059.352-.013.508.08.156.092.277.234.34.406l1.714 4.663c.092.3.051.62-.116.866-.167.246-.448.393-.75.393-.135 0-.267-.038-.383-.105l-4.306-2.5c-.376-.13-.614-.492-.614-.886v-.21c0-.394.238-.755.614-.886z"
                />
              </svg>
              <span className="font-semibold text-xl ml-2">SkyView</span>
            </a>
          </div>
          <button
        className="px-4 py-2 rounded-md text-sm font-medium leading-5 text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:bg-purple-500 transition duration-150 ease-in-out"
        onClick={onCurrentLocationClick}
      >
        <span className="flex items-center">
          <svg
            className="w-4 h-4 mr-2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
          </svg>
          Current Location
        </span>
      </button>
        </div>
      </div>
    </nav>
  );
};

export  { Search, Navbar};
