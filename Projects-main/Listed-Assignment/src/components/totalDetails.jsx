import React from 'react';
import './totalDetails.css';
import {HiOutlineInboxArrowDown} from 'react-icons/hi2';
import {BsTags} from 'react-icons/bs';
import {AiOutlineLike} from 'react-icons/ai';
import {FiUsers} from 'react-icons/fi';

export const TotalDetails = () => {
  return (
    <>
    <div className='all-cards'>
        <div className='revenue-card'>
            <HiOutlineInboxArrowDown size={25} style={{float: 'right'}}/><br/>
            <p className='title'>Total Revenues</p>
            <p className='title-detail'>$2,129,430</p>
        </div>
        <div className='transactions-card'>
            <BsTags size={25} style={{float: 'right'}}/><br/>
            <p className='title'>Total Transactions</p>
            <p className='title-detail'>1,520</p>
        </div>
        <div className='likes-card'>
            <AiOutlineLike size={25} style={{float: 'right'}}/><br/>
            <p className='title'>Total Likes</p>
            <p className='title-detail'>9,721</p>
        </div>
        <div className='users-card'>
            <FiUsers size={25} style={{float: 'right'}}/><br/>
            <p className='title'>Total Users</p>
            <p className='title-detail'>892</p>
        </div>
    </div>
    </>
  )
}
