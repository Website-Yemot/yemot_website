import React from 'react';
import './EarlyAccess.css';

export const EarlyAccess = ({ onClose }) => {
    const handleRedirect = () => {
        window.location.href = 'https://www.call2all.co.il/SignUp/init?configCode=ivr2_US_11_25&site=ymta';
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                <button className="hire-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>

                <div className="popup-icon">
                    <img src="/CheckmarkG.svg" alt="" id="CheckmarkG" />
                </div>
                <div className="popup-content">

                    <p className='a'>You've successfully signed up for early access!</p>
                    <p className='b'>Until then, build your dream phone system with our current app.</p>
                </div>
                <button className="popup-button" onClick={handleRedirect}>
                    Create account with current app
                </button>
            </div>
        </div>
    );
};
