import React from 'react';
import './navbar.css';
import {FiPieChart} from 'react-icons/fi';
import {BsTags} from 'react-icons/bs';
import {TbCalendarTime} from 'react-icons/tb';
import {FaRegUserCircle} from 'react-icons/fa';
import {IoSettingsOutline} from 'react-icons/io5';

export const Navbar = () => {
  return (
    <>
    <div className='navbar'>
        <div className='container'>
        <h1>Board.</h1>
        <div className='items'><FiPieChart/><span>Dashboard</span></div>
        <div className='items'><BsTags/><span>Transactions</span></div>
        <div className='items'><TbCalendarTime/><span>Schedules</span></div>
        <div className='items'><FaRegUserCircle/><span>Users</span></div>
        <div className='items'><IoSettingsOutline/><span>Settings</span></div>
        </div>
        <div className='contact'>
            <p>Help</p>
            <p>Contact Us</p>
        </div>
    </div>
    </>
  )
}
