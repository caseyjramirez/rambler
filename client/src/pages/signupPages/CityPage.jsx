import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import RadioButton from "../../components/radioButton";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import Error from '../../components/error';

function CitySignupPage({ setCity, cities, userCity }) {
    const navigate = useNavigate();


    const [cord, setCord] = useState({lat: 30.267153, lng: -97.7430608})
    const [error, setError] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()
    
        if(!userCity) return setError('Select a city to continue!')
        
        setError('')
        navigate('name');
    }

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })

    async function changeCity(name, label, id) {
        const results = await getGeocode({ address: name });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
        setCity(label, id)
    }

    return (
        <div className='signup'>
            <div className="signup-left">
                <h1 className='mb-30 fc-green'>Where are you located?</h1>
                <form onSubmit={handleSubmit}>
                    <div className="align-left mb-40">
                    {
                        cities && cities.map(city => <RadioButton data={city} onClick={() => changeCity(city.name, city.label, city.id)}/>)
                    }
                    </div>


                    <div className="btn-container">
                        <div></div>
                        <button type="submit" className='blue xl'>
                            <p className=''>Next</p>
                        </button>
                    </div>

                </form>
                {error && <Error error={error} />}
            </div>
            <div className="signup-right">
                {isLoaded ? (
                    <GoogleMap 
                        center={cord} 
                        zoom={12} 
                        mapContainerStyle={{ width: '100%', height: '100%' }} 
                        options={{
                            streetViewControl: false
                        }}
                    >
                        {cord && <MarkerF position={cord} />}
                    </GoogleMap>
                ) : (null)}
            </div>
        </div>
    );
}

export default CitySignupPage;