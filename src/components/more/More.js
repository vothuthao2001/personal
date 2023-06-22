import React from 'react';
import Title from '../layout/Title';
import { seo } from '../../assets';

function More() {
    return (
        <div>
        <section id="more" className=' border-[1px] border-black pt-20'
        >
       <Title title='More' des = 'SEO content'/>
       <div className='w-full flex' >
       <div className=''>
       <h3 className='des font-bold'>Description</h3>
       <span>
       The first job I did was to optimize SEO and run campaigns on Google Ads. 
       From this job, I got to learn many new tools such as Google plan keyword, google trend, google ads,… 
       The picture below is some of the blog posts that I did when working at thinksafe.vn
       </span>

       </div>
       <div className=''>
       <img src={seo}/>
       </div>
       </div>
       </section>    
        </div>
    );
}

export default More;