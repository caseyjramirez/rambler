import React, { useState } from 'react';

import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";


function LocationSelector({ setCord }) {
    // const [selected, setSelected] = useState(null);
    
    
    
    const PlacesAutocomplete = () => {
        
        const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();
        const handleSelect = async (address) => {
            console.log(address);
            setValue(address, false);
            clearSuggestions();

            // setLocation(address);
            // setValue(address);
            
            // clearSuggestions();
            
            const results = await getGeocode({ address });
            const { lat, lng } = await getLatLng(results[0]);
            // setCord({ lat, lng });
        };
        
        return (
            <Combobox onSelect={handleSelect}>
                
                <ComboboxInput
                value={value}
                onChange={(e) => setValue(e.target.value)}
                disabled={!ready}
                className="combobox-input"
                placeholder="Search an address"
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
    ); 
};


return (
    <div className="mb-40 location">
        <h3 className="mb-5 ml-10 fw-regular">Location</h3>
        
        <div className="places-container">
            <PlacesAutocomplete  />
        </div>
    </div>
);



}
export default LocationSelector;