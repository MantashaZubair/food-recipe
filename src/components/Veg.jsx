import React, { useEffect, useState } from 'react'
import palakpaneer from "../assets/pic/palakpaneer.jpg"
import "../style/Card.css"
import data from "../assets/data.json"
import { useNavigate } from 'react-router-dom'

const Veg = () => {
  const [veg,setVeg]= useState([])
  const navigate=useNavigate()
  // console.log(data)
  
  const getData=()=>{
    const newData=data.filter((item)=> item.category==="veg")
    const filterdata= newData.slice(0,4)  
    console.log(filterdata)
    setVeg(filterdata)
  }
  console.log(veg)
  useEffect(()=>{
     getData()
  },[])

  const handleClick =(type,name)=>{
    navigate(`/category/${type}/${name}`)
  }
  return (
    <div className='card-container'>
    <h1 style={{marginBottom:"20px", marginTop:"20px"}}>Veg food</h1>
    <div className='card-box'>
        {(veg.length>0) && veg.map((item)=>(
          <div className='card' key={item.id}  onClick={()=>handleClick(item.category,item.itemName)}>
              <img src={`/images/${item.image}`} alt={item.itemName} />
              <p className='item-name'>{item.itemName}</p>
         </div>
         )) }
    </div>
    </div>
  )
}

export default Veg