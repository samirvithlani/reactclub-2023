import Button from '@mui/material/Button';
import React from 'react'

export const CustButton = (props) => {
    
  return (
    <Button
      onClick={props.onClick}
      color={props.color}
      variant={props.variant}
    >
      {props.text}
    </Button>
  )
}
