import React, { createContext, useState } from 'react'

export const SearchContext= createContext()

export const SearchProvider=({children})=>{
    const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
   
  const searchRecipe = (query, data) => {
    setSearchQuery(query);
    const result= data.filter(item => 
        item.itemName.toLowerCase().includes(query.toLowerCase())
      );
    
      setFilteredData(result);
   }



return(
    <SearchContext.Provider value={{searchQuery,filteredData,searchRecipe}}>
    {children}
    </SearchContext.Provider>
);
}
