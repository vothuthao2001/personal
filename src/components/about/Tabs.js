import React from 'react';
import { image3 } from "../../assets";
import {IoIosSchool, IoIosInformationCircle, IoIosBookmark} from 'react-icons/io'
class Tabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'infomation',
    };
  }

  handleTabClick = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <div className="tabs flex justify-center items-center gap-20 font-regular text-2xl">
        <button
        className={`tab ${activeTab === 'infomation' ? 'active' : ''}`}
        onClick={() => this.handleTabClick('infomation')}>
        <span className='flex gap-3 tab-icon '> <IoIosInformationCircle className='text-3xl'/> Information </span> 
      </button>
          <button
            className={`tab ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => this.handleTabClick('education')}>
          <span className='flex gap-3 tab-icon'> <IoIosSchool  className='text-3xl' /> Education </span> 
          </button>
          <button
            className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => this.handleTabClick('experience')}>
            <span className='flex gap-3 tab-icon'><IoIosBookmark  className='text-3xl'/>  Experience </span> 
     
          </button>

        </div>

      <div className='tab-content w-full flex items-center'>
        <div className="w-1/3">
        <img className='' src={image3} /> </div>

      <div className='w-2/3'>
        {activeTab === 'education' && (
          <div id="education" className="tab-contents  active-tab " >
          <ul className="mx-20 my-10 border-[1px]">
          <div className=" w-full height-full border-[1px] m-[-10px]  py-10 px-10  ">
      
          <li>
          <span  className='font-bold'>#2019 - Present</span> <br/>- Study at University of Economics and Law (UEL) - Viet Nam National University Ho Chi Minh City
          <br/><i> Facticular Information Technology System - Major: Ecommerce </i>
          </li>
          </div>
          </ul>
         
      </div>
        )}

        {activeTab === 'experience' && (
          <div id="education" className="tab-contents active-tab " >
          <ul className="mx-20 my-10 border-[1px] relative">
          <div className=" w-full height-full border-[1px]  m-[-10px]  py-10 px-10   ">
          <li>
          <span  className='font-bold'>#08.2022 - 02.2023</span> 
          <br/> - Work for THINKSAFE.VN (Business about safety equipment)
          <br/> <i>Main task: Optimizer SEO, content writer. Update product details to business website and e-commerce website like: Lazada, Shopee</i>
          </li>
          </div>
          </ul>
         
      </div>
        )}

        {activeTab === 'infomation' && (
          <ul className="mx-20 my-10 border-[1px]">
          <div className=" flex w-full height-full border-[1px] m-[-10px]  py-10 px-10  ">
      <div className='w-1/2'>          
      <li>
      <p>
      <label ><b>Full name:</b></label> <span>VO THU THAO</span>
      </p>
     </li>
     <li>
     <p>
     <label ><b>Date of birth:</b></label> <span>29.06.2001</span>
     </p>
     </li>
     <li>
     <p>
     <label ><b>Birth place:</b></label> <span>Binh Thuan province</span>
     </p>
     </li>
      </div>
      <div className='w-1/2'>          
      <li>
      <p>
      <label ><b>Present address:</b></label> <span>Linh Trung, Thu Duc</span>
      </p>
     </li>
      </div>
          </div>
          </ul>
        )}
      </div>
      </div>

      </div>
    );
  }
}

export default Tabs;
