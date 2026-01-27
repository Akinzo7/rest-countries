import { useEffect, useState } from "react";
import { IoMdSearch } from "react-icons/io";


const SearchInput = ({searchTerm, setSearchTerm}) => {

useEffect(()=>{
console.log(searchTerm)
}, [searchTerm])
    




  return (

    <div className="w-full relative md:max-w-md">
        <div className="absolute inset-y-0 left-0 flex items-center pl-8 pointer-events-none">
            <IoMdSearch/>
        </div>
        
      <input
        name="search"
        type="text"
        placeholder="Search for a country..."
        className="bg-[hsl(209,23%,22%)] placeholder:text-[12px] w-full text-white py-3 pl-16 outline-none rounded-sm pr-4 shadow-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  
      
  );
};
export default SearchInput;
