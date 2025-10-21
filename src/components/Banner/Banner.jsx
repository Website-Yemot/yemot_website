import './Banner.css'
import { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { HireABuilder } from '../Popups/HireABuilder/HireABuilder';

export const Banner = () => {
  const [showHire, setShowHire] = useState(false);
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
<div className="p">Build your free phone system</div>
</div>

<div className="div-wrapper-2" onClick={() => setShowHire(true)}>
<div className="text-wrapper-4">Build it for me</div>
</div>
</div>
{showHire && <HireABuilder onClose={() => setShowHire(false)} />}
</div>

<div className="image-wrapper">
<img className="image" alt="Image" src={"Hero_Screen.png"} />
</div>
</div>
</div>

  );
};
