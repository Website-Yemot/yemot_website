import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Banner } from './Banner'
import { Benefits } from './Benefits'
import { Logos } from './Logos'
import { Demos } from './Demos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Benefits></Benefits>
      <Logos></Logos>
      <Demos></Demos>
      </>
  )
}

export default App
