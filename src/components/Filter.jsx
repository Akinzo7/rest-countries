import { useState, useEffect, useRef, use } from "react";
import { FaChevronDown } from "react-icons/fa";

const Filter = ({ setRegion, region, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white text-[hsl(200,15%,8%)]"} relative   py-3 px-4 shadow-md rounded-sm flex flex-row gap-16 md:gap-8 items-center text-[12px] cursor-pointer`}
      >
        <span>{region || "Filter by Region"}</span>
        <FaChevronDown className="text-[10px]" />
        {isOpen && (
          <ul
            className={`absolute top-12 right-0 left-0 rounded-sm pl-4 text-[12px] py-3 flex flex-col items-start gap-2 ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white text-[hsl(200,15%,8%)]"} cursor-pointer z-50`}
          >
            <li
              onClick={() => {
                setRegion("");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              All
            </li>
            <li
              onClick={() => {
                setRegion("Africa");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              Africa
            </li>
            <li
              onClick={() => {
                setRegion("Americas");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              Americas
            </li>
            <li
              onClick={() => {
                setRegion("Asia");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              Asia
            </li>
            <li
              onClick={() => {
                setRegion("Europe");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              Europe
            </li>
            <li
              onClick={() => {
                setRegion("Oceania");
                setIsOpen(false);
              }}
              className={`${darkMode ? "hover:bg-[hsl(207,26%,17%)]" : "hover:bg-[hsl(207,26%,17%)] hover:text-white"} hover:pl-6 hover:py-1 duration-200 transition-all`}
            >
              Oceania
            </li>
          </ul>
        )}
      </button>
    </div>
  );
};
export default Filter;
