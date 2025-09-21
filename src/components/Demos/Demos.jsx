import { useState, useRef } from "react";
import './Demos.css';

const items = [
  {
    title: "Medical Offices",
    description: "Let patients book their own appointments by phone",
    quote: `"Welcome Jessica. Your appointment is at 4 PM. Press 0 to check for earlier availability."`,
    sound: "./audio files/Medical Offices.mp3"
  },
  {
    title: "Registration Forms",
    description: "Collect information and registrations over the phone",
    quote: `"Enter your email address following this pattern ..."`,
    sound: "./audio files/Registration Forms.mp3"
  },
  {
    title: "Event Ticketing",
    description: "Sell concert tickets with real-time availability",
    quote: `"There are 400 upper balcony seats available. Select your seat now."`,
    sound: "./audio files/Event Ticketing.mp3"
  },
  {
    title: "Food Orders",
    description: "Take and process food orders with payment",
    quote: `"You're ordering 1 pie of pizza and 1 large family fries. To submit payment, press 1."`,
    sound: "./audio files/Food Orders.mp3"
  },
  {
    title: "Delivery Tracking",
    description: "Provide real-time delivery updates to customers",
    quote: `"Your order will arrive in 10 minutes."`,
    sound: "./audio files/Delivery Tracking.mp3"
  },
  {
    title: "WhatsApp Groups",
    description: "Create offline WhatsApp groups for announcements",
    quote: `"Hey everyone, school vacation was extended!"`,
    sound: "./audio files/WhatsApp Groups.mp3"
  },
];

// Global variable to stop audio first
const AudioCard = ({ item, isActive, onToggle }) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="title">{item.title}</div>
        <div className="description">{item.description}</div>
      </div>
      <div className="card-body">
        <div className="icon-wrapper">
          <img
            className="vector"
            alt="icon"
            onClick={onToggle}
            src={isActive ? "pause.svg" : "play.svg"}
          />
        </div>
        <div className="quote-wrapper">
          <p className="quote">{item.quote}</p>
        </div>
      </div>
    </div>
  );
}



export const Demos = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const audioRef = useRef(null); // audio thats palying now
  const handleToggle = (index, sound) => {
    //if theres audio playing stop it 
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // if you press again on the icon stop
    if (activeIndex === index) {
      setActiveIndex(null);
      audioRef.current = null;
      return;
    }

    //play new audio
    const newAudio = new Audio(sound);
    audioRef.current = newAudio;
    newAudio.play();
    setActiveIndex(index);

    newAudio.onended = () => {
      setActiveIndex(null);
      audioRef.current = null;
    };
  };

  const renderRow = (rowItems, rowOffset) => (
    <div className="cards-container">
      {rowItems.map((item, index) => (
        <AudioCard
          key={index}
          item={item}
          index={index + rowOffset}
          isActive={activeIndex === index + rowOffset}
          onToggle={() => handleToggle(index + rowOffset, item.sound)}
        />
      ))}
    </div>
  );

  return (
    <div className="demos">
      <div className="div">
        <div className="build-any-phone-wrapper">
          <p className="build-any-phone">
            <span className="text-wrapper">Build any </span>
            <span className="span">phone system</span>
            <span className="text-wrapper"> you could just dream of</span>
          </p>
        </div>

        <div className="cards-wrapper">
          {renderRow(items.slice(0, 3), 0)}
          {renderRow(items.slice(3, 6), 3)}
        </div>
      </div>
    </div>
  );
};
