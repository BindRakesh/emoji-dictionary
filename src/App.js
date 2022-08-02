import React, { useState } from "react";
import './App.css';

function App() {

  

  

  function onChangeHandler(e){
    var userInput = e.target.value;
    console.log(userInput)
  }

  return (
    <div className="App">
      <h2 className="heading">Emoji Dictionary</h2>
      <input class="input" onChange={onChangeHandler}></input>
      
      <div className="content">{"hello"}</div>

      <div className="emojis"></div>

    </div>
  );
}

export default App;
