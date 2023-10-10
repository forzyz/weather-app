"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";

type InputProps = {
  handleSearch: (
    event: React.KeyboardEvent<HTMLInputElement> | KeyboardEvent
  ) => void;
  location: string;
  setLocation: React.Dispatch<React.SetStateAction<string>>;
};

const Input = ({ handleSearch, location, setLocation }: InputProps) => {
  const handleIconClick = () => {
    const fakeEvent = new KeyboardEvent("keydown", { key: "Enter" });
    handleSearch(fakeEvent);
  };

  return (
    <form className="flex items-center md:w-5/5 w-full mb-6">
      <div className="cursor-pointer mr-2">
        <AiOutlineSearch />
      </div>
      <input
        className="w-full bg-transparent outline-none focus:border-b-2 focus:border-gray-400 transition duration-300 ease-in-out placeholder-black"
        type="text"
        placeholder="Search for places..."
        value={location}
        onKeyDown={handleSearch}
        onChange={(e) => setLocation(e.target.value)}
      />
      <div
        onClick={handleIconClick}
        className="cursor-pointer ml-2 hover:bg-gray-200 rounded-full p-1 transition duration-300 ease-in-out"
      >
        <BiCurrentLocation />
      </div>
    </form>
  );
};

export default Input;
