import React, { useState } from 'react';
import Input from "../../components/input";
import DaySelector from "../../components/daySelector";


function Go() {
    const [day, setDay] = useState('')


    console.log(day);
    return (
        <div className="go">
            <div className="go-map">

                <div className="go-activity-container mb-20">
                    <Input />
                    <DaySelector day={day} setDay={setDay} />

                </div>

            </div>
        </div>
    );
}

export default Go;