import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Hudini from './components/Hudini'
import Landing from './components/Landing'
  import Home from './components/Home'

import './App.css'

function App() {
   const [data,setData] = useState({
    user: 'Robyn',
    store: [
      { item: 'XSPS Pro Player', price: 800, discount: 0.2, hottest: false },
      { item: 'Gizem Backwatch', price: 230, discount: 0.6, hottest: false },
      { item: 'Surround Sound Pelican', price: 3099, discount: 0.05, hottest: true },
    ],
    shouldDiscount: false,
    currentPage: 'Landing',
  });
   const changePage = (page) => {
    setData({ ...data, currentPage: page })
  }


  return (
     <div className="app">

      <div className="ex-space">
        <h4 className="ex-title">Exercise 1</h4>
        <div className="exercise" id="ex-1">
          {/* your code here... */}
            <Hudini />
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 2</h4>
        <div className="exercise" id="ex-2">
          {/* your code here... */}
           <Landing user={data.user} store={data.store} />
        <Home store={data.store} />

              
        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 3</h4>
        <div className="exercise" id="ex-3">
          {/* your code here... */}
          <button onClick={() => changePage('Landing')}>Landing</button>
       <button onClick={() => changePage('Home')}>Home</button>

        {data.currentPage === 'Landing' ? (
           <Landing user={data.user} store={data.store} />
        ) : (
              <Home store={data.store} />
              )}

        </div>
      </div>

      <div className="ex-space">
        <h4 className="ex-title">Exercise 4</h4>
        <div className="exercise" id="ex-4">
          {/* your code here... */}
              <button onClick={() => setData({ ...data, shouldDiscount: !data.shouldDiscount })}>
      Toggle Discount
    </button>

    <Home store={data.store} shouldDiscount={data.shouldDiscount} />

        </div>
      </div>
    </div>
  )
}

export default App
