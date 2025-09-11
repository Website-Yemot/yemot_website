import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FeatureHighlight } from './components/FeatureHighlight/FeatureHighlight.JSX'
import { PlansAndPricing } from './components/PlansAndPricing/PlansAndPricing'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Frame /> */}
      <FeatureHighlight />
      <PlansAndPricing />
    </div>
    </>
  )
}

export default App
