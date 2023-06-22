import React from 'react';
import { image3 } from '../../assets/index.js';

const RightBanner = ()=>{
    return (
        <>
        <div className='w-1/2 my-[-80px] bg-black-300 flex justify-center items-center relative '>
        <img className='banner-image w-[500px] h-[auto]] z-10 mt-20' src={image3} >
        </img>
        <div className='absolute bottom-[-30px] w-[550px] h-[500px] shadow-shadowOne flex justify-center border-gray border-[3px]'>
        </div>
        
        </div></>
    )
}



export default RightBanner;