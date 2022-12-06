import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { productPage, loginPage } from "../../data/welcomeNav";
import Error from '../../components/error';
import { getCities } from '../../services/services';
import CitySearchInput from '../../components/citySearchInput';
import { useLoadScript, GoogleMap } from '@react-google-maps/api'
import { getGeocode, getLatLng } from "use-places-autocomplete";

function CitySignupPage({ setCity, query, setQuery, selectedCity }) {
    const navigate = useNavigate();

    const [error, setError] = useState('')
    const [cities, setCities] = useState([])
    const [cord, setCord] = useState({ lat: 30.282569, lng: -97.735369 })

    useEffect(() => {
        getCities().then(r => setCities(r.data));
    }, []);
    
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
        libraries: ['places']
    })

    const handleSubmit = async e => {
        e.preventDefault();
        setError('')

        if(!selectedCity) {
            return setError('Select a city to continue!')
        }

        navigate('name');
    }
    
    async function onSelectCity(cityName, cityId) {
        
        const results = await getGeocode({ address: cityName });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
        setCity(cityName, cityId, lat, lng)

    }


    return (
        <div className="welcome-modal">
            <div className="welcome-back">
                <button onClick={() => navigate(productPage)} className='black'>
                        <h3 className="">Back</h3>
                </button>
            </div>


            <form onSubmit={handleSubmit} className="flex flex-column jc-center span100h span100">
                <div className="mb-20">
                    <h1 className='mb-5'>Select a City.</h1>
                    <h3 >Rambler is a city based application. Choose your city to begin.</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <CitySearchInput 
                        label={'City'}
                        extraStyling='black'
                        onChange={e => setQuery(e.target.value)}
                        value={query}
                        data={cities}
                        onSelect={onSelectCity}
                    />
                </div>

                <div className="welcome-modal-map mb-20">
                    {isLoaded ? (
                    <GoogleMap 
                        center={cord} 
                        zoom={12} 
                        mapContainerStyle={{ width: '100%', height: '100%' }} 
                        options={{
                            zoomControl: false,
                            streetViewControl: false,
                            mapTypeControl: false,
                            fullscreenControl: false,
                        }}
                    >
                    </GoogleMap>
                    ) : (null)}
                </div>


                <div className="span100 flex ai-center jc-center">
                    <button type='submit' className='large black span100'>
                        <h3 className="large">Next</h3>
                    </button>

                </div>

                
                {error && <Error error={error}/>}
            </form>

            <div className='welcome-redirect flex jc-center'>
                <h3>Already have an account? <span onClick={() => navigate(loginPage)} className='pointer'>Login!</span></h3>
            </div>

        </div>
    );
}

export default CitySignupPage;