import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Customerdetails.css'

const Customerdetails = (Props) => {

    const showToastMessage = () => {
        toast.success('Activity completed !', {
            position: toast.POSITION.TOP_RIGHT
        });
    };

    let name;
    let age;
    let weight;
    let height;
    let image;

    let exerciseTimes = 0;
    for (const fitnessplan of Props.addingtime) {
        exerciseTimes = exerciseTimes + fitnessplan.time;
        name = fitnessplan.name;
        age = fitnessplan.age;
        weight = fitnessplan.weight;
        height = fitnessplan.height;
        image = fitnessplan.picture;


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

                <button onClick={() => Props.breakexcisetime(10)} className='break-button'>10</button>
                <button onClick={() => Props.breakexcisetime(20)} className='break-button'>20</button>
                <button onClick={() => Props.breakexcisetime(30)} className='break-button'>30</button>
                <button onClick={() => Props.breakexcisetime(40)} className='break-button'>40</button>
                <button onClick={() => Props.breakexcisetime(50)} className='break-button'>50</button>


            </div>
            <h1 className='text-color' >Exercise Details</h1>
            <div className='exercise-time'>
                <p>Exercise time:{exerciseTimes}s</p>
            </div>
            <div className='exercise-time'>
                <p>Break time:{Props.breaktime}s</p>

            </div>
            <button onClick={showToastMessage} id='button-text' className='button-design'>
                Activity Completed
            </button>
            <ToastContainer />



        </div>
    );
};

export default Customerdetails;