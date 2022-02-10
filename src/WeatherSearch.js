import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    temperature: "22",
    city: "Madrid",
    date: "Wednesday, 20 Oct",
    description: "Partly cloudy",
    humidity: "20",
    wind: "3.4",
  };
  return (
    <div className="Weather">
      <div className="container">
        <div className="weather-app">
          <div className="weather-wrapper">
            <form className="mb-4">
              <div className="row">
                <div className="col-9">
                  <input
                    type="search"
                    placeholder="Type a city..."
                    className="form-control"
                    autoComplete="off"
                  />
                </div>
                <div className="col-3">
                  <input
                    type="submit"
                    vlaue="search"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
            <h1>In {weatherData.city}</h1>
            <div className="date-time">{weatherData.date}</div>
            <div className="weather-description">
              {" "}
              {weatherData.description}
            </div>
            <br />
            <div className="row">
              <div className="col-2">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="partly-cloudy"
                  className="main-icon"
                />
              </div>
              <div className="col-6">
                <div className="temp-description">
                  <ul>
                    <li>
                      <span className="temp">{weatherData.temperature}</span>
                      <a href="/"> ℃ </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-4">
                <ul className="temp-details">
                  <li>Humidity:{weatherData.humidity}</li>
                  <li>Wind: {weatherData.wind}</li>
                </ul>
              </div>
            </div>
            <div className="weather-forecast"></div>
          </div>
          <small className="github">
            <a
              href="https://github.com/nicolefrei8/Strawberry-Weather-App"
              target="_blank "
              rel="noreferrer"
            >
              Open-source code{" "}
            </a>
            by Nicole Frei
          </small>
        </div>
      </div>
    </div>
  );
}
