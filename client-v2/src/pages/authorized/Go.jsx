 import React, { useState } from 'react';
import Input from "../../components/input";
import DaySelector from "../../components/daySelector";
import ActivitySelector from '../../components/activitySelector';


function Go() {
    const [day, setDay] = useState('')
    const [activity, setActivity] = useState('')

    function renderVerb() {
        if(activity) return `Go ${activity}!`
        else return 'Select Activity'
    }


    console.log(day);
    return (
        <div className="go">
            <div className="go-map">

                <div className="go-activity-container mb-20">
                    <Input />
                    <DaySelector day={day} setDay={setDay} />

                    <div className="two-column-row">
                        <div>
                            <Input />
                        </div>

                        <div className="ml-3-rem">
                            <Input />
                        </div>
                    </div>

                    <ActivitySelector activity={activity} setActivity={setActivity} />

                    <div className="span100 flex ai-center jc-center">
                        <button className='black bold large'>
                            <h3 className="large">{renderVerb()}</h3>
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Go;