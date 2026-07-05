import { Routes, Route } from 'react-router-dom'
import CategoryList from './components/CategoryList'
import Entities from './components/Entities'
import EntityDescription from './components/EntityDescription'
import './App.css'

const database = {
  potions: [
    { name: 'Felix Felicis', description: 'Liquid Luck. Makes the drinker lucky for a period of time.' },
    { name: 'Polyjuice Potion', description: 'Allows the drinker to assume the form of another person.' },
    { name: 'Amortentia', description: 'The most powerful love potion in the world.' }
  ],
  charms: [
    { name: 'Accio', description: 'Summons an object towards the caster.' },
    { name: 'Expecto Patronum', description: 'Creates a patronus to ward off Dementors.' },
    { name: 'Wingardium Leviosa', description: 'Levitates objects.' }
  ]
}

function App() {
  const getCategoryData = (category) => {
    return database[category] || null
  }

  const getEntityData = (category, entityName) => {
    const categoryData = database[category]
    if (!categoryData) return null
    return categoryData.find(item => item.name.toLowerCase() === entityName.toLowerCase()) || null
  }

  return (
    <div className="app">
      <div className="ex-space">
        <h4 className="ex-title font-sans">Harry Potter Wiki</h4>
        <CategoryList />

        <Routes>
          <Route path="/wiki/:category" element={<Entities getCategoryData={getCategoryData} />} />
          <Route path="/wiki/:category/:entity" element={<EntityDescription getEntityData={getEntityData} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
