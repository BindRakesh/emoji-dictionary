import React, { useState } from "react";
import './App.css';

function App() {

  const [meaning, setMeaning] = useState('Type or click on emoji to get meaning')

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
    var emojiMeaning = emojiDictionary[userInput];
    setMeaning(emojiMeaning+" "+userInput);
    if(emojiMeaning === undefined){
      setMeaning("We don't have this emoji in our Database")  
    }
  }

  function onClickHandler(e){
    var emojiKey = e.target.textContent;
    var emojiMeaning = emojiDictionary[emojiKey];
    setMeaning(emojiMeaning+" "+ emojiKey)
  }

  return (
    <div className="App">
      <h2 className="heading">Emoji Dictionary</h2>
      <input className="input" onChange={onChangeHandler}></input>
      
      <div className="content">{meaning}</div>

      <div className="emojis">
        {emojiList.map(e => {
          return <p key={e} onClick={e => onClickHandler(e)}>{e}</p>
        })}
      </div>

    </div>
  );
}

export default App;
