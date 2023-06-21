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
         Now I have nothing but I want to be a ui-ux designer. Can you hired me?
         I'm very happy that I may become a ui-ux designer team member in your team.
         I hope you guy can give me a chance to work. I promise I will not make you disapointed.
         </p>
     </div>
 <div className='flex justify-between'>
     <div>
     <h3 className='text-xl mb-5 mt-[-50px] font-light uppercase font-titleFont'>Contact me</h3>
     <p className='flex gap-5'>
        <span className=' text-2xl text-designColor'>
        <FaLinkedinIn/>
        </span>
        <span className=' text-2xl text-designColor'>
        <FaFacebookF/>
        </span>
    </p>
     </div>
     </div>
 </div>
        </>
    )
}
export default LeftBanner