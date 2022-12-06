import React, { useState, useEffect } from 'react';
import BusinessCard from "../../components/businessCard";
import Dropdown from "../../components/dropdown";
import { getPostings } from "../../services/services";
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { bookActivity } from '../../services/services';

function AroundMe({user, addActivity, userCityCord}) {
    const [postings, setPostings] = useState([])
    const [postingOfInterest, setPostingOfInterest] = useState(null)
    const [cord, setCord] = useState(userCityCord)
    const [hasBeenbooked, setHasBeenBooked] = useState(false)
    const [cordHasBeenSet, setCordHasBeenSet] = useState(false)

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })



    useEffect(() => {
        getPostings().then(r => setPostings(r.data))
    }, [])

    console.log(postings);

    async function onPostingClick(postingId) {
        setHasBeenBooked(false)
        setCordHasBeenSet(true)
        const posting = postings.find(posting => posting.id === postingId)
        setPostingOfInterest(posting);

        const results = await getGeocode({ address: posting.location });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
    }

    async function onGoClick() {

        const { data } = await bookActivity({
            distance: postingOfInterest.distance,
            location: postingOfInterest.location,
            date: postingOfInterest.date,
            user_one_id: postingOfInterest.user.id,
            user_two_id: user.id,
            posting_id: postingOfInterest.id,
            activity_id: postingOfInterest.activity.id
        })

        console.log(data);

        if(data) {
            // add activity to user object
            addActivity({
                id: data.id,
                date: data.date,
                distance: data.distance,
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
            
            // set has been booked to true to display message
            setHasBeenBooked(true)
        }



    }


    return (
        <div className="around-me">
        <div className="around-me-feed">
            <div className="around-me-feed-header flex jc-space-between ai-end">
                <div>
                    <button>
                        <h3 className="large">Today</h3>
                    </button>
                </div>
                <div>
                    <p className="small mb-5">Activity</p>
                    <Dropdown />
                </div>

                <div>
                    <p className="small mb-5">Industry</p>
                    <Dropdown />
                </div>
            </div>

            {/* {postings && <BusinessCard data={postings[0]} onClick={onPostingClick}/>} */}
            
            {
                postings && postings.map(posting => <BusinessCard key={posting.id} data={posting} onClick={onPostingClick}/>)
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
                    <div className="around-me-cta">
                        <button onClick={onGoClick} className='large black span100'>
                                <h3 className="large">{postingOfInterest.activity.name} with {postingOfInterest.user.first_name}!</h3>
                        </button>
                    </div>
                ) : (null)
            }


        </div>
    </div>
    );
}

export default AroundMe;