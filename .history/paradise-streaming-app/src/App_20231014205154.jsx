import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { TrackItem } from './components/TrackItem'
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const currentSong = songs[currentSongIndex];
  return (
    <>
    <Header/>
    <Logo/>
    {/* <Description/> */}
    <MusicPlayer/>
    {/* <Footer/> */}
    </>
  )
}

export default App
