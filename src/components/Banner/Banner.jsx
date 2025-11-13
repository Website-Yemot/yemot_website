import './Banner.css'
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HireABuilder } from '../Popups/HireABuilder/HireABuilder';
import ReactDOM from 'react-dom';
import { EarlyAccessSignup } from '../Popups/EarlyAccessSignup/EarlyAccessSignup';
import person1 from '../Popups/Login/person1.png';
import person2 from '../Popups/Login/person2.png';
import person3 from '../Popups/Login/person3.png';
export const Banner = () => {
  const [showHire, setShowHire] = useState(false);
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  return (

<div className="banner">

{/* <img className="element-phones" alt="Element phones" src={Phones} />  */}
<DotLottieReact
  className="element-phones"
  src="https://lottie.host/6f659ab2-4831-44c3-be74-909c50e66400/PIKDXxhEwW.lottie"
  loop
  autoplay
/>

<div className="div">
<div className="div-2">
<div className="div-3">
<p className="transform-your">
<span className="text-wrapper">Transform your workflow </span>

<span className="span">all by phone</span>
</p>
<p className="build-powerful">
<span className="text-wrapper-2">
Build powerful automated phone systems, IVR menus and call
centers.{" "}
</span>

<span className="text-wrapper-3">Completely free</span>

<span className="text-wrapper-2">
{" "}
with unlimited core features and channels.
</span>
</p>
</div>
<div className="div-4">
<div className="div-wrapper">
<div className="p" onClick={() => setShowCreateAccount(true)}>Build your free phone system</div>
</div>

<div className="div-wrapper-2" onClick={() => setShowHire(true)}>
<div className="text-wrapper-4">Build it for me</div>
</div>
</div>
{showHire && ReactDOM.createPortal(
  <HireABuilder onClose={() => setShowHire(false)} />,
  document.body
)}
  {showCreateAccount && <EarlyAccessSignup
      onClose={() => setShowCreateAccount(false)}
      onSubmit={() => setShowCreateAccount(false)}
      extraButton
    />}
</div>

<div className="image-wrapper">
<img className="image" alt="Image" src={"Hero_Screen.png"} />
</div>
</div>

<div className="login-images-480">
  <div className="login-images">
    <div className="person1">
        <div className="person1-border1">
            <div className='person1-border2'>
                <img className="img" alt="person 1" src={person1} />
            </div>
        </div>
    </div>

    <div className="person-row">
        <div className="person2">
            <div className='person2-border1'>
                <div className='person2-border2'>
                    <img className="img" alt="person 2" src={person2} />
                </div>
            </div>
        </div>

        <div className="person3">
            <div className='person3-border1'>
                <div className='person3-border2'>
                    <img className="img" alt="person 3" src={person3} />
                </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>

  );
};
