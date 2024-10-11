import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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

export const Button=({onClick,bgcolor,textcolor,text})=>{
    return(
        <button
        onClick={onClick}
        style={{background:bgcolor,color:textcolor}}
        className="w-full md:w-[25vw] mt-5 text-white rounded-2xl text-xl px-5 py-2 transition-opacity duration-300 ease-in-out active:opacity-75"
      >
       {text}
      </button>
    )
}

export const NavigationBution=({setActive,pagename,icondirection})=>{
  return(
    <div className="absolute z-50 bottom-5 right-3 md:bottom-10 "> 
      <div className='relative w-20 h-20 flex justify-center items-center'>
      <div className='w-20 h-20 rounded-full bg-primaryColor opacity-50 absolute'/>
      <button onClick={()=>setActive(pagename)} className="bg-primaryColor flex items-center justify-center rounded-full w-12 h-12 py-4 relative z-50 ">
      {icondirection}
    </button>
      
     

      </div>
    


 
  </div> 
  )
}