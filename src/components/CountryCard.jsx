import { Link } from "react-router-dom";
const CountryCard = ({name, population, flags, capital, region}) => {
    
 
  return (
<Link to={`/country/${name}`}>
    <div className="bg-[hsl(209,23%,22%)] rounded-sm overflow-x-hidden">
      <div className="w-full object-fit">
        <img src={`${flags?.svg || flags?.png}`} alt={`${name} flag`} className="w-full h-50 object-cover object-center" />
      </div>
      <div className="p-7">
        <h3 className="font-bold pb-4">{name}</h3>
    <p className="font-medium text-[14px]">Population:<span className="font-light text-gray-300"> {`${population.toLocaleString()}`}</span></p>
        <p className="font-medium text-[14px]">Region:<span className="font-light text-gray-300"> {region}</span></p>
        <p className="font-medium text-[14px]">Capital:<span className="font-light text-gray-300"> {capital}</span></p>
      </div>
    </div>
    </Link>
  );
};
export default CountryCard;
