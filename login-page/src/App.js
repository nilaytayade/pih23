import React, { useState } from "react";
import { Group2 } from "./componenet/group2.js";
import { Login } from "./componenet/login.js";
import "./App.css";

export const Index = () => {
  const [username, setUsername] = useState(""); // Corrected variable name
  const handleUsername = (e) => {
    setUsername(e.target.value); // Corrected function name
  };
  const [password, setPassword] = useState(""); // Corrected variable name
  const handlePassword = (e) => {
    setPassword(e.target.value); // Corrected function name
  };

  const handleClick1 = () => {
    console.log('Button clicked'); // Add this line
    // Your click event handler logic goes here
  };

  return (
    <div className="index">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img
            className="ph-key-fill"
            alt="Ph key fill"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/ph-key-fill.svg"
          />
          <div className="rectangle" />
          <div className="ellipse" />
          <img
            className="eva-cube-outline"
            alt="Eva cube outline"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/6548f92fdfc11137fa5dd93b/img/evacubeoutline2.svg"
          />
          <div className="div">CRYPT</div>
          <img
            className="bg"
            alt="Bg"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/6548f92fdfc11137fa5dd93b/img/bg.png"
          />
           <button
  
  // onClick={handleClick} // Add an onClick event handler for the button
>
  <img
  className="iconamoon-profile"
    alt="Iconamoon profile"
    src="https://c.animaapp.com/H9TAkSuZ/img/iconamoon-profile-fill.svg"
  />
</button>
          <Group2 className="group" />
          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654c96fe2e1fe8e18139862e/img/rectangle-2.svg"
          />
          
            <input
            className="rectangle-2"
              type="text"
              value={username}
              onChange={handleUsername}
              placeholder=""
            />
          
          <input
            className="rectangle-3"
              type="text"
              value={password}
              onChange={handlePassword}
              placeholder=""
            />
          <img
            className="iconamoon-profile-2"
            alt="Iconamoon profile"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/iconamoon-profile-fill-1.svg"
          />
          <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654c96fe2e1fe8e18139862e/img/vector.svg"
          />
          <button
          onClick={handleClick1}
          >
          <Login className="LOGIN-instance" 
          property1="default" 
          username={username}
          password={password}
          />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Index;