import { Button } from "@mui/material";
import React from "react";
import SendIcon from '@mui/icons-material/Send';

export const MuiDemo1 = () => {
  return (
    <div>
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="contained" color="primary" startIcon={<SendIcon/>}>Primary</Button>
      <Button variant="contained" color="primary" endIcon={<SendIcon/>}>Primary</Button>
    </div>
  );
};
