import React from 'react';
import Button from '@mui/material/Button';

const DynamicButton = ({ text, onClick, color, variant, type, ...rest }) => {
    console.log(rest)
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  const handleClick1 = () => {
    if (rest.onMouseEnter) {
        rest.onMouseEnter();
    }
  };

  return (
    <Button
    //   onClick={handleClick}
    onMouseEnter={handleClick1}
      onDoubleClick={handleClick1}
      color={color}
      variant={variant}
      type={type}
      {...rest}
    >
      {text}
    </Button>
  );
};

export default DynamicButton;
