import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {SiTailwindcss, SiFigma, SiNextdotjs} from 'react-icons/si'
import {may2} from '../../assets/index.js'
const LeftBanner = ()=>
{
    const [text] = useTypewriter(
        {
            words: ['Fresher coder','UI-UX designer', 'Frontend developer'],
            loop: true,
            typeSpeed: 20,
            delaySpeed: 2000,
            deleteSpeed: 10,
        },
    )
    return (
        <>
       
     <div className='w-1/2  flex flex-col gap-20' >
     <div className='banner-text flex flex-col gap-3  border-gray'>

             <h4 className='text-3xl font-nomal mt-20'>My web portfolio</h4>
         <h2 className='text-5xl font-bold text-designColor' ><span>{text}</span>
         </h2>
         <p>
         I am currently looking for a job in front-end website or ui-ux design.
          Although I have no previous experience,
           I will constantly improve and learn to meet the best requirements that the company sets out.
         </p>
     </div>
 <div className='flex justify-between'>
     <div>
     <h3 className='contact text-xl mb-5 mt-[-50px] font-light uppercase font-titleFont'>Contact me</h3>
     <div className='icons flex gap-5'>
        <span className=' text-2xl text-designColor'>
        <FaLinkedinIn/>
        </span>
        <span className=' text-2xl text-designColor'>
        <FaFacebookF/>
        </span>
    </div>
     </div>
     </div>
 </div>
        </>
    )
}
export default LeftBanner