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
import { HireABuilder } from './components/Popups/HireABuilder/HireABuilder'
import { EarlyAccess } from './components/Popups/EarlyAccess/EarlyAccess'
import { EarlyAccessSignup } from './components/Popups/EarlyAccessSignup/EarlyAccessSignup'
import { Login } from './components/Popups/Login/Login';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showEarlyAccessSignup, setShowEarlyAccessSignup] = useState(false);
  const [showEarlyAccess, setShowEarlyAccess] = useState(false);
  const handleLoginSuccess = () => {
    setShowLogin(false);
    setShowEarlyAccessSignup(true);
  };

  const handleEarlyAccessSubmit = () => {
    setShowEarlyAccessSignup(false);
    setShowEarlyAccess(true);
  };
  return (
    <>
      <Header onLoginClick={() => setShowLogin(true)} />
      {showEarlyAccessSignup && <EarlyAccessSignup
        onClose={() => setShowEarlyAccessSignup(false)}
        onSubmit={handleEarlyAccessSubmit}
      />}
      {showLogin && <Login
        onClose={() => setShowLogin(false)}
        onFirstLogin={handleLoginSuccess}
      />
      }
      {showEarlyAccess && (
        <EarlyAccess onClose={() => setShowEarlyAccess(false)} />
      )}
      <Banner id="banner" />
      <Benefits id="benefits" />
      <Logos id="logos" />
      <section id="demos"><Demos /></section>
      <section  id="dialogue"><Dialogue/></section>
      <section id="freefeatures"><FreeFeatures /></section>
      <section id="whyus"><FeatureHighlight /></section>
      <section id="pricing"><PlansAndPricing /></section>
      <AddOns id="addons" />
      <SupportIntro id="supportIntro" />
      <section id="support"><Support /></section>
      <Footer id="footer" />
      <Policy id="policy" />
    </>

  )
}


export default App
