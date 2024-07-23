import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from './components/Button'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="main">
      <h1>Star Tales</h1>
      <div className="buttons">
        <Button name="Story" />
        <Button name="Science" />
      </div>
    </div>
    </>
  )
}

export default App
