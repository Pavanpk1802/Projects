import React from 'react';
import { Navbar } from '../components/navbar';
import './dashboard.css';
import {IoSearchOutline} from 'react-icons/io5'
import {BiBell} from 'react-icons/bi'
import { TotalDetails } from '../components/totalDetails';
import { Activities } from '../components/activities';
import { TopProducts } from '../components/topProducts';
import { Schedule } from '../components/schedule';

export const Dashboard = () => {
  return (
    <>
    <div className='main'>
        <div className='left-div'> 
            <Navbar/>
        </div>
        <div className='right-div'>
            <div className='dashboard'>
            <h1>Dashboard</h1>
                <div className='search'>
                    <div className='search-bar'>
                        <input placeholder='Search...'/>
                        <IoSearchOutline/>
                    </div>
                    <BiBell size={20} style={{marginRight:"20px"}}/>
                    <img src='https://github.com/DeekondaSanjayKumar/Projects/blob/main/Stunning%20Landing%20Page/Sanjay%20Kumar%20D_HighRes.JPG?raw=true' id="image" alt='profile'/>
                </div>
            </div>
            <TotalDetails/>
            <Activities/>
            <div className='charts'>
                <TopProducts/>
                <Schedule/>
            </div>
        </div>
    </div>
    </>
  )
}
