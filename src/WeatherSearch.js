import React, { useState } from "react";
import axios from "axios";

import "./styles.css";

export default function WeatherSearch() {
  const [city, setCity] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [icon, setIcon] = useState("");

  function ApiResponse(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    let apiKey = `72bb9dab46b9ec3d65f423c63f27a9b8`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(ApiResponse);
  }

  function changeCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  if (temperature) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
        <div>
          Currently in {city}:
          <ul>
            <li>Temperature: {Math.round(temperature)}℃</li>
            <li>Description: {description}</li>
            <li>Humidity: {Math.round(humidity)}%</li>
            <li>Wind: {wind} km/h</li>
            <li>
              {" "}
              <img src={icon} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Type a city"
            onChange={changeCity}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
