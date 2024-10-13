import React from 'react';
import { Outlet } from 'react-router'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Index'


const WebsiteLayout = ({children})=> {
  return (
    <div>
        <Navbar/>
            <Outlet/>
            {children}
        <Footer/>
    </div>
  )
}



export default WebsiteLayout
