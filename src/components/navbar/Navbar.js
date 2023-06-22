import React from "react";
import {logo} from '../../assets/index.js';
import { navLinksdata } from "../../constants";
import { FaBars } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () =>
{
    return (
    <div className="res-nav fixed">
    <button className="fabar text-3xl md:relative"
    onClick={()=>{
      let resmenu = document.querySelector('.menu');
      resmenu.classList.toggle('hide');
      console.log("ok");
    }} >
    <FaBars />
    </button>

    <div className="menu w-full flex items-center font-titleFont border-b-[1px] border-b-gray-600" >

      <img className="avatar" src={logo} alt = 'logo' width={100} height={100}/>
      <ul className=" flex items-center gap-10 mx-20">
      {navLinksdata.map(({_id,title,link}) =>(
        // thay vi map ( navLink =>  co the direct ({_id: navLink})
        <li className = "nav-links text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-500" key={_id}> 
       <Link
       activeClass = "active"
       to = {link}
       spy={true}
        smooth= {true}
        offset={-70}
        duration={500} >
       {title} </Link>
       </li>
      ))}
      </ul>
  </div>
  </div>


    )
    
}
export default Navbar;