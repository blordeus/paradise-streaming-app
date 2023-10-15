import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import {Tra}
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'
import { useState } from 'react'

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);
  const currentSong = songs[currentSongIndex];
  return (
    <>
      <div className="container mx-auto p-6 flex-1">
        <h1 className="text-xl md:text-4xl font-bold mb-8">My Audio Player</h1>
        <ul>
          {songs.map((song, index) => (
            <TrackItem
              key={index}
              selected={index === currentSongIndex}
              title={song.title}
              trackNumberLabel={song.trackNumber}
              onClick={() => setCurrentSongIndex(index)}
            />
          ))}
        </ul>
      </div>
    <Header/>
    <Logo/>
    {/* <Description/> */}
    <MusicPlayer/>
    {/* <Footer/> */}
    </>
  )
}

export default App
