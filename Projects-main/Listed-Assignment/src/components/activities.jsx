import React from 'react';
import {Line} from 'react-chartjs-2';
import {Chart,LinearScale,CategoryScale,LineElement, PointElement,Legend,Title,Tooltip} from 'chart.js';
import './activities.css';

Chart.register(
    LinearScale,
    CategoryScale,
    LineElement,
    PointElement,
    Legend,
    Title,
    Tooltip
)


export const Activities = () => {
    const data = {
        labels: ['','Week 1','Week2','Week3','Week4',''], 
        datasets : [
            {
                label:'Guest',
                data:[200,390,200,300,210,450],
                backgroundColor:'transparent',
                borderColor: '#E9A0A0',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension:0.5
            },
            {
                label:'User',
                data:[100,400,150,450,180,260],
                backgroundColor:'transparent',
                borderColor: '#9BDD7C',
                pointBorderColor: 'transparent',
                pointBorderWidth: 4,
                tension:0.5
            }
        ]
    };
    const options = {

        tension: 0,
        plugins: {
            legend:{
                position: 'top',
                align: 'end',
                /* labels:{
                    usePointStyle: true,
                }, */
            },
        },
        scales:{
            x: {
                grid:{
                    display: false

                }
            },
            y:{
                min:0,
                max:500,
                ticks: {
                    stepSize: 100,
                },
                border:{
                    display: false,
                }
            }
        }
    };
  return (
    <>
    <div className='chart-div'>
        <h3 className='heading'>Activities</h3>
        <select name="" id="selection">  
        <option value="">May - June 2021</option>
        <option value="">June - July 2021</option>
        </select>
        <Line data={data} options={options} width={80} height={10}></Line>
    </div>
    </>
  )
}
