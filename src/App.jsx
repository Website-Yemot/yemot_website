import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FeatureHighlight } from './components/FeatureHighlight/FeatureHighlight.JSX'
import { PlansAndPricing } from './components/PlansAndPricing/PlansAndPricing'
import { AddOns } from './components/AddOns/AddOns'
import { SupportIntro } from './components/Support/SupportIntro'
import { FreeFeatures } from './components/FreeFeatures/FreeFeatures'
import { Support } from './components/Support/Support'
import { Header } from './Header'
import { Banner } from './Banner'
import { Benefits } from './Benefits'
import { Logos } from './Logos'
import { Demos } from './Demos'
import { Dialogue } from './Dialogue'

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
      </>

  )
}


export default App
