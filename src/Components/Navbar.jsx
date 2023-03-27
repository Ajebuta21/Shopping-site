import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCart2 } from "react-icons/bs";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import Cart from "./Cart";
import Layout from "./Layout";
const variants = {
  open: { opacity: 1, x: 0, duration: 2, ease: "easeIn" },
  closed: { opacity: 0, x: "-300%", duration: 2, ease: "easeOut" },
};
const vary = {
  open: { opacity: 1, y: 0, duration: 2, ease: "easeIn" },
  closed: { opacity: 0, y: "-300%", duration: 2, ease: "easeOut" },
};
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccount, setOpenAccount] = useState(false);
  const [cartpage, setCartpage] = useState(false);
   if (cartpage) {
     return (
       <Layout>
         <Cart />
       </Layout>
     );
   }
  return (
    <nav className="border-sky-600 w-full h-[8vh] fixed bg-white z-30">
      <div className="w-full h-full px-2 flex justify-between items-center relative">
        <button
          onClick={() => setIsOpen((isOpen) => !isOpen)}
          className="flex items-center text-sky-600 w-[8vh] justify-center h-full lg:hidden hover:opacity-50 cursor-pointer transition ease-in-out"
        >
          {isOpen ? (
            <IoCloseSharp className="text-3xl" />
          ) : (
            <GiHamburgerMenu className="text-3xl" />
          )}
        </button>
        <Link
          to="/"
          className="text-2xl flex justify-center font-bold font-lobster text-sky-600"
        >
          <BsFillSuitSpadeFill className="text-2xl" />
          Ace
        </Link>
        <ul className="flex gap-4 font-Bebas text-xl text-sky-600 max-lg:hidden">
          <Link to='/' className="hover:opacity-50 cursor-pointer transition ease-in-out hover:-translate-y-1">
            Home
          </Link>
          <li className="hover:opacity-50 cursor-pointer transition ease-in-out hover:-translate-y-1">
            Categories
          </li>
        </ul>
        <motion.ul
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="flex lg:gap-4 lg:hidden max-lg:absolute max-lg:top-[8vh] max-lg:flex-col max-lg:h-[92vh] max-lg:w-2/5 max-lg:shadow-md max-lg:left-0 font-Bebas text-sky-600 text-xl z-40 bg-white"
        >
          <li className="lg:hidden max-lg:py-1 max-lg:w-full max-lg:flex max-lg:pl-4 text-xs text-gray-500">
            Menu
          </li>
          <Link to='/' className="max-lg:border-b max-lg:py-2 max-lg:w-full max-lg:flex max-lg:pl-4 hover:bg-sky-500 hover:text-white transition ease-out">
            Home
          </Link>
          <li className="max-lg:border-b max-lg:py-2 max-lg:w-full max-lg:flex max-lg:pl-4 hover:bg-sky-500 hover:text-white transition ease-out">
            Categories
          </li>
        </motion.ul>
        <div className="flex items-center h-3/4">
          <button
            onClick={() => setCartpage(!cartpage)}
            className="flex gap-1 items-center rounded-md w-[10vh] justify-center bg-sky-600 h-4/5 relative mr-2 font-Bebas hover:opacity-50 transition ease-in-out"
          >
            <span className="text-white text-xl">Cart</span>
            <BsCart2 className="text-white text-sm" />
            <div className="animate-bounce absolute -top-1 -right-2 bg-red-500 text-white w-4 h-4 rounded-full flex justify-center items-center text-sm">
              0
            </div>
          </button>
          <button
            onClick={() => setOpenAccount((openAccount) => !openAccount)}
            className="flex items-center text-sky-600 w-[8vh] justify-center h-full hover:opacity-50 cursor-pointer transition ease-in-out"
          >
            <BiUserCircle className="text-3xl" />
            {openAccount ? (
              <AiFillCaretUp className="text-xl" />
            ) : (
              <AiFillCaretDown className="text-xl" />
            )}
          </button>

          <motion.ul
            animate={openAccount ? "open" : "closed"}
            variants={vary}
            className="absolute border-b border-l shadow-md w-[16vh] top-[8vh] right-2 z-40 bg-white"
          >
            <Link
              to="/signup"
              className="flex justify-center py-2 border-b text-sky-600 font-Bebas text-lg"
            >
              Sign up
            </Link>
            <Link
              to="/login"
              className="flex justify-center py-2 border-b text-sky-600 font-Bebas text-lg"
            >
              Log in
            </Link>
          </motion.ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
