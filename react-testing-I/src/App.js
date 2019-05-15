import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [ball, setBall] = useState(0)
  const [strike, setStrike] = useState(0)
  return (
    <div className="app">
      <div className="display">
        <p className="score">{ball}</p>
        <p className="score">{strike}</p>
        <p>Ball</p>
        <p>Strike</p>
      </div>
      <button>Strike</button>
      <button>Ball</button>
      <button>Foul</button>
      <button>Hit</button>
    </div>
  )
}

export default App
