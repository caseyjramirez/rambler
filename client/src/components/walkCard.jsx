import React, { useState, useEffect } from 'react';
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import { getGeocode, getLatLng } from "use-places-autocomplete";

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const weekday = ["Sun","Mon","Tues","Wed","Thur","Fri","Sat"];

function WalkCard({ data, setConvo }) {
    const { user, distance, location, date } = data;
    const [cord, setCord] = useState(null)

    // console.log(data);
    
    useEffect(() => {
        const getCords = async () => {
           const results = await getGeocode({ address: location });
           const { lat, lng } = await getLatLng(results[0]);
           setCord({ lat, lng });
        }

        getCords()
    }, [])
    

    function renderMileWord() {
        if(distance === 1) return 'Mile'
        else return 'Miles'
    }

    function renderDate() {
        const d = new Date(date)
        const month = months[d.getMonth()]
        const dayOfTheWeek = weekday[d.getDay()]
        const day = d.getDate()
        const hour = d.getHours()
        const minute = d.getMinutes()

        const time = () => {
            if(hour > 12) {
                return (hour - 12) + ":" + minute + " PM"
            } else {
                return hour + ":" + minute + " AM"
            }
        }
        return `${dayOfTheWeek}, ${month} ${day} at ${time()}`
    }

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })

    return (
        <div className="posting-card mb-20">
            <div className="posting-card-header mb-10">
                <h1 className="ml-10">{user.first_name} {user.last_name}</h1>
                <button onClick={() => {setConvo(data)}} className="">
                    <p>Mesage</p>
                </button>
            </div>
            <div className="breaker mb-10"></div>
            <div className="posting-card-content mb-10">
                <p className="mr-10">{distance} {renderMileWord()} on {renderDate()}</p>
            </div>

            <div className="posting-card-map mb-10">
                {isLoaded ? (
                    <GoogleMap 
                        center={cord} 
                        zoom={15} 
                        mapContainerStyle={{ width: '100%', height: '100%' }} 
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                    >
                        {cord && <MarkerF position={cord} />}
                    </GoogleMap>
                ) : (null)}
            </div>

            <div className="posting-card-address">
                <p>{location}</p>
            </div>
        </div>
    );
}

export default WalkCard;