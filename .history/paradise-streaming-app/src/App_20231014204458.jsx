import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
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
    <Header/>
    <Logo/>
    {/* <Description/> */}
    <MusicPlayer/>
    {/* <Footer/> */}
    </>
  )
}

export default App
