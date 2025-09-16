import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './Header'
import { Frame38 } from './Frame38'
import { FramePurple } from './framebarp'
import { Logos } from './Logos'
import { Demos } from './Demos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Frame38></Frame38>
      <FramePurple></FramePurple>
      <Logos></Logos>
      <Demos></Demos>
      </>
  )
}

export default App
