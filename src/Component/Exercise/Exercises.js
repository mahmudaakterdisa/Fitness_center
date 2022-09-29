import React, { useEffect, useState } from 'react';
import { addToDb, getCart, getDetails } from '../../utilities/fitdb';

import Availableexercise from '../AvailableExercise/Availableexercise';
import Customerdetails from '../Customerdetails/Customerdetails';
import './Exercises.css'
const Exercises = () => {
    const [exercises, setExercise] = useState([])
    // const [storeddata, setStoreddata] = useState([])
    const [addingtime, setAddingTime] = useState([])
    const [breaktime, setBreaktime] = useState(0)



    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => setExercise(data))
    }, [])


    //for local storage
    useEffect(() => {

        const locallystored = getDetails();

        const storedata = [];
        for (const id in locallystored) {
            const exerciseid = exercises.find(exercise => exercise._id === id);
            if (exerciseid) {

                const quantity = locallystored[id];
                exerciseid.quantity = quantity;
                storedata.push(exerciseid);

            }

        }
        setAddingTime(storedata);

    }, [exercises])



    //exercise time button event handler
    const addTolist = (exercisedetails) => {
        const newdata = [...addingtime, exercisedetails];

        setAddingTime(newdata);
        addToDb(exercisedetails._id);
    }

    // add Break time button event handler
    const breakexcisetime = (event) => {
        let addbreak = 0;
        addbreak = event;

        setBreaktime(addbreak);

    }
    return (
        <div className='exercise-container'>
            <div>
                <div className='available-exercise'>
                    {
                        exercises.map(exercise => <Availableexercise key={exercise._id} exercise={exercise} addTolist={addTolist}></Availableexercise>)
                    }
                </div>
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