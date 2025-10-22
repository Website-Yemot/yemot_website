import './HireABuilder.css';
import hireImg from '../HireABuilder/hireImg.png';
import { useState } from 'react';

export const HireABuilder = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // State למעקב אחרי האם המשתמש נגע בשדות
  const [touched, setTouched] = useState({
    email: false,
    phone: false,
    description: false,
  });

  const handleSubmit = async () => {
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/.netlify/functions/sendToMonday', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, phone, description }),
      });

      const data = await response.json();
      if (data.errors) {
        setMessage('❌ Failed to send data. Please try again.');
        console.error(data.errors);
      } else {
        setMessage('✅ Your message was sent successfully!');
        setEmail('');
        setPhone('');
        setDescription('');
        setTouched({ email: true, phone: true, description: true });
      }
    } catch (error) {
      console.error('Error sending data:', error);
      setMessage('❌ Error connecting to the server.');
    }

    setLoading(false);
  };

  const isFormValid = () => {
    return email.trim() !== '' && phone.trim() !== '' && description.trim() !== '';
  };

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
                  className={`text-wrapper-5 ${touched.email && email.trim() === '' ? 'error' : ''}`}
                  placeholder="| Type your email here"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setTouched({ ...touched, email: true })}
                  required
                />
              </div>
            </div>

            <div className="input-info">
              <div className="lables">Phone number :</div>
              <div className="div-wrapper-input">
                <input
                  type="tel"
                  className={`text-wrapper-5 ${touched.phone && phone.trim() === '' ? 'error' : ''}`}
                  placeholder="| Type your phone number"
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, ''); // רק מספרים
                    setPhone(val);
                  }}
                  onBlur={() => setTouched({ ...touched, phone: true })}
                />
              </div>
            </div>

            <div className="input-info">
              <p className="lables">Describe what's on your mind :</p>
              <div className="div-wrapper-input">
                <textarea
                  className={`text-wrapper-5 ${touched.description && description.trim() === '' ? 'error' : ''}`}
                  placeholder="| Type anything here :)"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  onBlur={() => setTouched({ ...touched, description: true })}
                />
              </div>
            </div>
          </div>

          <button className="button" onClick={handleSubmit} disabled={loading || !isFormValid()}>
            <div className="sumbit-hire">
              {loading ? 'Sending...' : 'Get back to me!'}
            </div>
          </button>

          {message && <p className="response-message">{message}</p>}
        </div>

        <div className="image-hire">
          <div className="frame-2" />
          <div className="frame-3">
            <div className="frame-4" />
            <div className="frame-5" />
          </div>
          <img className="image" alt="Hire us" src={hireImg} />
        </div>
      </div>
    </div>
  );
};
