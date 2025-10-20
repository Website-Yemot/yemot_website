import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styleguide.css'
import { FeatureHighlight } from './components/FeatureHighlight/FeatureHighlight'
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
import { Policy } from './components/PolicyBar/Policy'
import { HireABuilder } from './components/Popups/HireABuilder'
import { EarlyAccess } from './components/Popups/EarlyAccess/EarlyAccess'
function App() {

  return (
    <>
 <Header />
<Banner id="banner" />
<Benefits id="benefits" />
<Logos id="logos" />
<section id="demos"><Demos/></section>
<Dialogue id="dialogue" />
<section  id="freefeatures"><FreeFeatures/></section>
<section  id="whyus"><FeatureHighlight/></section>
<section  id="pricing"><PlansAndPricing/></section>
<AddOns id="addons" />
<SupportIntro id="supportIntro" />
<section  id="support"><Support/></section>
<Footer id="footer" />
<Policy id="policy" />
{/* <HireABuilder /> */}
      </>

  )
}


export default App
