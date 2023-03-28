import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


const Slider = () => {
  const [slides, setSlides] = useState([]);
  const [curr, setCurr] = useState(0);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setSlides(json));
  }, []);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };
  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <>
      <div className="w-1/2 mx-auto h-[40vh] relative overflow-hidden shadow-md border-l border-b z-0">
        <div
          className="flex w-full h-full items-center transition-transform ease-out duration-500"
          style={{ transform: `translateX(-${curr * 100}%)` }}
        >
          {slides.map(function (slide) {
            return (
              <>
                <div
                  key={slide.id}
                  className="min-w-full h-full p-2 rounded-md"
                >
                  <img
                    src={slide.image}
                    alt=""
                    className="w-full h-4/6 object-contain"
                  />
                  <p className="block w-full h-1/6 text-sm text-sky-600">
                    {slide.title.slice(0, 45)}
                  </p>
                  <div className="flex items-center w-full text-xl justify-between">
                    
                    <p className=" font-Bebas text-gray-500">${slide.price}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="absolute inset-0 flex items-center justify-between px-1">
          <button
            onClick={prev}
            className="p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white"
          >
            <BsChevronCompactLeft size={20} />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-white/60 text-gray-800 hover:bg-white"
          >
            <BsChevronCompactRight size={20} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Slider;
