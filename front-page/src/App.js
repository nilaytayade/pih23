import React from "react";
import Group2 from "./Group2.js";
import "./App.css";

export const Desktop = () => {
    const handleClick = () => {
    // Your click event handler logic goes here
  };
  const handleClick1 = () => {
    // Your click event handler logic goes here
  };
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <img
            className="eva-cube-outline"
            alt="Eva cube outline"
            src="https://c.animaapp.com/H9TAkSuZ/img/evacubeoutline2-2.svg"
          />
          <div className="text-wrapper">CRYPT</div>
          <img className="bg" alt="Bg" src="https://c.animaapp.com/H9TAkSuZ/img/bg.png" />
          <button
  
  onClick={handleClick} // Add an onClick event handler for the button
>
  <img
  className="iconamoon-profile"
    alt="Iconamoon profile"
    src="https://c.animaapp.com/H9TAkSuZ/img/iconamoon-profile-fill.svg"
  />
</button>

          <img className="pngimg" alt="Pngimg" src="https://c.animaapp.com/H9TAkSuZ/img/pngimg-1.png" />
          <Group2 className="group" />
         
            <div 
            className="frame"
            >
            <button  onClick={handleClick1}>
              Click to Start
              </button>
              </div>
         
        </div>
      </div>
    </div>
  );
};

export default Desktop;