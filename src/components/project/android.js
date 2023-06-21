import React from 'react';
import { hepat, hepat2 } from '../../assets/index.js';

function Android() {
    return (
        <div className='w-full '>
        <div className=' text-center'>
        <h2 className='w-full mx-auto text-6xl font-bold'> MOBILE APP: HEPAT</h2>
        <img src={hepat}  alt='Landing page'/>
        </div>
        <div className=' text-xl pb-10'>
        <h3 className='font-bold'>Description</h3>
       <p>
       
       This is Food landing page, the small project that I used Figma to create those mockups.
       <br/>
       You can see my all mockups here: <u>UI Landing page</u> 

       </p>
        </div>
        <img src={hepat2} width='50%' alt='Landing page'/>
       
           
        </div>
    );
}

export default Android;