import React from 'react'
import './App.css';
import { getRandomInt } from "./funcs";


function App() {
  const makeRequest = () => {
    const int = 2;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    var url = "";

    if (int===1) {
        url = "https://affirmations.dev";
        fetch(proxyurl + url) 
        .then(response => response.json())
        .then(responseJSON => console.log(responseJSON.affirmation))
        .catch(() => console.log("Unable to access " + url))
    } else {
        url = "https://zenquotes.io/api/random"; 
        fetch(proxyurl + url) 
        .then(response => response.json())
        .then(responseJSON => console.log(responseJSON[0].q))
        .catch(() => console.log("Unable to access " + url))
    }
  }


  return (
    <div className="window">
      <div className="container">
        <h1 className="affirmation">Affirmations Text</h1>
        <button
          onClick={() => makeRequest()}
        >Generate</button>
      </div>

    </div>
  );
}

export default App;
