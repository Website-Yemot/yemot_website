import './main-header.css'
export const Header = () => {
  return (<>

    <div className="main-header">

      <div className="div">
        <img className="layer" alt="Layer" src={"yemotlogo.png"} />
        <div className="navbar">
          <a href="#phone-systems" className="text-wrapper">Phone Systems</a>
          <a href="#features" className="text-wrapper-2">Features</a>
          <a href="#why-us" className="text-wrapper-2">Why us</a>
          <a href="#pricing" className="text-wrapper-3">Pricing</a>
          <a href="#support" className="text-wrapper-4">Support</a>
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
