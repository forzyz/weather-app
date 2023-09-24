"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

const Input = () => {
  return (
    <form className="flex items-center md:w-2/4 w-full mb-6">
      <div className="cursor-pointer mr-2">
        <AiOutlineSearch />
      </div>
      <input
        className="w-full bg-transparent outline-none focus:border-b-2 focus:border-gray-400 transition duration-300 ease-in-out"
        type="text"
        placeholder="Search for places..."
      />
      <div className="cursor-pointer ml-2 hover:bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out">
        <BiCurrentLocation />
      </div>
    </form>
  );
};

export default Input;
