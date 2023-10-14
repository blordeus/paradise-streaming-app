import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Description } from './components/Description'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Logo/>
    <Description/>
    </>
  )
}

export default App
