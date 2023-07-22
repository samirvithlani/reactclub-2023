import { Button } from '@mui/material'
import React from 'react'

export const MuiButton = (props) => {
  return (
    <div>
        <Button variant={props.varient}>{props.text}</Button>
    </div>
  )
}
