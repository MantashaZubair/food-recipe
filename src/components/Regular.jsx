import React, { useEffect, useState } from 'react'
import palakpaneer from "../assets/pic/palakpaneer.jpg"
import "../style/Card.css"
import data from "../assets/data.json"
import { useNavigate } from 'react-router-dom'
const Regular = () => {
  const [regular,setRegular]= useState([])
  const navigate=useNavigate()
  // console.log(data)
  
  const getData=()=>{
    const filterdata=data.filter((item)=> item.category==="regular food")
    setRegular(filterdata)
  }
  console.log(regular)
  useEffect(()=>{
     getData()
  },[])

  const handleClick =(type,name)=>{
    navigate(`/category/${type}/${name}`)
  }
  return (
   
    <div className='card-container'>
    <h1 style={{marginBottom:"20px", marginTop:"20px"}}>Regular food</h1>
    <div className='card-box'>
        {regular.length>0 && regular.map((item)=>(
          <div className='card' key={item.id}  onClick={()=>handleClick(item.category,item.itemName)}>
              <img src={`/images/${item.image}`} alt={item.itemName} />
              <p className='item-name'>{item.itemName}</p>
         </div>
         )) }
    </div>
    </div>
  )
}

export default Regular