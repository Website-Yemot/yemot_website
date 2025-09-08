import React from "react";
import layer1 from "./yemotlogo.png";
import './frame.css'
import './styleguide.css'
export const Frame = () => {
  return (
<div className="frame">
<img className="layer" alt="Layer" src={layer1} />

<div className="navbar">
<div className="text-wrapper">Phone Systems</div>

<div className="text-wrapper-2">Features</div>

<div className="text-wrapper-2">Why us</div>

<div className="text-wrapper-3">Pricing</div>

<div className="text-wrapper-4">Support</div>
</div>
<div className="depth-frame">
<div className="div-wrapper">
<div className="text-wrapper-5">Log in</div>
</div>

<div className="div-wrapper-2">
<div className="text-wrapper-6">Start Free</div>
</div>
</div>
</div>
  );
};
