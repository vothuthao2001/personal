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
        <h3 className='des font-bold'>Description</h3>
       <span>
       
       This is a mobile app about booking appointments for patients. Project had been made by my team in the third-year university.
       We used Android studio to build the app and the language programming are XML and Kotlin.
       We also used mySQL to save data in the database.
    <a>   <u> ▶Link Github HEPAT app</u> </a> 

       </span>
        </div>
        <img src={hepat2} width='50%' alt='Landing page'/>
       
           
        </div>
    );
}

export default Android;