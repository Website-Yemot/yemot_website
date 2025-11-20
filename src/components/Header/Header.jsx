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
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="main-header">
        <div className="div">
          <img className="layer" alt="Layer" src={"yemotlogo.png"} />

          {/* Desktop navbar */}
          <div className="navbar">
            <div className="text-wrapper" onClick={() => {scrollToSection("demos");setMenuOpen(false);} }>Phone Systems</div>
            <div className="text-wrapper-2" onClick={() => scrollToSection("freefeatures")}>Features</div>
            <div className="text-wrapper-2" onClick={() => scrollToSection("whyus")}>Why us</div>
            <div className="text-wrapper-3" onClick={() => scrollToSection("pricing")}>Pricing</div>
            <div className="text-wrapper-4" onClick={() => scrollToSection("support")}>Support</div>
          </div>

          {/* Mobile hamburger button */}
          

          <div className="depth-main-header">
            <div className="div-wrapper" onClick={onLoginClick}>
              <div className="text-wrapper-5">Log in</div>
            </div>

            <div className="div-wrapper-2" onClick={() => setShowCreateAccount(true)}>
              <div className="text-wrapper-6">Start Free</div>
            </div>
          </div>
        </div>
      </div>
<div className="hamburger-menu" onClick={() => setMenuOpen(true)}>
            ☰
          </div>
      {/* Sidebar overlay */}
      <div className={`sidebar-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />

      {/* Sidebar itself */}
      <div className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-close" onClick={() => setMenuOpen(false)}>✖</div>

        <div className="sidebar-item" onClick={() => {scrollToSection("demos");setMenuOpen(false);}}>Phone Systems</div>
        <div className="sidebar-item" onClick={() => {scrollToSection("freefeatures");setMenuOpen(false);}}>Features</div>
        <div className="sidebar-item" onClick={() => {scrollToSection("whyus");setMenuOpen(false);}}>Why us</div>
        <div className="sidebar-item" onClick={() => {scrollToSection("pricing");setMenuOpen(false);}}>Pricing</div>
        <div className="sidebar-item" onClick={() => {scrollToSection("support");setMenuOpen(false);}}>Support</div>
      </div>

      {showLogin && (
        <Login onClose={() => setShowLogin(false)} />
      )}

      {showCreateAccount && (
        <EarlyAccessSignup
          onClose={() => setShowCreateAccount(false)}
          onSubmit={() => setShowCreateAccount(false)}
          extraButton
        />
      )}
    </>
  );
};
