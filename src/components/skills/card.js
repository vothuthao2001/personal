import React from "react";
const Card = ({title, des, icon}) =>
{
    return (
        <div className="w-full px-12 h-40 rounded-sm shadow-shadowOne 
       items-center ">
        <span className="text-5xl text-designColor">{icon}</span>
        <h3 className="w-full text-4xl py-5 color-white-500 font-bold">{title}</h3>
        <span>{des}</span>
       
        </div>
    )
}
export default Card;