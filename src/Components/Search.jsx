import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

const Search = () => {
  return (
    <div className="fixed w-full h-[6vh] flex top-[8vh] justify-center items-center z-20 bg-white shadow-sm">
      <div className="w-2/5 max-lg:w-4/5 h-4/5 rounded-3xl flex items-center transition ease-in-out">
        <input
          type="search"
          name=""
          id=""
          className="flex w-10/12 h-full rounded-tl-3xl rounded-bl-3xl outline-none pl-3 text-xs text-sky-500 border-l border-t border-b focus:border-sky-600"
          placeholder="Search here..."
        />
        <button className="bg-sky-600 text-white w-2/12 h-full rounded-tr-3xl rounded-br-3xl flex justify-center items-center border border-sky-600">
          <AiOutlineSearch />
        </button>
      </div>
    </div>
  );
}

export default Search