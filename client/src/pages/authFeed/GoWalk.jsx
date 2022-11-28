/* eslint-disable no-undef */
import React, { useState } from 'react';
import DistanceSlider from '../../components/distanceSlider';
import PostingDateTimePicker from '../../components/dateTimePicker';
import { createPosting } from '../../services/services';
import { useNavigate } from "react-router-dom";
import { useLoadScript, GoogleMap, MarkerF } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";


function GoWalk({ user }) {
  const navigate = useNavigate();
  const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

  const [distance, setDistance] = useState(1);
  const [cord, setCord] = useState({ lat: 30.282569, lng: -97.735369 })
  const [date, setDate] = useState(new Date());

  const {isLoaded} = useLoadScript({
    // googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API,
    libraries: ['places']
  })

  const changeValue = (e, value) => {
    setDistance(value);
  };

  function renderMileWord() {
    if(distance === 1) return 'Mile'
    else return 'Miles'
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const data = await createPosting({distance, date: date.toISOString(), location: value, user_id: user.id, isFilled: false})

    if(data.status === 201) {
      navigate('/');
    }
  }
  
  
  const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      setCord({ lat, lng });
  };

  return (
      <div className='card go-walk-span'>
          <h1 className='card-title'>Go Walk!</h1>
          <div className='card-body-center-span' >
            <div className="go-walk">
              
              <div className="go-walk-form">
                <form onSubmit={handleSubmit}>
                  <div className="mb-20">
                    <h3 className=' ml-5 mb-20 fw-regular' >Distance: {distance} {renderMileWord()}</h3>
                    <DistanceSlider distance={distance} onChange={changeValue} />
                  </div>
                  <div className="mb-40 location">
                      <h3 className="mb-5 ml-10 fw-regular">Location</h3>
                      
                      <div className="places-container">
                        
                        <Combobox onSelect={handleSelect}>
                          <ComboboxInput
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            disabled={!ready}
                            placeholder="Search an address"
                            className="combobox-input"
                          />
                          <ComboboxPopover>
                            <ComboboxList className="location-results-list" >
                                {status === "OK" &&
                                data.map(({ place_id, description }) => (
                                    <ComboboxOption className="location-result" key={place_id} value={description} />
                                    ))}
                            </ComboboxList>
                          </ComboboxPopover>
                        </Combobox>
                      </div>
                  </div>

                  <div className="mb-30">
                    <PostingDateTimePicker
                        date={date}
                        onChange={e => setDate(e)}
                    />
                  </div>

                  <button type="submit" className='blue full-span-go-walk'>
                    <p className='mr-10'>Go Walk!</p>
                    <p className=''>🥾</p>
                  </button>
                </form>
              </div>
              <div className="go-walk-map">
              <div className="google-maps">
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
              </div>
              </div>
            </div>
          </div>
      </div>
  );
}

export default GoWalk;