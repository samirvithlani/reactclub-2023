import React from 'react'
import { CustButton } from '../hooks/CustButton'
import DynamicButton from '../hooks/DynamicButton'

export const CheckButton = () => {
    const test = ()=>{
        alert("test")
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted!');
      };
    const handleClick = () => {
        console.log('Button clicked!');
      };
      const handleClick1 = () => {
        console.log('Button clicked! .........');
      };
    
  return (
    <div>
        <CustButton text="Click me 1"
        onClick={test}
        color="primary"
        variant="contained"></CustButton>

        <DynamicButton
        text="dynamic button11"
        // onClick={handleClick}
        onMouseEnter={handleClick1}
        color="primary"
        variant="contained"
        type="button"
      />
       <DynamicButton
        text="Submit"
        onClick={handleSubmit}
        color="secondary"
        variant="contained"
        type="submit"
      />
    </div>
  )
}
