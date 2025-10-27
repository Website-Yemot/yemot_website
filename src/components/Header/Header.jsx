import './main-header.css'
import { Login } from '../Popups/Login/Login'
import { useState } from 'react'
import { EarlyAccessSignup } from '../Popups/EarlyAccessSignup/EarlyAccessSignup';
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export const Header = ({ onLoginClick }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  return (<>

    <div className="main-header">

      <div className="div">
        <img className="layer" alt="Layer" src={"yemotlogo.png"} />

        <div className="navbar">
          <div className="text-wrapper" onClick={() => scrollToSection("demos")}>Phone Systems</div>
          <div className="text-wrapper-2" onClick={() => scrollToSection("freefeatures")}>Features</div>
          <div className="text-wrapper-2" onClick={() => scrollToSection("whyus")}>Why us</div>
          <div className="text-wrapper-3" onClick={() => scrollToSection("pricing")}>Pricing</div>
          <div className="text-wrapper-4" onClick={() => scrollToSection("support")}>Support</div>
        </div>
        <div className="depth-main-header">
          <div className="div-wrapper">
            <div className="text-wrapper-5" onClick={onLoginClick}>Log in</div>
          </div>

          <div className="div-wrapper-2">
            <div className="text-wrapper-6" onClick={() => setShowCreateAccount(true)}>Start Free</div>
          </div>
        </div>
      </div>
    </div>
    {showLogin && (
      <Login onClose={() => setShowLogin(false)} />
    )}
    {showCreateAccount && <EarlyAccessSignup
      onClose={() => setShowCreateAccount(false)}
      onSubmit={() => setShowCreateAccount(false)}
      extraButton
    />}
  </>

  );
};
