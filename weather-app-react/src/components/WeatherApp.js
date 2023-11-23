import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GrFormClose } from "react-icons/gr";
import Haze from "../imgs/haze.jpg";
import Clouds from "../imgs/cloudy.jpg";
import Rain from "../imgs/rainy.jpg";
import Clear from "../imgs/clear.jpg";
import Smoky from "../imgs/smoky.jpg";
import Sunny from "../imgs/sunny.jpg";
import Thunder from "../imgs/thunder.jpg";

const WeatherApp = () => {
  const [apiKey, setApiKey] = useState("e2c1e053e1eb1eafbd26c979487fd22c");
  const [search, setSearch] = useState("");
  const [apiURL, setApiURL] = useState(
    `https://api.openweathermap.org/data/2.5/weather?q=${"Islamabad"}&appid=${apiKey}&units=matric`
  );
  const [close, setClose] = useState(false);
  const [error, setError] = useState(false);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [date, setDate] = useState(new Date().toDateString());
  const [data, setData] = useState({
    img: "",
    cityName: "",
    condition: "",
    wind: "",
    humidity: "",
    temperature: "",
    code: "",
  });
  const [cities, setCities] = useState([
    "New York",
    "California",
    "Paris",
    "Tokoyo",
  ]);

  if (data.img == "Haze") {
    data.img = Haze;
  } else if (data.img == "Clouds") {
    data.img = Clouds;
  } else if (data.img == "Rain") {
    data.img = Rain;
  } else if (data.img == "Clear") {
    data.img = Clear;
  } else if (data.img == "Smoky" || data.img == "Smoke") {
    data.img = Smoky;
  } else if (data.img == "Sunny") {
    data.img = Sunny;
  } else if (data.img == "Thunder") {
    data.img = Thunder;
  }

  useEffect(() => {
    const initialWeather = async () => {
      try {
        let res = await fetch(apiURL);
        let actual = await res.json();
        if (actual !== null) {
          setData({
            cityName: actual.name,
            condition: actual.weather[0].main,
            wind: actual.wind.speed,
            humidity: actual.main.humidity,
            temperature: Math.round(actual.main.temp - 273.15) + 1,
            code: actual.sys.country,
            img: actual.weather[0].main,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    initialWeather();
  }, []);

  const getWeatherLocation = async (city) => {
    let baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=matric`;
    try {
      let res = await fetch(baseURL);
      let actual = await res.json();
      if (actual !== null) {
        setData({
          cityName: actual.name,
          condition: actual.weather[0].main,
          wind: actual.wind.speed,
          humidity: actual.main.humidity,
          temperature: Math.round(actual.main.temp - 273.15) + 1,
          code: actual.sys.country,
          img: actual.weather[0].main,
        });
      }
    } catch (actual) {
      if (city !== actual.name) {
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 3000);
      }
    }
  };

  const weatherHandler = (e) => {
    if (e.key === "Enter") {
      getWeatherLocation(search);
      setSearch("");
      e.target.blur();
      setClose(false);
    }
  };

  const closeSearch = () => {
    setSearch("");
    setClose(false);
  };

  const selectedCity = (city) => {
    getWeatherLocation(city);
    setSearch(city);
    setClose(false);
  };

  return (
    <>
      <div
        className="bg-weather"
        style={{ backgroundImage: `url(${data.img})` }}
      >
        <div className="container">
          <a href="/weather-app-react/" className="logo">
            Weather App
          </a>
          <div className="weather-info">
            <h1 className="tempreture">
              {data.temperature}
              <sup>o</sup>
              <span>C</span>
            </h1>
            <div className="name-date">
              <h2 id="city-name">
                {data.cityName}, {data.code}
              </h2>
              <div className="flex-box">
                <p className="timePicker">{time}</p>
                <p>{date}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="right-side">
          <div className="searchBar">
            <input
              type="text"
              value={search}
              placeholder="Search city name here..."
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={weatherHandler}
              autoComplete="off"
            />
            <i className="searchIcon">
              <BiSearch />
            </i>

            {search !== "" ? (
              <i className="close" onClick={closeSearch}>
                <GrFormClose />
              </i>
            ) : (
              ""
            )}
          </div>

          <ul className="cities">
            {cities.map((city, id) => {
              return (
                <li key={id} onClick={() => selectedCity(city)}>
                  {city}
                </li>
              );
            })}
          </ul>

          <ul className="weather-details">
            <h4>Weather Details</h4>
            <li>
              <span>Condition</span>
              <span>{data.condition}</span>
            </li>
            <li>
              <span>Wind</span>
              <span>{data.wind}km/h</span>
            </li>
            <li>
              <span>Humidity</span>
              <span>{data.humidity}%</span>
            </li>
          </ul>
        </div>

        {error ? (
          <div className="error-box">
            <h3>Error Found:</h3>
            <p>Please type correct city name...!</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default WeatherApp;
