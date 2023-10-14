import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Logo className="h-3 w-3"/>
    </>
  )
}

export default App
