import React from 'react'
import Navbar from '../Navbar/Navbar'
import Tv from '../Tv/Tv'
import AllTrending from '../AllTrending/AllTrending'
import People from '../People/People'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/Footer'
export default function Layout() {
  return <>
  <Navbar/>
     <div className='container-fluid'> 
        
        <Outlet></Outlet>
       
       
    </div>
    <Footer />
    </>

  
}
