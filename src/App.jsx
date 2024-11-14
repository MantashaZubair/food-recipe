import { useState } from 'react'
import './App.css'
import data from "./assets/data.json"
import Category from './components/Category'
import Navbar from './components/Navbar'
import Search from './components/Search'
import Page from './pages/page'
import Breadcrumbs from './components/Breadcrumbs'
import { useLocation } from 'react-router-dom'
function App() {
const [isToggle,setIsToggle]=useState(false)
const location=useLocation()
const pathname= location.pathname.split("/").filter((x)=>x)
console.log(pathname)
const toggleSidebar = () => {
  setIsToggle(!isToggle);
}; 
return (
    <>
    <div className='app_container'>
 <div className='app-navbar'>
 <Navbar/>

 <div>
 <button className ="toggle-button" onClick={toggleSidebar}>{isToggle? <>X</>:<>☰</>}</button>
 </div>
 
 
 </div>
      
      
      <Search  data={data}/>
      <div className={`sidebar ${isToggle ? 'active' : ''}`}>
      <Category isToggle={isToggle} setIsToggle={setIsToggle}/>
      </div>
        <Breadcrumbs />
      {pathname.length>0 && <hr />}  
      <Page/>
    </div>  
    </>
  )
}

export default App
