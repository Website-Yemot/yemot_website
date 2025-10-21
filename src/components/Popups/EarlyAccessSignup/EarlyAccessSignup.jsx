import './EarlyAccessSignup.css';
import '@fontsource/poppins/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

export const EarlyAccessSignup = ({ onClose }) => {
    return (
        <div className="signup-overlay" onClick={onClose}>
            <div className="signup-container" onClick={(e) => e.stopPropagation()}>
                <img src="/XmarkPopups.svg" alt="close" id="XmarkPopups" onClick={onClose} />
                <div className="signup-content">
                    <div className="top">
                        <div className="signup-title">
                            Our new app is <span className="highlight">on its way</span>
                        </div>
                        <div className="signup-subtitle">
                            Experience our beloved app like never before with its sleek, user-friendly redesign.
                        </div>
                    </div>
                    <form className="signup-form">
                        <div className='signup-email'>
                            <label className="signup-label">Email:</label>
                            <input
                                type="email"
                                placeholder="Type your email here"
                                className="signup-input"
                            />
                        </div>
                        <button type="submit" className="signup-button">
                            Sign up for early access
                        </button>
                    </form>
                </div>
                <div className="background-wrapper">
                    <div className="background1">
                    </div>
                    <div className="background-wrapper-bottom">
                        <div className="background2">
                        </div>
                        <div className="background3">
                        </div>
                    </div>
                    <div className="signup-image">
                        <img src={"Hero_Screen.png"} alt="App preview" />
                    </div>
                </div>
            </div>
        </div>
    );
};
