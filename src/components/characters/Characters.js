import React from "react";
import { GiHeartBeats } from "react-icons/gi";
import { GiAnimalSkull } from "react-icons/gi";
import { GiMale } from "react-icons/gi";
import { GiFemale } from "react-icons/gi";
import { FaLocationArrow } from "react-icons/fa";


export const Characters = ({items}) => {
    return (
        <section className="flex-container">
            {items.map((item) => (
                <div className='card' key={item.id}>
                    <img src={item.image} alt=""/>
                    <h2> {item.name} </h2>
                    <div className='property-style'>
                    </div>
                    <p className='property-style'> <GiHeartBeats/> {item.status} </p>
                    <p className='property-style'> <GiAnimalSkull/> {item.species} </p>
                    <p className='property-style'>{item.gender == 'Male' ? <GiMale/> : <GiFemale/>} {item.gender == 'Male' ? 'Male' : 'Female'} </p>
                    <p className='property-style'> <FaLocationArrow/> {item.location.name} </p>

                </div>
            ))}
        </section>
    )
}