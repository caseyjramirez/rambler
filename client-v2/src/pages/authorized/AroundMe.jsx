import React, { useState, useEffect } from 'react';
import BusinessCard from "../../components/businessCard";
import Dropdown from "../../components/dropdown";
import NoActivities from '../../components/noActivities';
import { getPostings, getIndustries, getActivities } from "../../services/services";
import { formatNewActivity } from '../../data/newActivityGenerator';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { bookActivity } from '../../services/services';
import { renderVerb } from '../../services/renderings'
import { checkUserSchedule } from '../../services/checkUsersSchedule'

function AroundMe({user, addActivity, userCityCord}) {
    const [postings, setPostings] = useState([])
    const [industries, setIndustries] = useState([])
    const [activityTypes, setActivityTypes] = useState([])
    
    const [postingsOnDisplay, setPostingsOnDisplay] = useState([])
    const [industryQuery, setIndustryQuery] = useState(null)
    const [activityTypeQuery, setActivityTypeQuery] = useState(null)

    const [error, setError] = useState('')
    const [postingOfInterest, setPostingOfInterest] = useState(null)
    const [cord, setCord] = useState(userCityCord)
    const [hasBeenbooked, setHasBeenBooked] = useState(false)
    const [cordHasBeenSet, setCordHasBeenSet] = useState(false)

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })



    useEffect(() => {
        getPostings().then(r => {
            setPostings(r.data);
            setPostingsOnDisplay(r.data);
        })

        getIndustries().then(r => {
            setIndustries(r.data);
        })

        getActivities().then(r => {
            setActivityTypes(r.data)
        })


    }, [])

    useEffect(() => {
        if(industryQuery && activityTypeQuery) {
            setPostingsOnDisplay(postings.filter(posting => posting.user.industry === industryQuery && posting.activity.name === activityTypeQuery))
        } else if(activityTypeQuery) {
            setPostingsOnDisplay(postings.filter(posting => posting.activity.name === activityTypeQuery))
        } else if(industryQuery) {
            setPostingsOnDisplay(postings.filter(posting => posting.user.industry === industryQuery))
        } else {
            setPostingsOnDisplay(postings)
        }
    }, [industryQuery, activityTypeQuery, postings])

    async function onPostingClick(postingId) {
        setHasBeenBooked(false)
        setError('')
        setCordHasBeenSet(true)
        const posting = postings.find(posting => posting.id === postingId)
        setPostingOfInterest(posting);

        const results = await getGeocode({ address: posting.location });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
    }

    async function onGoClick() {
        setError('')
        
        const scheduleConflict = checkUserSchedule(user.activities, postingOfInterest.date)
        console.log(scheduleConflict);
        
        if(scheduleConflict) {
            return setError(scheduleConflict)
        }
        
        const newActivity = formatNewActivity(postingOfInterest, user.id)
        const { data } = await bookActivity(newActivity)
        
        if(data) {
            // add activity to user object
            addActivity({
                id: data.id,
                date: data.date,
                distance: data.distance,
                duration: data.duration,
                location: data.location,
                user: {...data.user_one, industry: data.user_one.industry.name},
                messages: [],
                activity: {
                    id: data.activity.id,
                    name:data.activity.name
                }
            });

            
            // filter out posting
            setPostings(postings => postings.filter(postingObj => postingObj.id !== postingOfInterest.id))
            setPostingsOnDisplay(postings => postings.filter(postingObj => postingObj.id !== postingOfInterest.id))
            
            // set has been booked to true to display message
            setHasBeenBooked(true)
        }
    }

    function onDropDownChange(type, value) {
        if(type === 'industry') {
            if(value === 'All') {
                setIndustryQuery(null)
            } else {
                setIndustryQuery(value)
            }
        } else {
            if(value === 'All') {
                setActivityTypeQuery(null)
            } else {
                setActivityTypeQuery(value)
            }
        }
    }

    return (
        <div className="around-me">
        <div className="around-me-feed">
            <div className="around-me-feed-header flex jc-space-between ai-end">
                <div>
                    <p className="small mb-5">Activity</p>
                    <Dropdown
                        data={activityTypes}
                        onChange={value => onDropDownChange('activity', value)}
                    />
                </div>

                <div>
                    <p className="small mb-5">Industry</p>
                    <Dropdown 
                        data={industries}
                        onChange={value => onDropDownChange('industry', value)}
                    />
                </div>
            </div>
            
            {
                postings && postingsOnDisplay.length >= 1 ? postingsOnDisplay.map(posting => <BusinessCard key={posting.id} data={posting} onClick={onPostingClick}/>) : <NoActivities />
            }

        </div>

        <div className="around-me-map">
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
            {
                postingOfInterest ? (
                    error ? (
                        <div className="around-me-confirmation">
                            <h3 className="large">{error}</h3>
                        </div>
                    ) : (
                        hasBeenbooked ? (
                            <div className="around-me-confirmation">
                                <h3 className="large">Your {renderVerb(postingOfInterest.activity.name).toLowerCase()} with {postingOfInterest.user.first_name} has been scheduled!</h3>
                            </div>
                        ) 
                        : 
                        (
                            <div className="around-me-cta">
                                <button onClick={onGoClick} className='large black span100'>
                                        <h3 className="large">{postingOfInterest.activity.name} with {postingOfInterest.user.first_name}!</h3>
                                </button>
                            </div>
                        )
                    )
                ) 
                : 
                (null)
            }


        </div>
    </div>
    );
}

export default AroundMe;