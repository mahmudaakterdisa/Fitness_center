import React, { useEffect, useState } from 'react';
import Availableexercise from '../AvailableExercise/Availableexercise';
import Customerdetails from '../Customerdetails/Customerdetails';
import './Exercises.css'
const Exercises = () => {
    const [exercises, setExercise] = useState([])
    const [addingtime, setAddingTime] = useState([])
    const [breaktime, setBreaktime] = useState(0)

    console.log(breaktime)
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => setExercise(data))
    }, [])

    //exercise time button event handler
    const addTolist = (exercisedetails) => {
        const newdata = [...addingtime, exercisedetails];

        setAddingTime(newdata);
    }

    // add Break time button event handler
    const breakexcisetime = (event) => {
        let addbreak = 0;
        addbreak = event;

        setBreaktime(addbreak);

    }
    return (
        <div className='exercise-container'>
            <div className='available-exercise'>
                {
                    exercises.map(exercise => <Availableexercise key={exercise._id} exercise={exercise} addTolist={addTolist}></Availableexercise>)
                }
            </div>

            <div className='fitness-details'>
                {


                    <Customerdetails addingtime={addingtime} breakexcisetime={breakexcisetime} breaktime={breaktime}></Customerdetails>
                }
            </div>
        </div>
    );
};

export default Exercises;