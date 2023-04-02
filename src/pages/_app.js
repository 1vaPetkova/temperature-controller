import '@/styles/globals.css'
import React, { useState } from 'react';

const displayColours = {
  "Blue": "#15006d",
  "LightBlue": "#29b3f1",
  "Cyan": "#37BC9B",
  "Green": "#008000",
  "Yellow": "#F6BB42",
  "Orange": "#ffa500",
  "Red": "#E9573F",
};

export default function Controller() {
  const [temperature, setTemperature] = useState(20);
  const [colour, setColour] = useState(displayColours.Green);

  function changeTemp(delta) {
    setTemperature(temperature + delta)
    setColour(temperatureColours(temperature));
  }

  return (
    <div className='frame'>
      <div>Temperature controller</div>
      <Display temp={temperature} displayColour={colour} />
      <br />
      <Button key='decrease' label='-' buttonColour={displayColours.Blue} handleClick={() => changeTemp(-1)} />
      <Button key='increase' label='+' buttonColour={displayColours.Red} handleClick={() => changeTemp(1)} />
    </div>
  )
}

function Display({ temp, displayColour }) {
  return (
    <div className='display' style={{ backgroundColor: displayColour }}>{temp} °C</div>
  )
}

function Button({ label, buttonColour, handleClick }) {
  return (
    <button className='button' style={{ backgroundColor: buttonColour }} onClick={handleClick}>{label}</button>
  )
}

function temperatureColours(temperature) {
  if (temperature <= -5) {
    return displayColours.Blue;
  } else if (temperature <= 10) {
    return displayColours.LightBlue;
  } else if (temperature <= 19) {
    return displayColours.Cyan;
  } else if (temperature <= 25) {
    return displayColours.Yellow
  } else if (temperature <= 30) {
    return displayColours.Orange;
  }
  return displayColours.Red;
}
