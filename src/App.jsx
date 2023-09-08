import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './component/Nav'
import Hero from './component/Hero'
import About from './component/About'
import Healthy from './component/Healthy'
import Lite from './component/Lite'
import Subs from './component/Subs'
import Footer from './component/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Nav/>
     <About/>
     <Healthy/>
     <Lite/>
     <Subs/>
     <Footer/>
    </>
  )
}

export default App
