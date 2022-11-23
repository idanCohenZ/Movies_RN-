import React from "react";
import "./slideShow.css";

//A slider App for visual purposes (uses images from the web)
const backgroundUrl = [
  "https://upload.wikimedia.org/wikipedia/commons/b/b9/Marvel_Logo.svg",
  "https://www.awn.com/sites/default/files/styles/original/public/image/featured/dwa-logo-e1570499602899_1.jpg?itok=2-ZeJGUM",
  "https://m.media-amazon.com/images/S/aplus-media-library-service-media/9b478e79-47bb-4ee6-8dfb-8cabb2d2fb17.__CR0,0,970,300_PT0_SX970_V1___.jpg"
];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === backgroundUrl.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {backgroundUrl.map((backgroundImage, index) => (
          <div
            className="slide"
            key={index}
            style={{
              backgroundImage: `url(${backgroundImage})`
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
export default Slideshow;
