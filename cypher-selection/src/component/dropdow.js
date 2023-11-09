/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./dropdow.css";



export const DropDownMenu = ({ className, onOptionSelect }) => {
  const handleOptionClick = (option) => {
    onOptionSelect(option);
  };

  return (
    <div className={`drop-down-menu ${className}`}>
      <Dropdown>
        <Dropdown.Toggle variant="secondary" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handleOptionClick("Ceaser")}>
            Ceaser
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionClick("Base 64")}>
          Base 64
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionClick("Morse")}>
          Morse
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionClick("Inverse Casing")}>
          Reverse Casing
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleOptionClick("Vignere")}>
          Vignere
          </Dropdown.Item>
          {/* <Dropdown.Item onClick={() => handleOptionClick("Morse")}>
          Morse
          </Dropdown.Item> */}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};


export default DropDownMenu
