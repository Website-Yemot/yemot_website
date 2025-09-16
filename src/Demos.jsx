import './Demos.css';
import './styleguide.css';
import play from "./play.svg";

const items = [
  {
    title: "Medical Offices",
    description: "Let patients book their own appointments by phone",
    quote: `"Welcome Jessica. Your appointment is at 4 PM. Press 0 to check for earlier availability."`,
  },
  {
    title: "Registration Forms",
    description: "Collect information and registrations over the phone",
    quote: `"Enter your email address following this pattern ..."`,
  },
  {
    title: "Event Ticketing",
    description: "Sell concert tickets with real-time availability",
    quote: `"There are 400 upper balcony seats available. Select your seat now."`,
  },
  {
    title: "Food Orders",
    description: "Take and process food orders with payment",
    quote: `"You're ordering 1 pie of pizza and 1 large family fries. To submit payment, press 1."`,
  },
  {
    title: "Delivery Tracking",
    description: "Provide real-time delivery updates to customers",
    quote: `"Your order will arrive in 10 minutes."`,
  },
  {
    title: "WhatsApp Groups",
    description: "Create offline WhatsApp groups for announcements",
    quote: `"Hey everyone, school vacation was extended!"`,
  },
];

export const Demos = () => {
  const firstRow = items.slice(0, 3);
  const secondRow = items.slice(3, 6);

  const renderRow = (rowItems) => (
    <div className="cards-container">
      {rowItems.map((item, index) => (
        <div className="card" key={index}>
          <div className="card-header">
            <div className="title">{item.title}</div>
            <div className="description">{item.description}</div>
          </div>
          <div className="card-body">
            <div className="icon-wrapper">
              <img className="vector" alt="icon" src={play} />
            </div>
            <div className="quote-wrapper">
              <p className="quote">{item.quote}</p>
            </div>
          </div>
        </div>
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
          {renderRow(firstRow)}
          {renderRow(secondRow)}
        </div>
      </div>
    </div>
  );
};
