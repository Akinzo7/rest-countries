import { FaMoon } from "react-icons/fa";

const NavBar = () => {
  return (
    <div className="bg-[hsl(209,23%,22%)] md:text-[1rem] text-[0.8rem] h-14 flex justify-between items-center w-full px-7 md:px-15 py-10 sticky z-50 md:py-8 border-b shadow-md rounded-md placeholder:text-gray-300 placeholder:text-[0.7rem] outline-none border-[hsl(209,23%,22%)] ">
      <div>
        <p className="font-extrabold">Where in the world?</p>
      </div>
      <button type="button" className="flex items-center gap-2 ">
       <FaMoon />
        <p>Dark Mode</p>
      </button>
    </div>
  );
};
export default NavBar;
