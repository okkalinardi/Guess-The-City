import React, { useState, useEffect } from 'react';
import './App.css';
import GoogleMap from './components/GoogleMap'
import { cities } from './cityData'

function App() {
  const [playerLife, setPlayerLife] = useState(1500)
  const [question, setQuestion] = useState('')
  const [score, setScore] = useState(0)

  useEffect(()=> {
    const randomCity = Math.floor(Math.random() * cities.length-1)
    setQuestion(cities[randomCity].name)
  }, [cities, question])

  return (
    <div className="App">
      <div className="AppTitle">Place The City!</div>
      <div className="ScoreBoard">
        <div className="ScoreContainer">
          {score} Cities Placed
        </div>
        <div className="ScoreContainer">
          {playerLife} kilometers left
        </div>
      </div>
        <div className="Question">Select the location of '{question}'</div>
      <div className="MapContainer">
        <GoogleMap />
      </div>
      <div className="PlaceButtonContainer">
        <button className="PlaceButton">Place</button>
      </div>
    </div>
  );
}

export default App;
