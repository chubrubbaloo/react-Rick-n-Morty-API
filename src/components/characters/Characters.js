import React from "react";
import {GiHeartBeats} from "react-icons/gi";
import {GiChoppedSkull} from "react-icons/gi";
import {GiCurlyMask} from 'react-icons/gi'
import {GiMale} from "react-icons/gi";
import {GiFemale} from "react-icons/gi";
import {MdLocationPin} from "react-icons/md";
import {GiHumanTarget} from "react-icons/gi";
import {GiAlienBug} from "react-icons/gi";
import {GiRobotAntennas} from "react-icons/gi";


export const Characters = ({items}) => {
    return (
        <section className="flex-container">
            {items.map((item) => (
                <div className='card' key={item.id}>
                    <img src={item.image} alt=""/>
                    <h3> {item.name} </h3>
                    <div className='property-style'>
                    </div>

                    <p className='property-style'> {item.status === 'Alive' ? <GiHeartBeats/> : item.status === 'Dead' ?
                        <GiChoppedSkull/> : <GiCurlyMask/>}
                        {item.status === 'Alive' ? 'Alive' : item.status === 'Dead' ?
                            'Dead' : 'Unknown Status'}
                    </p>

                    <p className='property-style'> {item.species === 'Human' ? <GiHumanTarget/> : item.species === 'Alien' ? <GiAlienBug/> : <GiRobotAntennas/> }
                        {item.species === 'Human' ? 'Human' : item.species === 'Alien' ? 'Alien' : 'Robot' }

                    </p>

                    <p className='property-style'>{item.gender === 'Male' ? <GiMale/> :
                        <GiFemale/>} {item.gender === 'Male' ? 'Male' : 'Female'} </p>
                    <p className='property-style'><MdLocationPin/> {item.location.name} </p>

                </div>
            ))}
        </section>
    )
}