import React, { useState } from "react";

// import { Group2 } from "./group2.js";
// import Button from '@mui/material/Button';
import "./App.css";

export const Desktop = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };


  

  const IconButton = () => {
    console.log('Button clicked'); // Add this line
    // Your click event handler logic goes here
  };
  

  const handleRegister = () => {
    // Add your registration logic here
    // Use the email, username, password, and confirmPassword state variables to register the user
    // You can send a request to your server or perform any necessary operations here
    // Example:
    if (password === confirmPassword) {
      // Send a request to your server to register the user
      fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          username,
          password,
        }),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Registration successful', data);
        })
        .catch(error => {
          console.error('Error registering user', error);
        });
    } else {
      console.error('Passwords do not match');
    }
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
          <div className="rectangle" >
             
            </div>
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
          onClick = {IconButton}
          >
          <img
            className="iconamoon-profile"
            src="https://c.animaapp.com/H9TAkSuZ/img/iconamoon-profile-fill.svg"
          />
          </button>

          <img
            className="img"
            alt="Rectangle"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/rectangle-2.svg"
          />
          
          <input
          className="rectangle-2" 
              type="text"
              value={email}
              onChange={handleEmailChange}
              placeholder="           Email ID"
            />
          
            <input
            className="rectangle-3" 
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="           Username"
            />
          <div />
         <div>
         <input
           className="rectangle-4" 
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="           Password"
            />
         <img
            className="vector"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector.svg"
          />
         </div>
           
          <div  >
          <input
            className="rectangle-5"
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="           Confirm Password"
            />
          <img
        
            className="vector-2"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-1.svg"
          />
          <img
            className="vector-3"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-2.svg"
          />
          <img
            className="vector-4"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-3.svg"
          />
          <img
            className="vector-5"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-4.svg"
          />
          <img
            className="vector-6"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-5.svg"
        />
          <img
            className="vector-7"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/vector-6.svg"
          /> 
          </div>
        
          <img
            className="iconamoon-profile-2"
            alt="Iconamoon profile"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/iconamoon-profile-fill-1.svg"
          />
          <img
            className="ic-outline-email"
            alt="Ic outline email"
            src="https://cdn.animaapp.com/projects/6548f914895e1774a8288a29/releases/654932d82ec71ca0795e945b/img/ic-outline-email.svg"
          />
           
          
        
         <button
            className="frame"
            onClick={handleRegister}
          >Register</button>
          
        
          
         
        </div>
      </div>
      </div>
    
  );
};

export default Desktop;
