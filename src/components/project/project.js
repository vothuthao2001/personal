import React from 'react';
import Title from '../layout/Title';
import Web from './web';
import Android from './android';



function Project() {
    return (
        <div>
        <section id="project" className=' border-[1px] border-black'
        >
       <Title title='Skill' des = 'What did I do?'/>
       <div>
       <Web/>
       
       <Android/>
       </div>
       </section>    
        </div>

    );
}

export default Project;