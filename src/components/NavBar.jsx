import { FaMoon } from "react-icons/fa";

const NavBar = ({ toggleDarkMode, darkMode }) => {
  return (
    <div
      className={`${darkMode ? "bg-[hsl(209,23%,22%)] text-[hsl(0,0%,100%)]" : "bg-white  border-b border-gray-200 text-[hsl(200,15%,8%)]"} md:text-[1rem] text-[0.8rem] h-14 flex justify-between items-center w-full px-7 md:px-15 py-10 sticky z-50 md:py-8`}
    >
      <div>
        <p className="font-extrabold">Where in the world?</p>
      </div>
      <button
        onClick={toggleDarkMode}
        type="button"
        className="flex items-center gap-2 "
      >
        <FaMoon />
        <p>{darkMode ? "Dark Mode" : "Light Mode"}</p>
      </button>
    </div>
  );
};
export default NavBar;
