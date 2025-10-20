import './HireABuilder.css';
import hireImg from '../Popups/hireImg.png';
export const HireABuilder = ({ onClose }) => {
  return (
    <div className="hire-overlay" onClick={onClose}>
      <div className="hire" onClick={(e) => e.stopPropagation()}>
        <button className="hire-close" onClick={onClose} aria-label="Close">
          ✕
        </button>

        <div className="left-side-hire">
          <div className="frame">
            <p className="hire-header">
              Our expert team will build your phone system
            </p>

            <p className="we-ll-build-your">
              <span className="hire-explaination-text">
                We'll build your dream phone system from start to finish.
                You'll have full control with the login details.
              </span>
              <span className="text-wrapper-2">&nbsp;</span>
              <span className="hire-price">Starting as low as $15.</span>
            </p>
          </div>

          <div className="frame">
            <div className="input-info">
              <div className="lables">Email :</div>
              <div className="div-wrapper-input">
              <input
                  type="email"
                  className="text-wrapper-5"
                  placeholder="|Type your email here"
                  required
                />
              </div>
            </div>

            <div className="input-info">
              <div className="lables">Phone number :</div>
              <div className="div-wrapper-input">
              <input
                  type="tel"
                  className="text-wrapper-5"
                  placeholder="|Type your phone number"
                  pattern="[0-9]*"
                  inputMode="numeric"
                />              
              </div>
            </div>

            <div className="input-info">
              <p className="lables">Describe what's on your mind :</p>
              <div className="div-wrapper-input">
   <textarea
      className="text-wrapper-5"
      placeholder="|Type anything here :)"
      rows="3"
    />              </div>
            </div>
          </div>

          <button className="button">
            <div className="sumbit-hire">Get back to me!</div>
          </button>
        </div>

        <div className="image-hire">
          <div className="frame-2" />
          <div className="frame-3">
            <div className="frame-4" />
            <div className="frame-5" />
          </div>
          <img className="image" alt="Image" src={hireImg} />
        </div>
      </div>
    </div>
  );
};