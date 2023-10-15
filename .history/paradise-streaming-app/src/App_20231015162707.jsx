import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {

  return (
    <>
    <div className='flex flex-col ml-auto'>
      <Header/>
      <Logo/>
      {/* <Description/> */}
      <MusicPlayer/>
      {/* <Footer/> */}
    </div>
    </>
  )
}

export default App
