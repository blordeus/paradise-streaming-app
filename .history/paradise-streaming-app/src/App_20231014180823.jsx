import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Logo/>
    {/* <Description/> */}
    {/* <MusicPlayer/> */}
    <Footer/>
    </>
  )
}

export default App
