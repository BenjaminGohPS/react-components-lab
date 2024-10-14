import React from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import WeatherData from "./WeatherData";

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />

      <WeatherData
        day={props.day}
        conditions={props.conditions}
        time={props.time}
      />
    </div>
  );
};

export default WeatherForecast;

/*
<img src={props.img} alt={props.imgAlt} />

const WeatherForecast = (props) => {
  return (
    <div className="weather">
      <h2>{props.day}</h2>
      <WeatherIcon img={props.img} imgAlt={props.imgAlt} />

      <p>
        <span>conditions: </span>
        {props.conditions}
      </p>
      <p>
        <span>time: </span>
        {props.time}
      </p>
    </div>
  );
};
*/
