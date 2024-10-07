import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
export const Textinput=({onChange,label,type,value})=>{
   
    return(
    <>
    <div className='mt-5'>
    <TextField 
    className='w-[60vw] md:w-[25vw]' 
    id="outlined-basic" 
    label={label} 
    type={type}
    value={value}
    variant="outlined"
    onChange={(e)=>onChange(e)}

      sx={{
        '& .MuiOutlinedInput-root': {
          backgroundColor: 'lightyellow', // Set background color
          height: '50px',
          '& fieldset': {
            borderColor: '#FFC107', // Default border color
          },
          '&:hover fieldset': {
            borderColor: '#073945', // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor:'#073945', // Border color when focused
          },
          
        },
        '& .MuiInputLabel-root': {
          color: '#073945', // Default label color
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#073945', // Label color when focused
        },
        '&:hover .MuiInputLabel-root': {
          color: '#073945', // Label color on hover
        },
      }}
    /> 
    </div>
    </>
    )
}

export const Button=({onClick})=>{
    return(
        <button
        onClick={onClick}
        className="bg-secondaryColor w-full md:w-[25vw] mt-5 text-white rounded-2xl text-xl px-5 py-2"
      >
       Submit
      </button>
    )
}