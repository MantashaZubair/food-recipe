import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import { GiBroccoli,GiChickenOven,GiChopsticks,GiRiceCooker,GiDonut  } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
 GiChickenOven 
const Category = ( {isToggle,setIsToggle}) => {
   const navigate=useNavigate()
   const handleClick =(type)=>{
       navigate(`/category/${type}`)
      setIsToggle(!isToggle)
   }
  return (
    <div className='category'>
       <div className='category-type' onClick={()=>handleClick("italian")} >
           <FaPizzaSlice  style={{ color: 'orange', fontSize: '50px' }}/>
          <h4>Italian</h4>     
       </div>
       <div className='category-type' onClick={()=>handleClick("veg")}>
           <GiBroccoli style={{color:'green', fontSize: '50px' }}/>
          <h4>Veg</h4>     
       </div>
       <div className='category-type' onClick={()=>handleClick("nonveg")}>
           <GiChickenOven style={{color:'brown', fontSize: '50px' }}/>
          <h4>Non-veg</h4>     
       </div>
       <div className='category-type' onClick={()=>handleClick("starter")}>
           <GiChopsticks style={{color:'teal', fontSize: '50px' }}/>
          <h4>Chinees</h4>     
       </div>
       <div className='category-type' onClick={()=>handleClick("thai")}>
           <GiRiceCooker style={{color:'black', fontSize: '50px' }} />
          <h4>Thai</h4>     
       </div>
       <div className='category-type' onClick={()=>handleClick("desserts")}>
           <GiDonut style={{color:'brown', fontSize: '50px' }}/>
          <h4>desserts</h4>     
       </div>
    </div>
  )
}

export default Category