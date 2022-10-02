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


export const Characters = ({characters}) => {
    return (
        <section className="flex-container">
            {characters.map((character) => (
                <div className='card' key={character.id}>
                    <img src={character.image} alt=""/>
                    <h3> {character.name} </h3>
                    <div className='property-style'>
                    </div>

                    <p className='property-style'> {character.status === 'Alive' ? <GiHeartBeats/> : character.status === 'Dead' ?
                        <GiChoppedSkull/> : <GiCurlyMask/>}
                        {character.status === 'Alive' ? 'Alive' : character.status === 'Dead' ?
                            'Dead' : 'Unknown Status'}
                    </p>

                    <p className='property-style'> {character.species === 'Human' ?
                        <GiHumanTarget/> : character.species === 'Alien' ? <GiAlienBug/> : <GiRobotAntennas/>}
                        {character.species === 'Human' ? 'Human' : character.species === 'Alien' ? 'Alien' : 'Robot'}
                    </p>

                    <p className='property-style'>{character.gender === 'Male' ? <GiMale/> :
                        <GiFemale/>} {character.gender === 'Male' ? 'Male' : 'Female'} </p>
                    <p className='property-style'><MdLocationPin/> {character.location.name} </p>

                </div>
            ))}
        </section>
    )
}