import "./Footer.css";
  const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
export const Footer = () => {
  return (
    <div className="footer">
      <div className="frame-2">
        <div className="div-2">
       
  <div className="logo-block">
    <img className="img" alt="vector" src={'yemotlogo.png'} />
    <div className="text-wrapper-3">
      Yemot. Build any phone system<br />you could just dream of.
    </div>
  </div>

        </div>

        <div className="div-2">
          <div className="text-wrapper-2">Product</div>
          <div className="text-wrapper-3" onClick={() => scrollToSection("demos")}>Phone Systems</div>
          <div className="text-wrapper-3" onClick={() => scrollToSection("freefeatures")}>Features</div>
        </div>

        <div className="div-2">
          <div className="text-wrapper-2">Solutions</div>
          <div className="text-wrapper-3" onClick={() => scrollToSection("whyus")}>Why us</div>
          <div className="text-wrapper-3"onClick={() => scrollToSection("pricing")}>Pricing</div>
        </div>

        <div className="div-2">
          <div className="text-wrapper-2">Get in touch</div>
          <div className="text-wrapper-3"onClick={() => scrollToSection("support")}>Contact</div>
          <div className="text-wrapper-3" onClick={() => scrollToSection("support")}>Support</div>
        </div>
      </div>
    </div>
  );
};
