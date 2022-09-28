import React from 'react';
import './Availablexercise.css'

const Availableexercise = (Props) => {
    console.log(Props);
    const { addTolist } = Props;
    const { instruments, age, time, image } = Props.exercise;
    return (
        <div className='eachexercise-container'>
            <img src={image} alt="" />
            <div className='plan-details'>
                <h1>{instruments}</h1>
                <h3>Age:{age}</h3>
                <h4 >Time-duration:{time}s</h4>

            </div>



            <button onClick={() => addTolist(time)} id='btn'>
                Add To List
            </button>
        </div>
    );
};

export default Availableexercise;