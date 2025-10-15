import React from 'react';
import './EarlyAccess.css';

export const EarlyAccess = ({ isOpen, onClose }) => {
    // if (!isOpen) return null;

    return (
        <div className="popup-overlay">
            <div className="popup">
                  <img src="/XmarkPopups.svg" alt=""  id="XmarkPopups" />
                <div className="popup-icon">
                 <img src="/CheckmarkG.svg" alt=""  id="CheckmarkG" />
                </div>
                <div className="popup-content">
              
                <h2 className='a'>You've successfully signed up for early access!</h2>
                <p className='b'>Until then, build your dream phone system with our current app.</p>
                  </div>
                <button className="popup-button" onClick={onClose}>
                    Create account with current app
                </button>
            </div>
        </div>
    );
};
