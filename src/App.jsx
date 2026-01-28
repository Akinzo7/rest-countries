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
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  // fetch data
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  // dark mode
  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // filter countries
  const filteredCountries = countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesRegion = region.length === 0 || country.region === region;
    return matchesSearch && matchesRegion;
  });

  return (
    <div
      className={`flex flex-col min-h-screen w-full ${darkMode ? " bg-[hsl(207,26%,17%)]" : "bg-[hsl(0,0%,98%)]"}`}
    >
      {" "}
      <NavBar darkMode={darkMode} toggleDarkMode={handleToggleDarkMode} />
      <Routes>
        <Route
          path="/"
          element={
            <main className="md:px-15 px-5 mt-10">
              <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                <SearchInput
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  darkMode={darkMode}
                />
                <Filter region={region} darkMode={darkMode} setRegion={setRegion} />
              </div>
              {error && <div className="mt-10 px-15">{error.message}</div>}
              {isLoading && <div className="mt-10 px-15">Loading...</div>}
              <CountryList countries={filteredCountries} darkMode={darkMode} />
            </main>
          }
        />
        <Route
          path="/country/:name"
          element={<CountryDetail darkMode={darkMode} countries={countries} />}
        />
      </Routes>
    </div>
  );
}

export default App;
