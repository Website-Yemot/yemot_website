import './Login.css';
import { useState } from 'react';
import person1 from '../Login/person1.png';
import person2 from '../Login/person2.png';
import person3 from '../Login/person3.png';
import xIcon from '../Login/xIcon.png';

export const Login = ({ onClose, onFirstLogin }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [touched, setTouched] = useState({ phone: false, password: false });

  const handleLoginClick = (e) => {
    e.preventDefault();

    // If any field is empty, mark all as touched to show red
    if (!phone.trim() || !password.trim()) {
      setTouched({ phone: true, password: true });
      return;
    }
    // In the future: replace this check with a real check against the server, 
    // for example: 
    // const response = await fetch(/api/users/${phoneNumber}/status); 
    // const data = await response.json(); 
    // const isFirstLogin = data.isFirstLogin; 
    // localStorage.setItem("hasLoggedIn", "true"); 
    // onFirstLogin(); } else { 
    // In the future: change to navigate to the system (redirect / dashboard) 
    // for example: 
    // window.location.href = "/dashboard";

    const firstTime = !localStorage.getItem("hasLoggedIn");
    if (firstTime) {
      localStorage.setItem("hasLoggedIn", "true");
      onFirstLogin();
    } else {
      onClose();
    }
  };

  const isFormValid = phone.trim() !== '' && password.trim() !== '';

  // Function to handle the blur event and mark a field as touched
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  return (
    <div className="login-overlay" onClick={onClose}>
      <div className="login-container" onClick={(e) => e.stopPropagation()}>
        {/* LEFT SIDE */}
        <div className="login-content">
          <header className="login-header">
            <div className="login-title">Welcome back!</div>
            <p className="login-subtitle">
              <span className="login-text">Don't have an account?</span>
              <span className="login-separator">&nbsp;</span>
              <span className="login-link">Create for free</span>
            </p>
          </header>

          <form className="login-form">
            {/* PHONE */}
            <div className="login-field">
              <label className="login-label">System Phone Number:</label>
              <div className="login-input">
                <input
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  className={`login-input-field ${touched.phone && phone.trim() === '' ? 'error' : ''}`}
                  placeholder="Start typing"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setPhone(val);
                    if (touched.phone && val.trim() !== '') {
                      setTouched(prev => ({ ...prev, phone: false }));
                    }
                  }}
                  onBlur={() => handleBlur('phone')} // Added onBlur
                />
              </div>
            </div>

            {/* PASSWORD */}
            <div className="login-field">
              <label className="login-label">Password:</label>
              <div className="login-input">
                <input
                  type={showPassword ? 'text' : 'password'}
                  className={`login-input-field ${touched.password && password.trim() === '' ? 'error' : ''}`}
                  placeholder="Start typing"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (touched.password && e.target.value.trim() !== '') {
                      setTouched(prev => ({ ...prev, password: false }));
                    }
                  }}
                  onBlur={() => handleBlur('password')} // Added onBlur
                />
                <button
                  type="button"
                  className="toggle-password"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    // Eye off icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.45 18.45 0 0 1 5.06-6.94" />
                      <path d="M1 1l22 22" />
                      <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                      <path d="M21 12s-1.64 3.27-4.06 5.06" />
                    </svg>
                  ) : (
                    // Eye icon
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke="currentColor"
                      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* BUTTON */}
            <div className="login-actions">
              <button
                className="login-button"
                type="submit"
                onClick={handleLoginClick}
                disabled={!isFormValid}
              >
                <span className="login-button-text">Log in</span>
              </button>
            </div>
          </form>
        </div>
        <button className="hire-close" onClick={onClose} aria-label="Close">
          ✕
        </button>
        {/* RIGHT SIDE */}
        <div className="Images-login">


          <div className="person1">
            <div className="person1-border1">
              <div className='person1-border2'>
                <img className="img" alt="person 1" src={person1} />
              </div>
            </div>
          </div>

          <div className="person-row">
            <div className="person2">
              <div className='person2-border1'>
                <div className='person2-border2'>
                  <img className="img" alt="person 2" src={person2} />
                </div>
              </div>
            </div>

            <div className="person3">
              <div className='person3-border1'>
                <div className='person3-border2'>
                  <img className="img" alt="person 3" src={person3} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};