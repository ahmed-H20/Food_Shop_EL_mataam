import React from 'react'
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';
import '../App.css';

const Main = () => {
  return (
    <div>
        <Nav/>
        <Outlet/>
        <footer>footer</footer>
    </div>
  )
}

dfdfc


export default Main;
