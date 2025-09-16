import './Logos.css'
import './styleguide.css'
import image1 from "./logos/image 1.png";
import image2 from "./logos/image 2.png";
import image3 from "./logos/image 3.png";
import image4 from "./logos/image 4.png";
import image5 from "./logos/image 5.png";
import image6 from "./logos/image 6.png";
import image7 from "./logos/image 7.png";
import image8 from "./logos/image 8.png";
import image9 from "./logos/image 9.png";
import image10 from "./logos/image 10.png";


export const Logos = () => {
  const row1 = [image1, image2, image3, image4, image5];
  const row2 = [image6, image7, image8, image9, image10];

  return (
    <div className="logo">
      <div className="div">
        <p className="more-than">
          <span className="text-wrapper">More than </span>
          <span className="span">1,200,000 phone systems </span>
          <span className="text-wrapper">
            are operating across the world&nbsp;&nbsp;
          </span>
        </p>

        <div className="logos-wrapper">
          <div className="logos-row scroll-left">
            {[...row1, ...row1].map((img, i) => (
              <div className="img-wrapper" key={`r1-${i}`}>
                <img className="img" src={img} alt={`Logo ${i + 1}`} />
              </div>
            ))}
          </div>

          <div className="logos-row scroll-right">
            {[...row2, ...row2].map((img, i) => (
              <div className="img-wrapper" key={`r2-${i}`}>
                <img className="img" src={img} alt={`Logo ${i + 6}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rectangle" />
      <div className="rectangle-2" />
    </div>
  );
};


// export const Logos = () => {
//   return (
//     <div className="logo">
//       <div className="div">
//         <p className="more-than">
//           <span className="text-wrapper">More than </span>
//           <span className="span">1,200,000 phone systems </span>
//           <span className="text-wrapper">
//             are operating across the world&nbsp;&nbsp;
//           </span>
//         </p>

//         {/* שורה ראשונה - תזוז שמאלה */}
//         <div className="logos-row scroll-left">
//           {[image1, image2, image3, image4, image5].map((img, i) => (
//             <div className="img-wrapper" key={i}>
//               <img className="img" src={img} alt={`Logo ${i + 1}`} />
//             </div>
//           ))}
//         </div>

//         {/* שורה שנייה - תזוז ימינה */}
//         <div className="logos-row scroll-right">
//           {[image6, image7, image8, image9, image10].map((img, i) => (
//             <div className="img-wrapper" key={i + 5}>
//               <img className="img" src={img} alt={`Logo ${i + 6}`} />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="rectangle" />
//       <div className="rectangle-2" />
//     </div>
//   );
// };