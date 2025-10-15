import './Login.css';
import person1 from '../Popups/person1.png';
import person2 from '../Popups/person2.png';
import person3 from '../Popups/person3.png';

export const Login = () => {
  return (
    <div className="login-container">
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
                type="text"
                className="login-input-field"
                placeholder="Start typing"
              />
            </div>
          </div>

          <div className="login-field">
            <label className="login-label">Password:</label>
            <div className="login-input">
              <input
                type="password"
                className="login-input-field"
                placeholder="Start typing"
              />
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
  <div className="person1">
    <div className="border1">
      <img className="img" alt="person 1" src={person1} />
    </div>
  </div>

  <div className="person-row">
    <div className="person2">
      <img className="img" alt="person 2" src={person2} />
    </div>

    <div className="person3">
      <img className="img" alt="person 3" src={person3} />
    </div>
  </div>
        </div>
    </div>
  );
};
