import React, { useState } from 'react'
import { MuiButton } from '../components/MuiButton'
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers';

export const DashBoard = () => {


  var date = new Date()
  console.log(date.getDate())

  
  //dayjs current date
  console.log(dayjs().format('DD/MM/YYYY'))
  return (
    <div>
        PRODUCT DISPLAY
        <MuiButton varient ="contained" text="click me"></MuiButton>
        <DateCalendar defaultValue={dayjs('2022-04-17')} />
  
        {/* {value?.format('DD/MM/YYYY')} */}
    </div>
  )
}
