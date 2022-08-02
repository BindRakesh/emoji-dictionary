import React, { useState } from "react";
import './App.css';

function App() {

  var emojiDictionary = {
    "😊": "Smiling face",
    "🌹": "Rose",
    "👌": "Ok Hand",
    "👏": "Clapping Hands",
    "🤳": "Selfie"
  }

  var emojiList = Object.keys(emojiDictionary)
    

  function onChangeHandler(e){
    var userInput = e.target.value;
    console.log(userInput)
  }

  return (
    <div className="App">
      <h2 className="heading">Emoji Dictionary</h2>
      <input class="input" onChange={onChangeHandler}></input>
      
      <div className="content">{"hello"}</div>

      <div className="emojis">
        {emojiList.map(e => {
          return <p>{e}</p>
        })}
      </div>

    </div>
  );
}

export default App;
