import React from 'react'
import Home from './Home'
import Cusine from './Cusine'
import Recipe from './Recipe'
import { Navigate, Route, Routes } from 'react-router-dom'

const Page = () => {
    
  return (
    <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* <Route path="/" element={<Home/>}/> */}
            <Route path="/category" element={<Navigate to="/" />} /> 
            <Route path="/category/:type" element={<Cusine/>}/>
            {/* <Route path="/search/:search" element={<Searched/>}/> */}
            <Route path="/category/:type/:name" element={<Recipe />} />
        </Routes>
    </>
  )
}

export default Page
