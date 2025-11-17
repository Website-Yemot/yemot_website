import React from "react";
import './FeatureHighlight.css'
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/400.css';
export const FeatureHighlight = () => {
    return (
        <div className="AllF">
            <div className="section-containerF">
                <h2 className="section-titleF">Our smarter software is a fan favorite for a reason</h2>
                <div className="main-contentF">
                    <div className="text-columnF">
                        <div className="text-with-image">
                            <img class="mobile-image" src="mobileImg.svg" alt="image"></img>
                            <div className="text-blockF">
                                <p className="headlineF">Custom Feature Creation</p>
                                <p className="subtextF">Create custom features tailored to your specific needs.</p>
                            </div>
                        </div>
                        <div className="text-with-image">
                            <img class="mobile-image" src="mobileImg.svg" alt="image"></img>
                            <div className="text-blockF">
                                <p className="headlineF">Free Unlimited Channels</p>
                                <p className="subtextF">Handle an unlimited number of concurrent calls.</p>
                            </div>
                        </div>
                        <div className="text-with-image">
                            <img class="mobile-image" src="mobileImg.svg" alt="image"></img>
                            <div className="text-blockF">
                                <p className="headlineF">Free CRM and API Integration</p>
                                <p className="subtextF">Integrate with your CRM and other systems via API.</p>
                            </div>
                        </div>
                    </div>
                    <div className="videoF">
                        <video className="aF" autoPlay muted loop>
                            <source src="/Video.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
};