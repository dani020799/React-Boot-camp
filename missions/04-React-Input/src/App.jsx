import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Exercise1 from './components/Exercise1'
import Exercise2 from './components/Exercise2'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {/* your code here... */}
            <Exercise1 />
        </div>
      </div>
      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
                  <Exercise2 />

        </div>
      </div>
    </>
  );
}

export default App
