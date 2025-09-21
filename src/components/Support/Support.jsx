import React from "react";
import './Support.css'
import '@fontsource/poppins/600.css';
import '@fontsource/inter/600.css';
// import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/700.css';
export const Support = () => {
    return (
        <div className="AllSupport">
            <div className="support-containerA">
                <div className="support-titleA">
                    <p >No question is too small<br />
                        Something something</p>
                </div>
                <div className="contact-section">
                    <div className="contact-buttons">
                        <a href="https://wa.me/+97223130834" id="whatsapp-btn">
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
                                <img src="/Support/USA.png" alt="USA Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <p>USA (EST)</p>
                                    <a href="tel:+17187320297" className="phone">+1 (718) 732-0297</a>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="day-range">
                                        <p>Sun - Thu:</p>
                                        <p>9am - 5pm</p>
                                    </div>
                                    <div className="day-range">
                                        <p>Fri:</p>
                                        <p>9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <div className="flag-wrapper">
                                <img src="/Support/UK.png" alt="UK Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <p>UK (GMT)</p>
                                    <a href="tel:+443306132000" className="phone">+44 (0) 330-613-2000</a>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="day-range">
                                        <p>Sun - Thu:</p>
                                        <p>9am - 5pm</p>
                                    </div>
                                    <div className="day-range">
                                        <p>Fri:</p>
                                        <p>9am - 1pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="office-card">
                            <div className="flag-wrapper">
                                <img src="/Support/Israel.png" alt="Israel Flag" className="flag" />
                            </div>
                            <div className="office-content">
                                <div className="title-phone">
                                    <p>Israel (IST)</p>
                                    <a href="tel:+97223130834" className="phone">+972 2313-0834</a>
                                </div>
                                <div className="hours-days-wrapper">
                                    <div className="day-range">
                                        <p>Sun - Thu:</p>
                                        <p>9am - 8pm</p>
                                    </div>
                                    <div className="day-range">
                                        <p>Fri:</p>
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