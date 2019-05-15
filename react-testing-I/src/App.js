import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  const handleStrike = () => {
    if (strike === 3) {
      setStrike(0)
      setBall(0)
    } else setStrike((strike + 1) % 4)
  }

  const handleBall = () => {
    if (ball === 4) {
      setStrike(0)
      setBall(0)
    } else setBall((ball + 1) % 5)
  }

  const handleHit = () => {
    setStrike(0)
    setBall(0)
  }

  return (
    <div className="app">
      <div className="display">
        <p className="score">{strike}</p>
        <p className="score">{ball}</p>
        <p>Strike</p>
        <p>Ball</p>
      </div>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button>Foul</button>
      <button onClick={handleHit}>Hit</button>
    </div>
  )
}

export default App
