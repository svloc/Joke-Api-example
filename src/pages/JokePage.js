import React, { useState } from 'react';
import Axios from 'axios';
import '../style/JokePage.css';
export default function JokePage() {
  const [joke, setJoke] = useState('');
  const [ans, setAns] = useState('');
  const Getjoke = () => {
    Axios.get('https://official-joke-api.appspot.com/random_joke').then(res => {
      setJoke(res.data.setup);
      setAns(res.data.punchline);
    });
  };

  return (
    <>
      <div className="container">
        <div className="joke-btn">
          <button onClick={Getjoke} className="btn-grad">
            Get Joke
          </button>
        </div>
        <div className="joke-1">
          
          <h2>{joke}</h2><br/>
          { joke &&
          <h1>Ans is : {ans}</h1>
}
        </div>
      </div>
    </>
  );
}
