import React from "react";
import './plansAndPricing.css'
import '@fontsource/poppins/600.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/900.css';
export const PlansAndPricing = () => {
    return (
        <div className="section-container">
            <h2 className="section-title">Simple plans and pricing</h2>
            <div className="main-content">
                <article className="card" id="basic">
                    <div className="section-wrapper">
                        <div className="plan">Basic</div>
                        <div className="price">Free</div>
                        <a className="outline" id="outlineBasic" href="#create">Create Account</a>
                    </div>
                    <ul className="list">

                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Unlimited storage
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Unlimited channels
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            All core features
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Advanced support
                        </li>
                        <li className="hint">
                            <img src="/Xmark.svg" alt="" className="list-icon" />
                            Remove random ads
                        </li>
                        <li className="hint">
                            <img src="/Xmark.svg" alt="" className="list-icon" />
                            Could add add-ons (Add-ons are charged separately)
                        </li>
                    </ul>
                </article>

                <article className="card" id="pro">
                    <div className="section-wrapper">
                        <div className="badge">Popular</div>
                        <div className="plan">Pro</div>
                        <div className="price">$19</div>
                        <a className="outline" id="outlinePro" href="#create">Create Account</a>
                    </div>
                    <ul className="list">

                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Unlimited storage
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Unlimited channels
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            All core features
                        </li>
                        <li>
                            <img src="/Checkmark.svg" alt="" className="list-icon" />
                            Advanced support
                        </li>
                        <li >
                            <img src="/CheckmarkP.svg" alt="" className="list-icon" />
                            Remove random ads
                        </li>
                        <li>
                            <img src="/CheckmarkP.svg" alt="" className="list-icon" />
                            Could add add-ons (Add-ons are charged separately)
                        </li>
                    </ul>
                </article>

                <article className="card" id="doneForYou">
                    <div className="section-wrapper">
                        <div className="plan">Done For You</div>
                        <div className="price">Custom</div>
                        <a className="outline" id="outlineDoneForYou" href="#calc">Start Calculation</a>
                    </div>
                    <p className="desc">Our expert team will build your perfect phone system for you. Just tell us your requirements, select your desired features, and we'll handle the rest. Starting from only $15.</p>
                </article>

            </div>
        </div>
    );
}