import './EarlyAccessSignup.css';

export const EarlyAccessSignup = ({ onClose, onSubmit, extraButton }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
    };
    const handleOldAppRedirect = () => {
        window.location.href = 'https://www.call2all.co.il/SignUp/init?configCode=ivr2_US_11_25&site=ymta';
    };
    return (
        <div className="signup-overlay" onClick={onClose}>
            <div className="signup-container" onClick={(e) => e.stopPropagation()}>
                <button className="hire-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>

                <div className="signup-content">
                    <div className="top">
                        <div className="signup-title">
                            Our new app is <span className="highlight">on its way</span>
                        </div>
                        <div className="signup-subtitle">
                            Experience our beloved app like never before with its sleek, user-friendly redesign.
                        </div>
                    </div>
                    <form className="signup-form" onSubmit={handleSubmit}>
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
                        {extraButton && (
                            <button type="button" className="create-account-button" onClick={handleOldAppRedirect}>
                                Create account with old app
                            </button>
                        )}
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
                    </div></div>
                <div className="signup-image">
                    <img src={"Hero_Screen.png"} alt="App preview" />
                </div>
            </div>
        </div>
    );
};