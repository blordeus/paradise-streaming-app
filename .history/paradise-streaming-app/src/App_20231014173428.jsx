import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Paradise Streaming</h1>
      <p className="read-the-docs">
        Do you want to listen to my album early?
      </p>
    </>
  )
}

export default App
