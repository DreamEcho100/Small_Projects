import React from "react";
import WeatherEngine from "./Components/WeatherEngine.js";
import "./App.css";

function App() {
  /*
  
      <WeatherEngine defaultLocation="sydney,au"/>
      <WeatherEngine defaultLocation="washington,us"/>
  */
  return (
    <div>
      <WeatherEngine defaultLocation="Cairo,eg"/>
    </div>
  )
}

export default App;
