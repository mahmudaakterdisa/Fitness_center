import React from 'react';
import './Customerdetails.css'

const Customerdetails = (Props) => {
    console.log(Props.addingtime);

    let name;
    let age;
    let weight;
    let height;
    let image;
    let times = 0;
    for (const time of Props.addingtime) {
        times = times + time.time;
        name = time.name;
        age = time.age;
        weight = time.weight;
        height = time.height;
        image = time.picture;

    }
    return (
        <div className='coustomer-details-container'>
            <div className='customer-info'>
                <img src={image} alt="" />
                <h1 className='text-color'>
                    {name}
                </h1>
            </div>

            <div className='details-container'>
                <p>{height}Feet</p>
                <p>{weight}kg</p>
                <p>{age}yrs</p>
            </div>
            <h1 className='text-color'>Add a Break</h1>
            <div className='add-break'>
                <p></p>
            </div>
            <h1 className='text-color' >Exercise Details</h1>
            <div className='exercise-time'>
                <p>Exercise time:{times}s</p>
            </div>
            <div className='exercise-time'>
                <p>Break time:{ }</p>

            </div>
            <button id='button-text'>
                Activity Completed
            </button>


        </div>
    );
};

export default Customerdetails;