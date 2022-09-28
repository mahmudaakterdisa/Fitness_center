import React, { useEffect, useState } from 'react';
import Availableexercise from '../AvailableExercise/Availableexercise';
import './Exercises.css'
const Exercises = () => {
    const [exercises, setExercise] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(response => response.json())
            .then(data => setExercise(data))
    }, [])
    return (
        <div className='exercise-container'>
            <div className='available-exercise'>
                {
                    exercises.map(exercise => <Availableexercise key={exercise._id} exercise={exercise}></Availableexercise>)
                }
            </div>

            <div className='fitness-details'>
                <h3>data</h3>
            </div>
        </div>
    );
};

export default Exercises;