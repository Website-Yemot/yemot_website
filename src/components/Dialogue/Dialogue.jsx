import { useEffect, useRef } from "react";
import "./Dialogue.css";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export const Dialogue = () => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const onScroll = () => {
      const rect = dialog.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // חישוב התקדמות: כמה האלמנט נכנס למסך
      const progress = Math.min(
        Math.max(1 - rect.top / windowHeight, 0),
        1
      );

      // עדכון טרנספורם: translateY עולה בהדרגה
      dialog.style.transform = `translate3d(0, ${-100 + progress * 100}%, 0)`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // להריץ פעם ראשונה

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div  className="dialogue_wrapper">
      {/* <div ref={dialogRef} className="dialogue"> */}
     <div  className="dialogue"> 
              <DotLottieReact className="element"
      src="https://lottie.host/8b994981-f657-4bf1-88c1-b289cda8c78e/FpfsVhohjo.lottie"
      loop
      autoplay
    />

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
