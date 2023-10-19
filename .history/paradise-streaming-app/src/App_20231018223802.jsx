import './App.css'
import { Header } from './components/Header'
import { Logo } from './components/Logo'
import { Description } from './components/Description'
import { MusicPlayer } from './components/MusicPlayer'
import { Footer } from './components/Footer'

function App() {

  return (
    <>
    <div className='space-y-6'>
      <Header/>
      <Logo/>
      <Description className/>
      <MusicPlayer/>
      <Footer/>
    </div>
    </>
  )
}

export default App
