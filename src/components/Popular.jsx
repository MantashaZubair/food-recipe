import React, { useEffect, useState } from 'react'

import "../style/Card.css"
import data from "../assets/data.json"
import { useNavigate } from 'react-router-dom'

const Popular = () => {
  const [Popular,setPopular]= useState([])
  const navigate=useNavigate()
  // console.log(data)
  
  const getData=()=>{
    const filterdata=data.filter((item)=> item.category==="popular food")
    setPopular(filterdata)
  }
  console.log(Popular)
  useEffect(()=>{
     getData()
  },[])

  const handleClick =(type,name)=>{
    navigate(`/category/${type}/${name}`)
  }

  return (
    <>
         <div className='card-container'>
      <h1 style={{marginBottom:"20px"}}>Popular food</h1>
      <div className='card-box'>
          {Popular.length>0 && Popular.map((item)=>(
            <div className='card' key={item.id}  onClick={()=>handleClick(item.category,item.itemName)}>
                <img src={`/images/${item.image}` } alt={item.itemName} />
                <p className='item-name'>{item.itemName}</p>
           </div>
           )) }
      </div>
      </div>
      </>
)}

export default Popular