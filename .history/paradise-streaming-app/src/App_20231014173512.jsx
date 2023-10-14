import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-3xl'>Paradise Streaming</h1>
      <p className="text-xl">
        Do you want to listen to my album early?
      </p>
    </>
  )
}

export default App
