import React, { useState } from 'react'
import { Pie } from "react-chartjs-2";
import {Chart as ChartJS, ArcElement} from 'chart.js/auto'
ChartJS.register(ArcElement);

export const PieCh = (props) => {
    
  return (
    <div style={{height:200 ,width:200}}>
        <Pie
        data={props.data}
        options={{
          title: {
            display: true,
            text: "Pie Chart",
          },
        }}
      />

    </div>
  )
}

