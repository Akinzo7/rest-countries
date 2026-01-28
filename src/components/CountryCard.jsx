import { Link } from "react-router-dom";
const CountryCard = ({name, population, flags, capital, region, darkMode}) => {
    
 
  return (
<Link to={`/country/${name}`}>
    <div className={`${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white"} rounded-sm shadow-lg overflow-x-hidden`}>
      <div className="w-full object-fit">
        <img src={`${flags?.svg || flags?.png}`} alt={`${name} flag`} className="w-full h-50 object-cover object-center" />
      </div>
      <div className="p-7">
        <h3 className="font-bold pb-4">{name}</h3>
    <p className="font-medium text-[14px]">Population:<span className={`font-light ${darkMode ? "text-gray-300" : "text-gray-500"}`}> {`${population.toLocaleString()}`}</span></p>
        <p className="font-medium text-[14px]">Region:<span className={`font-light ${darkMode ? "text-gray-300" : "text-gray-500"}`}> {region}</span></p>
        <p className="font-medium text-[14px]">Capital:<span className={`font-light ${darkMode ? "text-gray-300" : "text-gray-500"}`}> {capital}</span></p>
      </div>
    </div>
    </Link>
  );
};
export default CountryCard;
