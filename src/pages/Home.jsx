import React, { useContext } from 'react'
import Popular from '../components/Popular'
import Veg from '../components/Veg'
import Regular from '../components/Regular'
import { SearchContext } from '../customHook/useSearch'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const {searchQuery, filteredData}=useContext(SearchContext)
  const navigate=useNavigate()
  const handleClick=(type,name)=>{
    console.log(type,name)
    navigate(`/category/${type}/${name}`)
}
  return (
    <>
      {
      searchQuery&& (
        <div style={{marginBottom:"100px", marginTop:"60px"}}>
        <div className='card-box'>
          {filteredData.length>0? (
            filteredData.map((item)=>(
              <div className='cards' key={item.id}  onClick={()=>handleClick(item.category,item.itemName)}>
                <img src={`/images/${item.image}` } alt={item.itemName} />
                <p className='item-name'>{item.itemName}</p>
           </div>
            ))
          ):(<p>Recipe not found</p>)}
        </div>
        </div>
      )
    }

    {!searchQuery&&  <div style={{marginBottom:"100px", marginTop:"30px"}}>
        <Popular/>
        <Regular/>
        <Veg/>
      </div>
    }
    </>
  )
}

export default Home