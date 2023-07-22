import React, { useState } from 'react'
import { Bar, Bubble, Line, Scatter } from 'react-chartjs-2'
import { PieCh } from './PieCh'

export const PieChart = () => {
    const [data, setdata] = useState({
        labels:["Red","Green","Yellow"],
        datasets:[
            {
                label:"My First Dataset",
                data:[300,50,100],
                backgroundColor:[
                    'rgb(255,99,132)',
                    'rgb(75,192,192)',
                    'rgb(255,205,86)'
                ],
                hoverOffset:4,
                borderWidth:1
                
            }
        ]
    })
  return (
    <div>
        {/* <PieCh data={data}/> */}
        {/* <Bar data={data}/>
        <Line data={data}/> */}
        {/* <Scatter data={data}/> */}
        {/* <Bubble data={data}/> */}
    </div>
  )
}
