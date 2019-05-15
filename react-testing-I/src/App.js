import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [strike, setStrike] = useState(0)
  const [ball, setBall] = useState(0)

  const handleStrike = () => {
    if (strike === 2) {
      setStrike(0)
      setBall(0)
    } else setStrike((strike + 1) % 3)
  }

  const handleBall = () => {
    if (ball === 3) {
      setStrike(0)
      setBall(0)
    } else setBall((ball + 1) % 4)
  }

  const handleHit = () => {
    setStrike(0)
    setBall(0)
  }

  const handleFoul = () => {
    if (strike < 2) setStrike(strike + 1)
  }

  return (
    <div className="app">
      <div className="display">
        <p data-testid='strike' className="score">{strike}</p>
        <p data-testid='ball' className="score">{ball}</p>
        <p>Strike</p>
        <p>Ball</p>
      </div>
      <button onClick={handleStrike}>Strike</button>
      <button onClick={handleBall}>Ball</button>
      <button onClick={handleHit}>Hit</button>
      <button onClick={handleFoul}>Foul</button>
    </div>
  )
}

export default App
