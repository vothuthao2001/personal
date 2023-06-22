import React from 'react';
import Card from './card';
import Title from '../layout/Title';
import { level, ae,photoshop, reactImage, figma,node } from '../../assets/index.js';
function Skill() {
    return (
        <div>
            <section id="about" className=' border-[1px] border-black'
            >
           <Title title='Skill' des = 'What can I do?'/>
        <div className='w-full'>
        <div className='title-skill pb-10 text-2xl font-tileFont font-bold'>Knowledge about programming</div>
            <div className='skill-list list flex justify-center gap-20 pb-10 '> 
            <ul className='ul'>
            <li>HTML5 & CSS3</li>
            <li>ReactJs (Basic learning)</li>
            <li>NodeExpress (Basic learning)</li>
            </ul>
            <ul className='ul'>
            <li>SQL</li>
            <li>Figma</li>
            <li>Git</li>
            </ul>
            <ul className='ul'>
            <li>UI-UX design</li>
            <li>SEO</li>
            </ul>
            </div>
            <div className='skill-icon flex justify-center gap-20 py-10'>
            <img src={reactImage}/>
            <img src={node}/>
            <img src={figma}/>
            </div>
        </div>
        <div className='graphic'>
        <div className='title-skill pb-10 text-2xl font-tileFont font-bold'>Graphic design software</div>
        <div className="card-container">
        <div className="card-skill">
           <img src={photoshop} className="skill-image" alt="" />
       
        </div>

        <div className="card-skill">
        <img src={ae} className="skill-image" alt="" />
    
     </div>

        
     </div>

    <div className='laguage-skill py-10'>
    <div className=' pb-10 text-2xl font-tileFont font-bold'>English skill - TOEIC</div>
       <div className='flex justify-center items-center gap-40'> <div className='toeic'>
       <span className="laguage-skill">Listening & Reading</span>
       <span className="curcle text-6xl border-[1px] border-gray">605</span>  
   </div>
   <div className='toeic'>
   <span className="laguage-skill">Writting & Speaking</span>
   <span className="curcle text-6xl border-[1px] border-gray">270</span>  </div>
    </div>
    </div> 


       </div>
            </section>
        
        </div>
    );
}

export default Skill;