import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styleguide.css'
import { FeatureHighlight } from './components/FeatureHighlight/FeatureHighlight.JSX'
import { PlansAndPricing } from './components/PlansAndPricing/PlansAndPricing'
import { AddOns } from './components/AddOns/AddOns'
import { SupportIntro } from './components/Support/SupportIntro'
import { FreeFeatures } from './components/FreeFeatures/FreeFeatures'
import { Support } from './components/Support/Support'
import { Header } from './components/Header/Header'
import { Banner } from './components/Banner/Banner'
import { Benefits } from './components/Benefits/Benefits'
import { Logos } from './components/Logos/Logos'
import { Demos } from './components/Demos/Demos'
import { Dialogue } from './components/Dialogue/Dialogue'
import { Footer } from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
      <Header></Header>
      <Banner></Banner>
      <Benefits></Benefits>
      <Logos></Logos>
      <Demos></Demos>
      <Dialogue></Dialogue>
      <FreeFeatures></FreeFeatures> 
      <FeatureHighlight /> 
      <PlansAndPricing />
      <AddOns></AddOns>
      <SupportIntro></SupportIntro>
      <Support></Support>
      <Footer></Footer>
      </>

  )
}


export default App
