import { useState } from 'react'

  const Exercise2 = () => {
    const [name, setName] = useState('')
    const [fruit, setFruit] = useState('')

    const handleFruitChange = (event) => {
      const selectedFruit = event.target.value

      setFruit(selectedFruit)

      console.log(`${name} selected ${selectedFruit}`)
    }

    return (
      <div>
        <input
          id="name-input"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <select
          id="select-input"
          onChange={handleFruitChange}
          value={fruit}
        >
          <option value="">Choose fruit</option>
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
        </select>
      </div>
    )
  }

  export default Exercise2
