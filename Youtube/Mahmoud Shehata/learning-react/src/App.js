import React from "react";
import WeatherCard from "./Components/WeatherCard/Component.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <WeatherCard temp={-20} />
      <WeatherCard temp={35} />
      <WeatherCard temp={-15} />
      <WeatherCard temp={25} />
    </div>
  );
}

export default App;
