import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
    const getClassName = (temperature) => {
      if (temperature < 15) {
        return 'freezing'
      }

      if (temperature >= 15 && temperature <= 30) {
        return 'fair'
      }

      return 'hell-scape'
    }

    return (
      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>

        <div className="exercise" id="ex-2">
          <div id="weatherBox" className={getClassName(10)}></div>
        </div>
      </div>
    )
  }


export default App
