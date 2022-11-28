import React, { useState } from 'react';
import Input from "../../components/input";
import DaySelector from "../../components/daySelector";
import ActivitySelector from '../../components/activitySelector';
import LocationInput from '../../components/locationInput';
import {getDate} from '../../data/daySelector';

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'


function Go() {
    
    const [day, setDay] = useState('')
    const [activity, setActivity] = useState('')
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState(0)
    const [cord, setCord] = useState({ lat: 30.282569, lng: -97.735369 })

    function renderVerb() {
        if(activity) return `Go ${activity}!`
        else return 'Select Activity'
    }

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })

    console.log(location);


    return (
        <div className="go">
            <div className="go-map">

                {isLoaded ? (
                  <GoogleMap 
                    center={cord} 
                    zoom={15} 
                    mapContainerStyle={{ width: '100%', height: '100%' }} 
                    options={{
                        streetViewControl: false
                    }}
                  >
                    {cord && <MarkerF position={cord} />}
                  </GoogleMap>
                ) : (null)}
                

                <div className="go-activity-container mb-20">
                    
                    <LocationInput 
                        setCord={setCord}
                        setLocation={setLocation}
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