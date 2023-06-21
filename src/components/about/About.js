import React from "react";
import Title from "../layout/Title";
import Tabs from "./Tabs";
const About = ()=>
{
    return (
    <>
    <div>
    <Title title='# About me' des='Who am I?'/>
    <section id='about' className="about w-full h-auto py-20 mt-0">
    <div>
    <Tabs/>
    </div>
      </section>
    </div>
    </>
    

 
    )
}
export default About