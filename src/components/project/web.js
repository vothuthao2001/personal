import React from 'react';
import { foodWeb } from '../../assets';
import {BsLink45Deg} from 'react-icons/bs'

function Web() {
    return (
        <div className='w-full '>
        <div className=' text-center'>
        <h2 className='w-full mx-auto text-6xl font-bold'> FOOD LANDING PAGE</h2>
        <img src={foodWeb} alt='Landing page image'/>
        </div>
        <div className=' text-xl pb-10'>
        <h3 className='des font-bold'>Description</h3>
    
       <span className='flex'>
       This is Food landing page, the small project that I used Figma to create the mockups.
       You can see my all mockups here: <a className='flex' href='https://www.figma.com/file/m5cNSRiahq1zzPS8IYKhqP/UXUI_S24_VoThuThao?type=design&node-id=0%3A1&t=DmGkkw4RLPJTJUeY-1'> <u>▶ UI design</u>  </a> 
        </span>
       
        </div>
           
        </div>
    );
}

export default Web;