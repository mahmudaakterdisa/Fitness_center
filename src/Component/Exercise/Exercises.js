import React, { useEffect, useState } from 'react';
import Availableexercise from '../AvailableExercise/Availableexercise';
import Customerdetails from '../Customerdetails/Customerdetails';
import './Exercises.css'
const Exercises = () => {
    const [exercises, setExercise] = useState([])
    const [addingtime, setAddingTime] = useState([])

    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => setExercise(data))
    }, [])

    const addTolist = (time) => {
        const newdata = [...addingtime, time];

        setAddingTime(newdata);
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
                    // addingtime.map(addtime => <Customerdetails key={addtime._id} addtime={addtime}></Customerdetails>)
                    <Customerdetails addingtime={addingtime}></Customerdetails>
                }
            </div>
        </div>
    );
};

export default Exercises;