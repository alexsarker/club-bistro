import Img2 from "/src/assets/home/01.jpg";
import Img3 from "/src/assets/home/02.jpg";
import Img4 from "/src/assets/home/03.png";
import Img5 from "/src/assets/home/04.jpg";
import Img6 from "/src/assets/home/05.png";
import Img7 from "/src/assets/home/06.png";
import { useEffect, useState } from "react";

const images = [Img2, Img3, Img4, Img5, Img6, Img7];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img key={index} src={image} className="w-full flex-shrink-0" />
        ))}
      </div>
    </div>
  );
};

export default Banner;
