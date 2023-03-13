import React from 'react'
import useProp from '../hooks/useProp';

export const Test = () => {
    const {toUpperCase,error} = useProp({name:"samir"});
    console.log(error);
  return (
    <div>
        <h1>{toUpperCase("ama")}</h1>
    </div>
  )
}
