import { HiArrowNarrowLeft } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";

const CountryDetail = ({ countries, darkMode }) => {
  const navigate = useNavigate();
  const name = useParams();
  console.log(name);
  const country = countries.find((country) => country.name === name.name);
  console.log(country);
  if (!country) return <h1 className="mt-20 text-center">Country not found</h1>;
  // Get border countries
  const borderCountries = country.borders?.map((border) => {
    if (border) {
      return countries.find((country) => country.alpha3Code === border);
    }
  }).filter(Boolean);
  console.log(borderCountries);

  return (
    <div className="mt-13 px-15">
      <button
        className={`flex items-center justify-center ${darkMode ? "bg-[hsl(209,23%,22%)] text-white" : "bg-white text-black"} py-2 px-8 shadow-lg gap-2 rounded-sm text-[12px]`}
        type="button"
        onClick={() => navigate(-1)}
      >
        <HiArrowNarrowLeft />
        <span className="">Back</span>
      </button>
      <div className="my-14 grid grid-cols-1 md:grid-cols-2 gap">
        <div className="shadow-lg max-w-[600px] h-[400px] w-full rounded-lg  overflow-hidden">
          <img
            src={country.flags.svg}
            alt={country.name}
            className="object-fit size-full"
          />
        </div>
        <div className="flex flex-col justify-center gap">
          <h3 className={`font-extrabold text-2xl ${darkMode ? "text-white" : "text-[hsl(200,15%,8%)]"}`}>{country.name}</h3>
          <div className="flex  justify-between mt-5">
            <div className="flex flex-col gap-2">
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Native Name:</span>{" "}
                {country?.nativeName}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Population:</span>{" "}
                {country?.population.toLocaleString()}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Region:</span>{" "}
                {country?.region}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Sub Region:</span>{" "}
                {country?.subregion}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Capital:</span>{" "}
                {country?.capital}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>
                  Top Level Domain:
                </span>{" "}
                {country?.topLevelDomain[0]}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Currencies:</span>{" "}
                {country?.currencies[0]?.name}
              </p>
              <p className={`font-light ${darkMode ? "text-gray-400" : "text-gray-900"} text-[14px]`}>
                <span className={`${darkMode ? "text-white" : "text-black"} font-semibold`}>Languages:</span>{" "}
                {country?.languages?.map((lang) => lang.name).join(", ")}
              </p>
            </div>
          </div>
          <div className="mt-14 flex items-center gap-2 ">
            <div className="mt-14 flex items-center gap-2">
              {borderCountries && (
                <>
                  <h4 className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>Border Countries:</h4>
                  <div className="flex items-center gap-2">
                    {borderCountries.map((country) => (
                      <p
                        className={`px-4 py-1 text-[14px] ${darkMode ? "bg-[hsl(209,23%,22%)] text-gray-300" : "bg-white border border-gray-200 text-black"} shadow-2xl rounded-sm`}
                        key={country.alpha3Code}
                      >
                        {country?.name.split(" ")[0]}
                      </p>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CountryDetail;
