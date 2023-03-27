import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="w-full h-screen pt-[8vh] flex justify-center items-center">
      <form
        action=""
        className="border-l border-t rounded-md py-8 px-4 w-4/5 md:w-3/5 lg:w-2/5 shadow-md flex flex-col gap-4"
      >
        <h1 className="block mx-auto font-Bebas text-4xl text-sky-600 ">
          Signup
        </h1>
        <div className="flex w-full gap-2">
          <div className="w-1/2 relative">
            <input
              type="text"
              className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
            />
            <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
              First Name
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="text"
              className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
            />
            <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
              Last Name
            </label>
          </div>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
          />
          <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
            Email
          </label>
        </div>
        <div className="w-full relative">
          <input
            type="text"
            className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
          />
          <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
            Phone Number
          </label>
        </div>
        <div className="flex w-full gap-2">
          <div className="w-1/2 relative">
            <input
              type="password"
              className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
            />
            <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
              Password
            </label>
          </div>
          <div className="w-1/2 relative">
            <input
              type="password"
              className="w-full p-1 outline-none text-md rounded-md border border-gray-300 focus:border-sky-600 text-sky-600"
            />
            <label className="text-xs absolute -top-2 bg-white left-4 text-sky-600 px-2">
              Confirm Password
            </label>
          </div>
        </div>
        <button className="text-lg bg-sky-600 w-full text-white py-1 rounded-md hover:bg-white hover:text-sky-600 shadow-md font-Bebas">
          Signup
        </button>
        <p className="w-full flex text-xs justify-center text-sky-600 gap-1">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
