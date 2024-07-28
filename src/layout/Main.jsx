import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div>
        <Nav/>
          <div className='min-h-screen'>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Main;
