
import React from "react";
import './FreeFeatures.css'
import '@fontsource/poppins/600.css';
import '@fontsource/inter/400.css';
const row1 = [
    { title: 'Conditional Logic', desc: 'Personalize greetings based on time, caller, or other criteria.', icon: '/FreeFeatures/Conditional Logic.svg', colorClass: 'color-teal' },
    { title: 'IVR Menus', desc: 'Create interactive voice response menus for callers.', icon: '/FreeFeatures/IVR Menus.svg', colorClass: 'color-lilac' },
    { title: 'Voicemail-to-Email', desc: 'Manage and access voicemail messages efficiently.', icon: '/FreeFeatures/Voicemail-to-Email.svg', colorClass: 'color-purple' },
    { title: 'Live Events', desc: 'Stream audio to a live audience.', icon: '/FreeFeatures/Live Events.svg', colorClass: 'color-blue' },
    { title: 'API Integration', desc: 'Integrate with external systems smoothly.', icon: '/FreeFeatures/API Integration.svg', colorClass: 'color-teal' },
    { title: 'Call Recording', desc: 'Record calls for quality assurance.', icon: '/FreeFeatures/Call Recording.svg', colorClass: 'color-lilac' },
    { title: 'Entry Permissions', desc: 'Control access to specific extensions.', icon: '/FreeFeatures/Entry Permissions.svg', colorClass: 'color-purple' },
    { title: 'Audio Player', desc: 'Play audio files with custom settings.', icon: '/FreeFeatures/Audio Player.svg', colorClass: 'color-blue' },
];

const row2 = [
    { title: 'Meetings', desc: 'Host virtual meetings and conference calls.', icon: '/FreeFeatures/Meetings.svg', colorClass: 'color-purple' },
    { title: 'Number Porting', desc: 'Transfer your existing number.', icon: '/FreeFeatures/Number Porting.svg', colorClass: 'color-blue' },
    { title: 'Call Screening', desc: 'Block or allow certain numbers to a line.', icon: '/FreeFeatures/Call Screening.svg', colorClass: 'color-teal' },
    { title: 'Reward Tracker', desc: 'Easily check your current and past credit.', icon: '/FreeFeatures/Reward Tracker.svg', colorClass: 'color-lilac' },
    { title: 'Tracking & Analytics', desc: 'Monitor user actions in real time.', icon: '/FreeFeatures/Tracking & Analytics.svg', colorClass: 'color-purple' },
    { title: 'Surveys', desc: 'Collect feedback through phone-based surveys.', icon: '/FreeFeatures/Surveys.svg', colorClass: 'color-blue' },
    { title: 'Trivia & Games', desc: 'Interactive games for user engagement.', icon: '/FreeFeatures/Trivia & Games.svg', colorClass: 'color-teal' },
    { title: 'Phone Payments', desc: 'Accept credit card payments via phone.', icon: '/FreeFeatures/Phone Payments.svg', colorClass: 'color-lilac' },
];
const FeatureCard = ({ title, desc, icon, colorClass }) => (
    <div className={`feature-cardFF ${colorClass}`}>
        <div className={`iconFF ${colorClass}`}><img src={icon} alt={title} /></div>
        <div className="contentFF" >
            <div className="titleFF"><p>{title}</p></div>
            <div className="descFF"><p>{desc}</p></div>
        </div>
    </div>
);
export const FreeFeatures = () => {
    return (
    <div className="AllFFF">
        <div className="AllFF">
            <div className="mainTitle">
                <p className="section-titleFF">Unlimited usage of <span className="highlight">free features</span> the list goes on and on</p>
            </div>
            <div className="features-wrapperFF">
                <div className="features-rowFF scroll-leftF">
                    <div className="features-rowFF">
                        {row1.map((item, idx) => <FeatureCard key={idx} {...item} />)}
                        {row1.map((item, idx) => <FeatureCard key={`dup-${idx}`} {...item} />)}
                    </div>
                </div>
                <div className="features-rowFF scroll-rightF">
                    <div className="features-rowFF">
                        {row2.map((item, idx) => <FeatureCard key={idx} {...item} />)}
                        {row2.map((item, idx) => <FeatureCard key={`dup-${idx}`} {...item} />)}
                    </div>
                </div>
            </div>

        </div>

    </div>
    );
};