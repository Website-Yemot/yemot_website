import React from "react";
import './AddOns.css';
import '@fontsource/poppins/600.css';
// import '@fontsource/poppins/400.css';
// import './colors.css';
export const AddOns = () => {
    const addons = [
        {
            icon: '/call-forwarding.svg',
            title: 'Call Forwarding',
            price: '$20/month',
            tag: 'Yemot Pro required',
            desc: 'Some text about the super duper cool add on that will change your life',
        },
        {
            icon: '/speech-to-text.svg',
            title: 'Speech-to-Text',
            price: '$20/month',
            tag: 'Yemot Pro required',
            desc: 'Some text about the super duper cool add on that will change your life',
        },
        {
            icon: '/sms-to-email.svg',
            title: 'SMS to Email',
            price: '$20/month',
            tag: 'Yemot Pro required',
            desc: 'Some text about the super duper cool add on that will change your life',
        },
        {
            icon: '/smart-queues.svg',
            title: 'Smart Queues',
            price: '$20/month',
            tag: 'Yemot Pro required',
            desc: 'Some text about the super duper cool add on that will change your life',
        },
        {
            icon: '/mass-messaging.svg',
            title: 'Mass Messaging',
            price: '$15/one time',
            tag: 'Yemot Pro required',
            desc: 'Some text about the super duper cool add on that will change your life',
        }
    ];

    return (
        <div className="AllA">
        <div className="section-containerA">
            <h2 className="section-titleA" id="titleA">Add-Ons</h2>
            <div className="addons-cards">
                <div className="addons-row">
                    {addons.slice(0, 3).map((addon, index) => (
                        <div key={index} className="addon-card">
                            <div className="addon-content">
                                <div className="icon">
                                    <img src={addon.icon} alt="" className="addon-icon" />
                                </div>
                                <div className="addon-header">
                                    <h3 className="addon-title">{addon.title}</h3>
                                    <div className="addon-price-tag">
                                        <span className="price">{addon.price}</span>
                                        <div className="tag-container">
                                            <span className="tag">{addon.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="addon-desc">{addon.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="addons-row">
                    {addons.slice(3).map((addon, index) => (
                        <div key={index + 3} className="addon-card">
                            <div className="addon-content">
                                <div className="icon">
                                    <img src={addon.icon} alt="" className="addon-icon" />
                                </div>
                                <div className="addon-header">
                                    <h3 className="addon-title">{addon.title}</h3>
                                    <div className="addon-price-tag">
                                        <span className="price">{addon.price}</span>
                                        <div className="tag-container">
                                            <span className="tag">{addon.tag}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="addon-desc">{addon.desc}</p>
                        </div>
                    ))}

                    <div className="addon-cardSupport-card">
                        <div className="addon-content">
                            <div className="icon">
                                <img src="/plus.svg" alt="" className="addon-icon" />
                            </div>
                            <h3 className="addon-titleA">
                                And many other awesome add-ons for awesome phone systems
                            </h3>
                        </div>
                        <div className="btn">
                            <a id="contact-btn">Contact Support</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};