import React, { useState, useEffect } from 'react'
import './App.css';

import LoadingSpinner from './components/loadingSpinner';
import Quote from './components/quote';
import GithubIcon from './components/gitIcon';
import { getRandomInt } from "./components/funcs";

function App() {
  const [quote, setQuote] = useState("");
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    const proxyurl = "https://fathomless-brushlands-29705.herokuapp.com/";
    const url = "https://zenquotes.io/api/today";

    fetch(proxyurl + url)
    .then(response => response.json())
    .then(responseJSON => setQuote("Daily Quote: " + responseJSON[0].q))
    .then(() => setIsLoading(false))
  }, [])

  const makeRequest = () => {
    setIsLoading(true);
    const int = getRandomInt(1, 2);
    const proxyurl = "https://fathomless-brushlands-29705.herokuapp.com/";
    var url = "";

    if (int===1) {
      url = "https://affirmations.dev";
      fetch(proxyurl + url) 
      .then(response => response.json())
      .then(responseJSON => setQuote(responseJSON.affirmation))
      .then(() => setIsLoading(false))
      .catch((err) => {
        setIsLoading(false);
        setQuote("Unable to access quote.")
        console.log(err)
      })
    } else {
      setIsLoading(true);
      url = "https://zenquotes.io/api/random"; 
      fetch(proxyurl + url) 
      .then(response => response.json())
      .then(responseJSON => setQuote(responseJSON[0].q))
      .then(() => setIsLoading(false))
      .catch((err) => {
        setQuote("Unable to access quote.")
        console.log(err)
      })
    }
  }

  return (
    <div>
      <header className="heading">
        <GithubIcon />
      </header>
    <div className="main-window">
      <div className="container">
        <div className="quote">
          {isLoading ? <LoadingSpinner /> : <Quote loadedQuote={quote}/>}
        </div>
        <button
          className="btn"
          onClick={() => makeRequest()}
        >Generate</button>
      </div>

      <div className="credits">
        <p>Inspirational quotes provided by <a href="https://zenquotes.io/" target="_blank"> ZenQuotes API</a> and <a href="https://github.com/annthurium/affirmations/">affirmations.dev</a>
        </p>
      </div>
    </div>
  </div>
  );
}

export default App;