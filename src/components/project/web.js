import React from 'react';
import { foodWeb } from '../../assets';

function Web() {
    return (
        <div className='w-full '>
        <div className=' text-center'>
        <h2 className='w-full mx-auto text-6xl font-bold'> FOOD LANDING PAGE</h2>
        <img src={foodWeb} alt='Landing page image'/>
        </div>
        <div className=' text-xl pb-10'>
        <h3 className='font-bold'>Description</h3>
       <p>
       
       This is Food landing page, the small project that I used Figma to create those mockups.
       <br/>
       You can see my all mockups here: <u>UI Landing page</u> 

       </p>
        </div>
       
           
        </div>
    );
}

export default Web;