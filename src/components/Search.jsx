import React, {  useContext, useEffect, useState } from 'react'
import "../style/Header.css"
import { SearchContext } from '../customHook/useSearch'

const Search = ({data}) => {
  const [search,setSearch]=useState("")
  const {searchRecipe} =useContext(SearchContext)
  // const [fiterSearch,setfilterSearch]= useState([])
  // const navigate= useNavigate()
  // const searchData = ()=>{
  //   let newData=[...data]
  //   newData= newData.filter((item)=>item.itemName.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())) 
  //  setfilterSearch(newData)
     
  // }
  // useEffect(()=>{
  //   searchData()
  // },[search])
  
  useEffect(() => {
    searchRecipe(search,data); // Filter the data whenever the search query changes
  }, [search]);
  
  return (
   <>
    <div className='search'>
        <div className='search-box'>
           <div>🔍</div>
           <input 
            placeholder='search your recipe'
            className='search-input'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
           />
        </div>
    </div>
    
   </>
  )
}

export default Search