import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchInput from "./components/SearchInput";
import Filter from "./components/Filter";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

const filteredCountries = countries.filter((country) => {
  const matchesSearch = country.name.toLowerCase().includes(searchTerm.toLowerCase());
  const matchesRegion = region.length === 0 || country.region === region;
  return matchesSearch && matchesRegion;
});

  return (
    <div className="flex flex-col min-h-screen w-full bg-[hsl(207,26%,17%)] text-[hsl(0,100%,100%)]">
      <NavBar />

      <Routes>
           <Route path="/"
            element={
          <main className="px-15 mt-10">
        <div className="flex justify-between">
          <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Filter region={region} setRegion={setRegion} />
        </div>
        <CountryList countries={filteredCountries} setCountries={setCountries} />
      </main>
            }
          />
          <Route path="/country/:name" element={<CountryDetail countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
