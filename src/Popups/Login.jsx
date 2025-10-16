import './Login.css';
import { useState } from 'react';
import person1 from '../Popups/person1.png';
import person2 from '../Popups/person2.png';
import person3 from '../Popups/person3.png';
import xIcon from '../Popups/xIcon.png';

export const Login = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
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
          <div className="login-field">
            <label className="login-label">System Phone Number:</label>
            <div className="login-input">
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9]*"
                className="login-input-field"
                placeholder="Start typing"
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/\D/g, '');
                }}
              />
            </div>
          </div>

          <div className="login-field">
            <label className="login-label">Password:</label>
            <div className="login-input">
              <input
                type={showPassword ? 'text' : 'password'}
                className="login-input-field"
                placeholder="Start typing"
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  // Eye off icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-7 0-10-8-10-8a18.45 18.45 0 0 1 5.06-6.94" />
                    <path d="M1 1l22 22" />
                    <path d="M9.88 9.88A3 3 0 0 0 12 15a3 3 0 0 0 2.12-.88" />
                    <path d="M21 12s-1.64 3.27-4.06 5.06" />
                  </svg>
                ) : (
                  // Eye icon
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="login-actions">
            <button className="login-button" type="submit">
              <span className="login-button-text">Log in</span>
            </button>
          </div>
        </form>
      </div>

      {/* RIGHT SIDE */}
      <div className="login-images">
        <div className="x-box" onClick={onClose}>
<img className="X-icon" alt="X icon" src={xIcon} />
</div>
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
