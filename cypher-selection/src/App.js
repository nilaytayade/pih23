import React from 'react';
import DropDownMenu  from "./component/dropdow.js";
// import Login from "./component/login.js";

import 'bootstrap/dist/css/bootstrap.min.css';
import Group2 from "./group2.js";
import { useState } from "react";
import "./App.css";

export const Desktop = () => {
    const [selectedOption, setSelectedOption] = useState("");
    const [textareaInput, setTextareaInput] = useState("");
  
    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const handleTextareaChange = (e) => {
      setTextareaInput(e.target.value);
    };
    const handleClick = () => {
      // Your click event handler logic goes here
    };

  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="ellipse" />
          <div className="text-wrapper-2">CRYPT</div>

          <img className="bg" alt="Bg" src="https://c.animaapp.com/mylpMjJO/img/bg.png" />

          <button onClick={handleClick}>
          <img
            className="iconamoon-profile"
            alt="Iconamoon profile"
            src="https://c.animaapp.com/mylpMjJO/img/iconamoon-profile-fill.svg"
          />
          </button>
          
          <Group2 className="group" /><img className="img" alt="Rectangle" src="https://c.animaapp.com/mylpMjJO/img/rectangle-2.svg" />
          
          <DropDownMenu className="drop-down-menu-default" 
         
          onOptionSelect={handleOptionSelect}
          onTextareaChange={handleTextareaChange}
        />
      <textarea 
      className="rectangle-2"
      id="exampleFormControlTextarea1" 
      rows="4" placeholder="          Enter Cypher"
      onChange={handleTextareaChange} ></textarea>
      </div>
          
       
      </div>
    </div>
  );
};


 export default Desktop;
