import React from "react";
import WeatherCard from "./Components/WeatherCard/Component.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-20} condation="Dust" />
      <WeatherCard temp={35} condation="Clear" />
      <WeatherCard temp={-15} condation="Haze" />
      <WeatherCard temp={25} condation="Clouds" />
    </div>
  );
}

export default App;
