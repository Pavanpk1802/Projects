import React from 'react';
import './schedule.css';

export const Schedule = () => {
  return (
    <div className='schedule'>
        <div className='schedule-info'>
            <h3>Today's schedule</h3>
            <span>see all</span>
        </div>
        <div className='schedule-one'>
            <h5>Meeting with suppliers from Kuta Bali</h5>
            <p>14.00-15.00</p>
            <p>at Sunset Road,Kuta,Bali</p>
        </div>
        <div className='schedule-two'>
            <h5>Check operation at Giga Factory 1</h5>
            <p>18.00-20.00</p>
            <p>at Central Jakarta</p>
        </div>
    </div>
  )
}
