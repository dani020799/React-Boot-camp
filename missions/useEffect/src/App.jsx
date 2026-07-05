import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Clock from './components/Clock'

import './App.css'
import Posts from './components/Posts'
import PostsResponsive from './components/PostResponsive'

function App() {


  return (
    <>
      <div className="app">

        <div className="ex-space">
          <h4 className="ex-title">Exercise 1</h4>
          <div className="exercise" id="ex-1">
            {/* your code here... */}
            <h2>Exercise 1</h2>
            <p>שעון זמן אמת המתעדכן כל שנייה:</p>
            <Clock />
          </div>
        </div>
        <div className="ex-space">
          <h4 className="ex-title">Exercise 2</h4>
          <div className="exercise" id="ex-2">
            {/* your code here... */}
            <Posts />


          </div>
        </div>
        <div className="ex-space">
          <h4 className="ex-title">Exercise 3</h4>
          <div className="exercise" id="ex-3">
            {/* your code here... */}

            <PostsResponsive />

          </div>
        </div>

      </div>
    </>
  )
}

export default App
