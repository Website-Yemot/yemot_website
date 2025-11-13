import { useEffect, useRef } from "react";
import "./Dialogue.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import imgS from './480-img.png';


export const Dialogue = () => {
  const dialogRef = useRef(null);

useEffect(() => {
  const dialog = dialogRef.current;
  const nextSection = document.querySelector("#freefeatures");
  if (!dialog || !nextSection) return;

  // עקומת תנועה עדינה ורכה יותר
  const easeOutSine = (t) => Math.sin((t * Math.PI) / 2);

  const onScroll = () => {
    const rect = dialog.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = Math.min(Math.max(1 - rect.top / windowHeight, 0), 1);
    const easedProgress = easeOutSine(progress);

    // תנועה עדינה — 100% כדי שיכסה את כל הדף
    const translateY = -easedProgress * 100;
    dialog.style.transform = `translate3d(0, ${translateY}%, 0)`;

    // הארכת זמן המעבר לתנועה רכה יותר
    dialog.style.transition = "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)";
    dialog.style.position = "relative";
    dialog.style.zIndex = "10";

    // כשהוא מכסה לגמרי — החלק הבא נדבק אליו
    if (progress >= 1) {
      nextSection.style.marginTop = `-${windowHeight}px`;
    } else {
      nextSection.style.marginTop = "0";
    }

    // בגלילה חזרה למעלה, הוא חוזר בעדינות
    if (progress <= 0.05) {
      dialog.style.transform = "translate3d(0, 0, 0)";
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll();

  return () => window.removeEventListener("scroll", onScroll);
}, []);

  return (
        // <div ref={dialogRef} id="dialogue" className="dialogue_wrapper">
    <div  id="dialogue" className="dialogue_wrapper">
      <div className="dialogue">
        <DotLottieReact
          className="element"
          src="https://lottie.host/8b994981-f657-4bf1-88c1-b289cda8c78e/FpfsVhohjo.lottie"
          loop
          autoplay
        />
      <img src={imgS} alt="Logo" className="img_480"/>

        <div className="div">
          <p className="text-wrapper">And any other awesome phone system</p>
          <p className="if-you-can-imagine">
            If you can imagine it
            <br />
            you can create it
          </p>
        </div>
      </div>
    </div>
  );
};
