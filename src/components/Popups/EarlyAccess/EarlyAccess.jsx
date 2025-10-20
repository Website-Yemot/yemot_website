import React from 'react';
import './EarlyAccess.css';

export const EarlyAccess = ({ onClose }) => {
    const handleRedirect = () => {
        window.location.href = 'https://www.google.com/url?q=https%3A%2F%2Fcall2all.co.il%2FSignUp%2Finit%3FconfigCode%3Divr2_10_23%26site%3Dymta&sa=D&sntz=1&usg=AOvVaw13rFqO5uSbwqn-sfi9oU12';
    };

    return (
        <div className="popup-overlay" onClick={onClose}>
            <div className="popup" onClick={e => e.stopPropagation()}>
                <img src="/XmarkPopups.svg" alt="close" id="XmarkPopups" onClick={onClose} style={{ cursor: 'pointer' }} />
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
