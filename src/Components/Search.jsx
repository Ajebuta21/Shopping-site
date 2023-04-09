import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className="fixed w-full h-[6vh] flex top-[8vh] justify-center items-center z-20 bg-white dark:bg-slate-900 shadow-sm">
      <div className="w-2/3 h-5/6 rounded-3xl relative group">
        <input
          type="search"
          className="w-full h-full border py-2 pl-6 pr-2 text-sky-600 text-sm rounded-3xl outline-none hover:border-sky-600 transition duration-500 ease-in-out"
          placeholder="Search here..."
        />
        <AiOutlineSearch className="text-gray-400 text-sm absolute top-1/3 left-2 group-hover:text-blue-600 transition duration-500 ease-in-out" />
      </div>
    </div>
  );
}

export default Search