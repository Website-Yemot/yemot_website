import React from "react";
import './Support.css'
import '@fontsource/poppins/600.css';
import '@fontsource/inter/600.css';
// import '@fontsource/inter/400.css';
// import '@fontsource/inter/500.css';
// import '@fontsource/inter/900.css';
export const Support = () => {
    return (
        <div className="Alls">
            <div className="support-container">
                <div className="support-title">
                    <p >No question is too small
                        Something something</p>
                </div>
                <div className="contact-section">
                    <div className="contact-buttons">
                        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" id="whatsapp-btn">
                            <img src="/Support/whatsapp-icon.svg" alt="WhatsApp" className="whatsapp-icon" />
                            <span> Contact via WhatsApp</span>
                        </a>

                        <a href="mailto:support@yemot.com" id="email-btn">
                            <img src="/Support/email-icon.svg" alt="WhatsApp" className="email-icon" />
                            <span>support@yemot.com</span>
                        </a>
                    </div>

                    <div className="offices">
                        <div className="office-card">
                            <div className="flag-wrapper">
                                <img src="/flags/us.svg" alt="USA Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <h3>USA (EST)</h3>
                                    <a href="tel:+17187320297" className="phone">+1 (718) 732-0297</a>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="days">
                                        <p>Sun - Thu:</p>
                                        <p>Fri:</p>
                                    </div>
                                    <div className="hours">
                                        <p>9am - 5pm</p>
                                        <p>9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <div className="flag-wrapper">
                                <img src="/flags/uk.svg" alt="UK Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <h3>UK (GMT)</h3>
                                    <a href="tel:+443306132000" className="phone">+44 (0) 330-613-2000</a>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="days">
                                        <p>Sun - Thu:</p>
                                        <p>Fri:</p>
                                    </div>
                                    <div className="hours">
                                        <p>9am - 5pm</p>
                                        <p>9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <div className="flag-wrapper">
                                <img src="/flags/il.svg" alt="Israel Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <h3>Israel (IST)</h3>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="days">
                                        <p>Sun - Thu:</p>
                                        <p>Fri:</p>
                                    </div>
                                    <div className="hours">
                                        <p>9am - 8pm</p>
                                        <p>9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}