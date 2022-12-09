import React, { useState, useEffect } from 'react';
import Input from "../../components/input";
import DaySelector from "../../components/daySelector";
import ActivitySelector from '../../components/activitySelector';
import LocationInput from '../../components/locationInput';
import { createPosting, getActivities } from '../../services/services';
import { getDate} from '../../data/daySelector';
import { validateNewPosting } from '../../services/postingValidation';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import Error from '../../components/error';
import { renderVerb } from '../../services/renderings'


function Go({ user, userCityCord }) {
    
    const [activities, setActivities] = useState([])
    const [day, setDay] = useState('')
    const [activity, setActivity] = useState('')
    const [activityId, setActivityId] = useState(null)
    const [location, setLocation] = useState('')
    const [time, setTime] = useState('')
    const [distance, setDistance] = useState(0)
    const [cord, setCord] = useState(userCityCord)
    const [error, setError] = useState('')
    const [isPosted, setIsPosted] = useState(false)
    const [cordHasBeenSet, setCordHasBeenSet] = useState(false)

    useEffect(() => {
        getActivities().then(r => setActivities(r.data));
        userCityCord && setCord(userCityCord)
    }, [])


    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })

    async function handleSubmit(e) {
        e.preventDefault()
        setError('')

        const error = validateNewPosting(day, activityId, location, distance, time)

        if(error) {
            return setError(error)
        }
        const dateOfDay = getDate(day);        
        const date = new Date(`${dateOfDay} ${time}`)
        const now = new Date()
        
        if(date < now) {
            return setError('Choose a future date')
        }

        const data = await createPosting({
            distance, 
            date: date.toISOString(), 
            location,  
            activity_id: activityId,
            user_id: user.id, 
            isFilled: false
        })

        if(data.status === 201) {
            setIsPosted(true)
        }
    }

    function onSectActivity(activity) {
        const activityId = activities.find(item => item.name === activity).id
        setActivity(activity)
        setActivityId(activityId)
    }

    function onLocationChange(location) {
        setLocation(location)
        setCordHasBeenSet(true)
    }


    return (
        <div className="go">
            <div className="go-map">

                {isLoaded ? (
                  <GoogleMap 
                    center={cord || userCityCord} 
                    zoom={cordHasBeenSet ? 15 : 13}
                    mapContainerStyle={{ width: '100%', height: '100%' }} 
                    options={{
                        zoomControl: false,
                        streetViewControl: false,
                        mapTypeControl: false,
                        fullscreenControl: false,
                    }}
                  >
                    {cordHasBeenSet && <MarkerF position={cord} />}
                  </GoogleMap>
                ) : (null)}
                

                    {isPosted ? (
                        <div className="go-activity-confirmation-container mb-20 flex center-center">
                            <h3 className='large'>Your {renderVerb(activity).toLowerCase()} has been posted!</h3>
                        </div>
                    ) : (
                        <div className="go-activity-container mb-20">                    
                            <LocationInput 
                                setCord={setCord}
                                setLocation={onLocationChange}
                            />
                            

                            <DaySelector day={day} setDay={setDay} />

                            <div className="two-column-row">
                                <div>
                                    <Input 
                                        label='Time'
                                        value={time}
                                        onChange={e => setTime(e.target.value)}
                                        type='time'
                                    />
                                </div>

                                <div className="ml-3-rem">
                                    <Input 
                                        label='Distance'
                                        value={distance}
                                        onChange={e => setDistance(e.target.value)}
                                        min={0}
                                        max={60}
                                        type='number'
                                    />
                                </div>
                            </div>

                            <ActivitySelector activity={activity} setActivity={onSectActivity} />

                            <div className="span100 flex flex-column ai-center jc-center">
                                <button onClick={handleSubmit} className='large grey go-shadow'>
                                    <h3 className="large">Go!</h3>
                                </button>
                                {error && <Error error={error} />}
                            </div>
                        </div>

                    )}



            </div>
        </div>
    );
}

export default Go;