import { useEffect, useRef, useState } from "react";
import Dialogue_img from "./dialogue_img.svg";
import "./Dialogue.css";

export const Dialogue = () => {
  const [visible, setVisible] = useState(false);   // 👈 מצב שמחזיק אם האלמנט נראה
  const imgRef = useRef(null);                     // 👈 רפרנס לתמונה

  useEffect(() => {
  const element = imgRef.current;
  let lastY = window.scrollY;

  const handleScroll = () => {
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const currentY = window.scrollY;

    const scrollingDown = currentY > lastY;
    lastY = currentY;

    // אם האלמנט קרוב לכניסה למסך
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (scrollingDown) {
        setVisible(true); // נכנס לתצוגה
      } else {
        setVisible(false); // מתקרב מלמעלה
      }
    }
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="dialogue_wrapper">
      <div className="dialogue">
        <img
          ref={imgRef}
          alt="Element"
          src={Dialogue_img}
          className={`element ${visible ? "in-view" : "out-view"}`}
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
