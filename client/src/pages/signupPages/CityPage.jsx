import React, { useState, useEffect } from 'react';
import env from "react-dotenv";
import { useNavigate } from "react-router-dom";
import RadioButton from "../../components/radioButton";
import { getCities } from '../../services/services';
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'

function CitySignupPage({ setCity }) {
    const navigate = useNavigate();
    
    useEffect(() => {
        getCities().then(r => setCities(r.data))
    }, []);

    const [cities, setCities] = useState();
    const [cord, setCord] = useState({lat: 30.267153, lng: -97.7430608})
    const [isDisabled, setIsDisabled] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault()
    
        if(!isDisabled) {
          navigate('name');
        }
    }

    const {isLoaded} = useLoadScript({
        googleMapsApiKey: env.GOOGLE_MAPS_API,
        libraries: ['places']
    })

    async function changeCity(city) {
        setIsDisabled(false);
        const results = await getGeocode({ address: city });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
        setCity(city)
    }




    return (
        <div className='signup'>
            <div className="signup-left">
                <h1 className='mb-30 fc-green'>Where are you from?</h1>
                <form onSubmit={handleSubmit}>
                    <div className="align-left mb-40">
                    {
                        cities && cities.map(city => <RadioButton data={city} onClick={changeCity}/>)
                    }
                    </div>
                    
                    <button disabled={isDisabled} type="submit" className='blue full-span-go-walk'>
                        <p className='mr-10'>Go Walk!</p>
                        <p className=''>🥾</p>
                    </button>

                </form>
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