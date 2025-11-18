import React from 'react';
import "./Footer.css";
// הפונקציה לגלילה (scroll) נשארה זהה
const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export const Footer = () => {
  // סגנון ה-CSS מוכנס ישירות לרכיב ה-React באמצעות תגית <style>


  return (
    <>
      <div className="app-footer">
        
        {/* FOOTER CONTENT */}
        <div className="footer-content-wrapper">
          
          {/* עמודת לוגו ותיאור */}
          <div className="footer-logo-block">
            <img className="footer-logo-img" alt="vector" src={'yemotlogo.png'} />
            <div className="footer-description">
              Yemot. Build any phone system you could just dream of.
            </div>
          </div>
          
          {/* עמודת מוצר */}
          <div className="footer-column">
            <div className="footer-column-title">Product</div>
            <div className="footer-link" onClick={() => scrollToSection("demos")}>
              Phone Systems
            </div>
            <div className="footer-link" onClick={() => scrollToSection("freefeatures")}>
              Features
            </div>
          </div>

          {/* עמודת פתרונות */}
          <div className="footer-column">
            <div className="footer-column-title">Solutions</div>
            <div className="footer-link" onClick={() => scrollToSection("whyus")}>
              Why us
            </div>
            <div className="footer-link" onClick={() => scrollToSection("pricing")}>
              Pricing
            </div>
          </div>

          {/* עמודת יצירת קשר */}
          <div className="footer-column">
            <div className="footer-column-title">Get in touch</div>
            <div className="footer-link" onClick={() => scrollToSection("support")}>
              Contact
            </div>
            <div className="footer-link" onClick={() => scrollToSection("support")}>
              Support
            </div>
          </div>
        </div>
      </div>
    </>
  );
};