import React from 'react';
import './Availablexercise.css'

const Availableexercise = (Props) => {
    console.log(Props);
    const { instruments, age, time, image } = Props.exercise;
    return (
        <div className='eachexercise-container'>
            <img src={image} alt="" />
        </div>
    );
};

export default Availableexercise;