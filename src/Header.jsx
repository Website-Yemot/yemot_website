import React from "react";
import layer1 from "./yemotlogo.png";
import './main-header.css'
import './styleguide.css'
export const Header = () => {
  return (<>

  <div className="main-header">

<div className="div">
<img className="layer" alt="Layer" src={layer1} />

<div className="navbar">
<div className="text-wrapper">Phone Systems</div>

<div className="text-wrapper-2">Features</div>

<div className="text-wrapper-2">Why us</div>

<div className="text-wrapper-3">Pricing</div>

<div className="text-wrapper-4">Support</div>
</div>
<div className="depth-main-header">
<div className="div-wrapper">
<div className="text-wrapper-5">Log in</div>
</div>

<div className="div-wrapper-2">
<div className="text-wrapper-6" onClick={() => alert("fh")}>Start Free</div>
</div>
</div>
</div>
</div>
</>

  );
};
