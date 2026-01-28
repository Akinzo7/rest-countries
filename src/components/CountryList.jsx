import CountryCard from "./CountryCard";

const CountryList = ({ countries, darkMode }) => {
  return (
    <div className="my-10 px-10 md:px-0 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} {...country} darkMode={darkMode} />
      ))}
    </div>
  );
};
export default CountryList;
