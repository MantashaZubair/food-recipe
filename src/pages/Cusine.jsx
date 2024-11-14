import React, { useContext, useEffect, useState } from 'react'
// import palakpaneer from "../assets/pic/palakpaneer.jpg"
import { useNavigate, useParams } from 'react-router-dom'
import data from "../assets/data.json"
import { FaBackward } from "react-icons/fa";
import "../style/Card.css"
import { SearchContext } from '../customHook/useSearch';
const Cusine = () => {
  const [cusine,setCusine]= useState([])
  const [itemName,setItemName] = useState(true)
  const {searchQuery,filteredData}=useContext(SearchContext)
  const {type}= useParams()
  const navigate= useNavigate()
  const getCusine=()=>{
    const filterData= data.filter((item)=>item.category==type)
    setCusine(filterData)
  }
  useEffect(()=>{
      getCusine()
  },[type])
  console.log(cusine)

  const handleClick=(name)=>{
       navigate(`/category/${type}/${name}`)
  }
 
  return (
    <div  style={{marginBottom:"100px", marginTop:"30px"}}>
    <div className='card-container'>
    <div className='cuisin-name'>
    {/* <FaBackward style={{ color: 'blue', fontSize: '35px' }} onClick={()=>navigate("/")}/> */}
    {searchQuery ?<h1>{searchQuery}</h1>: <h1>{type} cusine</h1>}
  
    </div>
    
    {
      searchQuery&& (
        <div>
        <div className='card-box'>
          {filteredData.length>0? (
            filteredData.map((item)=>(
              <div className='cards' key={item.id}  onClick={()=>handleClick(item.itemName)}>
                <img src={`/images/${item.image}` } alt={item.itemName} />
                <p className='item-name'>{item.itemName}</p>
           </div>
            ))
          ):(<p>Recipe not found</p>)}
        </div>
        </div>
      )
    }

     {!searchQuery&& 
      <div className='card-box'>
    {cusine.length>0 && cusine.map((item)=>(
      <div className='cards' key={item.id}  onClick={()=>handleClick(item.itemName)}>
                <img src={`/images/${item.image}` } alt={item.itemName} />
                <p className='item-name'>{item.itemName}</p>
           </div> ))}
      
      </div> } 
     
    </div>
    </div>
  )
}

export default Cusine