import React, { useState } from 'react';
import Input from "../../components/input";
import DaySelector from "../../components/daySelector";
import ActivitySelector from '../../components/activitySelector';

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";


import {getDate} from '../../data/daySelector';



function Go() {
    
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
    
    const [day, setDay] = useState('')
    const [activity, setActivity] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState(0)

    function renderVerb() {
        if(activity) return `Go ${activity}!`
        else return 'Select Activity'
    }

    const {isLoaded} = useLoadScript({
        // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })


    return (
        <div className="go">
            <div className="go-map">

                
                
                
                
                <div className="go-activity-container mb-20">
                    <Input 
                        label='Location'
                        value={location}
                        onChange={setLocation}
                    />
                    <DaySelector day={day} setDay={setDay} />

                    <div className="two-column-row">
                        <div>
                            <Input 
                                label='Time'
                                value={time}
                                onChange={setTime}
                                type='time'
                            />
                        </div>

                        <div className="ml-3-rem">
                            <Input 
                                label='Distance'
                                value={distance}
                                onChange={setDistance}
                                type='number'
                            />
                        </div>
                    </div>

                    <ActivitySelector activity={activity} setActivity={setActivity} />

                    <div className="span100 flex ai-center jc-center">
                        <button className='large grey go-shadow'>
                            <h3 className="large">{renderVerb()}</h3>
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Go;