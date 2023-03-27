import React from "react";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const slides = [
  {
    url: "https://cdn.pixabay.com/photo/2018/07/14/15/27/cafe-3537801_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2017/06/06/22/46/mediterranean-cuisine-2378758_1280.jpg",
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/09/17/20/26/restaurant-449952_1280.jpg",
  },
];
const [currentIndex, setCurrentIndex] = useState(0);
const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};
const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};
const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
};

const Sliderf = () => {
  return (
      <div className="w-2/3 h-1/2 rounded-xl relative group">
        <div
          className="w-full h-full rounded-xl bg-center bg-cover duration-500 border"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        {/* left arrow */}
        <div>
          <BsFillCaretLeftFill
            onClick={prevSlide}
            size={30}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl left-0 p-2 bg-black/20 text-white cursor-pointer"
          />
        </div>
        {/* right arrow */}
        <div>
          <BsFillCaretRightFill
            onClick={nextSlide}
            size={30}
            className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] text-2xl right-0 p-2 bg-black/20 text-white cursor-pointer"
          />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Sliderf;
