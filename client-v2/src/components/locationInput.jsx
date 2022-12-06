import { Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption, } from "@reach/combobox";
import usePlacesAutocomplete, { getGeocode, getLatLng } from "use-places-autocomplete";

function LocationInput({setCord, setLocation}) {
    const { ready, value, setValue, suggestions: { status, data }, clearSuggestions } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();
        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);
        setCord({ lat, lng });
        setLocation(address);
    };

    return (
        <div className="interactive location flex ai-center mb-20">
            <div className="label-container">
                <h3 className="large">Location</h3>
            </div>

            <Combobox onSelect={handleSelect}>
                {
                    ready && <ComboboxInput
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        className="combobox-input location-input"
                        placeholder="Search an address"
                    />
                }
                <ComboboxInput
                    value={value}
                    onChange={e => setValue(e.target.value)}
                    disabled={!ready}
                    className="combobox-input location-input"
                    placeholder="Search an address"
                />

                <ComboboxPopover>
                    <ComboboxList className="location-result-container" >
                            {status === "OK" &&
                            data.map(({ place_id, description }) => (
                                <ComboboxOption className="location-result" key={place_id} value={description} />
                                ))}
                    </ComboboxList>
                </ComboboxPopover>
            </Combobox>
        </div>
    );
}

export default LocationInput;