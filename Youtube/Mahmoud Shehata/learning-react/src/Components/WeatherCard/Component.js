import React from "react";
import styled from "@emotion/styled";
import Location from "./Location.js";

const WeatherCard = (props) => {
  let highColor, lowColor, bg;

  if (props.temp > 12) {
    highColor = (1 - (props.temp - 12) / 28) * 255;
    lowColor = highColor - 150;
    bg = `
      rgb(255, ${highColor}, 0),
      rgb(255, ${lowColor}, 0)`;
  } else if (props.temp <= 12) {
    highColor = (1 - (props.temp + 20) / 32) * 255;
    lowColor = highColor - 150;
    bg = `
      rgb(0, ${highColor}, 255),
      rgb(0, ${lowColor}, 255)`;
  }

  const Card = styled.div`
    margin: 0 auto;
    background: linear-gradient(to top, ${bg});
    width: 12.5rem;
    height: 15rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
  `;

  return (
    <Card>
      <Location />
      <img className="icon" src="" alt="Weather Icon" />
      <h1 className="temp">{props.temp} ْC</h1>
      <h3 className="condation">Cloudy</h3>
    </Card>
  );
};

export default WeatherCard;
