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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* <Frame /> */}
        {/* <FeatureHighlight /> */}
        {/* <PlansAndPricing /> */}
        {/* <AddOns></AddOns> */}
        {/* <SupportIntro></SupportIntro> */}
        {/* <FreeFeatures></FreeFeatures> */}
        <Support></Support>
      </div>
    </>
  )
}


export default App
