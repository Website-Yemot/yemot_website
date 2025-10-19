import React from 'react';
import './EarlyAccess.css';

export const EarlyAccess = ({ isOpen, onClose }) => {
//  if (!isOpen) return null;

    return (
       <div className="popup-overlay" onClick={onClose}> 
            <div className="popup" onClick={e => e.stopPropagation()}> 
                  <img src="/XmarkPopups.svg" alt="close"  id="XmarkPopups" onClick={onClose} style={{ cursor: 'pointer' }}  />
                <div className="popup-icon">
                 <img src="/CheckmarkG.svg" alt=""  id="CheckmarkG" />
                </div>
                <div className="popup-content">
              
                <p className='a'>You've successfully signed up for early access!</p>
                <p className='b'>Until then, build your dream phone system with our current app.</p>
                  </div>
                <button className="popup-button" onClick={onClose}>
                    Create account with current app
                </button>
            </div>
        </div>
    );
};
