import React from 'react';
import {Pie} from 'react-chartjs-2';
import {Chart,ArcElement, Legend,Tooltip} from 'chart.js';
import './topProducts.css';
Chart.register(
    ArcElement,
    Legend,
    Tooltip,
)

export const TopProducts = () => {
    const data = {
        labels: ['Basic Tees','Custom Short Pants','Super Hoodies'], 
        datasets : [
            {
                label:'Guest',
                data:[55,31,14],
                backgroundColor: [
                    '#9BDD7C',
                    '#F6DC7D',
                    '#E9A0A0',
                    
                  ],
                  borderColor: [
                    'transparent',
                    'transparent',
                    'transparent',
                  ],
            },
        ]
    };
    const options = {
        
        responsive: true,
        tension: 0,
        plugins: {
            legend:{
                display: false,
               /*  position: 'right',
                align: 'center',
                labels:{
                    usePointStyle: true,
                    pointStyleWidth:15,
                }, */
            },
        },
        scales:{
            x: {
                ticks: {
                    display: false,
                },
                grid:{
                    display: false,
                },
                border:{
                    display: false,
                }

            },
            y:{
                ticks: {
                    display: false,
                },
                grid: {
                    display: false,
                    
                },
                border:{
                    display: false,
                }
            }
        }
    };
  return (
    <>
    <div className='pie-chart'>
        <div className='information'>
            <h3 className='heading'>Top products</h3>
            <select name="" id="selection">  
            <option value="">May - June 2021</option>
            <option value="">June - July 2021</option>
            </select>
        </div>
        <div className='chart-info'>
        <Pie data={data} options={options} width={10} ></Pie>
        <ul>
            <li>Basic Tees</li>
            <span className='percentage'>55%</span>
            <li>Custom Short Pants</li>
            <span className='percentage'>31%</span>
            <li>Super Hoodies</li>
            <span className='percentage'>14%</span>
        </ul>
        </div>
            
    </div>
    </>
  );
}
