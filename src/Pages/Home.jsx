import React, { useState } from "react";
import Slider from "../Components/Slider";

const Home = () => {
  return (
    <div className="w-full min-h-screen py-[14vh] flex flex-col ">
      <h1 className="text-3xl my-3 text-sky-600 font-Bebas block mx-auto">Looking for jewelry?</h1>
      <Slider />
    </div>
  );
};

export default Home;
