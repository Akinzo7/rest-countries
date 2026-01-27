import CountryCard from "./CountryCard";

const CountryList = ({ countries, setCountries }) => {
  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-15">
      {countries.map((country) => (
        <CountryCard key={country.alpha3Code} {...country} />
      ))}
    </div>
  );
};
export default CountryList;
