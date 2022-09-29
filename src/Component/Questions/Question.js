import React from 'react';
import './Questions.css'

const Question = () => {
    return (
        <div className='questions-design'>
            <div >
                <h1>
                    How does react work?
                </h1>
                <p>
                    React uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible
                </p>

            </div>
            <div >
                <h1>
                    Props vs state
                </h1>
                <p>
                    props are passed via component properties, they're not reactive. State are variables that react will react , updating the UI when values changes
                </p>
            </div>
            <div >
                <h1>
                    works of useEffect without loading data?
                </h1>
                <p>
                    The useEffect Hook is called every time the component renders. It works similarly to componentDidMount and componentDidUpdate in React class components
                </p>
            </div>

        </div>
    );
};

export default Question;