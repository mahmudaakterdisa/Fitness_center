import React from 'react';

const Customerdetails = (Props) => {
    console.log(Props);

    let times = 0;
    for (const time of Props.addingtime) {
        times = times + time;
    }
    return (
        <div>
            <h1>Exercise Details</h1>
            <p>Exercise time:{times}s</p>
        </div>
    );
};

export default Customerdetails;