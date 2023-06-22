import React from 'react';
import Title from '../layout/Title';
import Web from './web';
import Android from './android';
import todomp4 from '../../assets/video/todo.mp4';


function Project() {
    return (
        <div>
        <section id="project" className=' border-[1px] border-black'
        >
       <Title title='Skill' des = 'What did I do?'/>
       <div>
       <Web/>
       
       <Android/>

       <div>
       </div>
       </div>
       </section>    
        </div>

    );
}

export default Project;