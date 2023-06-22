import React from 'react';
import {useTypewriter} from 'react-simple-typewriter'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = ()=>
{
    const [text] = useTypewriter(
        {
            words: ['Fresher coder', 'full-stack developer','UI design'],
            loop: true,
            typeSpeed: 20,
            delaySpeed: 2000,
            deleteSpeed: 10,
        },
    )
    return (
        <>
        <section id='home' className='banner w-full py-20 flex border-b-[1px] border-b-black font-titleFont'>
      
            <LeftBanner ></LeftBanner>
            <RightBanner />
       
        </section>
        </>
    )
}

export default Banner;