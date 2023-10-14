import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <h1 className='text-6xl'>Paradise Streaming</h1>
      <p className="text-xl">
        Do you want to listen to my album early?
      </p>
    </>
  )
}

export default App
