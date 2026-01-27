import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const Filter = ({setRegion, region}) => {
    const [isOpen, setIsOpen] = useState(false)

    
  return (
    <div className="relative">
      <button
        type="button"
        onClick={(e) => {setIsOpen(!isOpen)}}
        className="bg-[hsl(209,23%,22%)] w-full text-white py-3 px-4 shadow-md rounded-sm flex gap-8 items-center text-[12px] cursor-pointer"
      >
        <span >{ region || "Filter by Region"}</span>
        <FaChevronDown  className="text-[10px]"/>
      </button>
      {isOpen && 
      <ul  className="absolute top-12 rounded-sm pl-4 text-[12px] py-3 flex flex-col gap-2 bg-[hsl(209,23%,22%)] w-full text-white cursor-pointer z-50">
        <li onClick={() => {setRegion(""); setIsOpen(false)}} className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">All</li>
        <li onClick={() => {setRegion("Africa"); setIsOpen(false)}} className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">Africa</li>
        <li onClick={() => {setRegion("Americas"); setIsOpen(false)}} className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">Americas</li>
        <li onClick={() => {setRegion("Asia"); setIsOpen(false)}} className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">Asia</li>
        <li onClick={() => {setRegion("Europe"); setIsOpen(false)} }className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">Europe</li>
        <li onClick={() => {setRegion("Oceania"); setIsOpen(false)}} className="hover:bg-[hsl(207,26%,17%)] hover:pl-6 hover:py-1 duration-200 transition-all">Oceania</li>
      </ul>
}
    </div>
  ); 
};
export default Filter;
