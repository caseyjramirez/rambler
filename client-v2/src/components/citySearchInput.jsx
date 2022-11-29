function CitySearchInput({label, value, onChange, data, onSelect, type='text'}) {

    function renderDropdown() {
        return (
            <div cityName='city-search-container'>
                <div className="city-search-dropdown pointer">
                    {
                        data.filter(item => {
                            const searchTerm = value.toLowerCase();
                            const cityName = item.name.toLowerCase();

            
                            return (
                            searchTerm &&
                            cityName.includes(searchTerm) &&
                            cityName !== searchTerm
                            );
                        })
                        .slice(0, 10)
                        .map((item) => (
                            <div
                            onClick={() => onSelect(item.name, item.id)}
                            className="city-search-dropdown-row"
                            key={item.name}
                            >
                            {item.name}
                            </div>
                        ))
                    }
                </div>

            </div>
        )
    }

    return (
            <div>
                <div className="flex ai-center">
                    <h3 className="large">{label}</h3>
                    <div cityName='testing-dsfg'>
                        <input type={type} value={value}  onChange={onChange} className="ml-3-rem black-text" />
                        {renderDropdown()}

                    </div>

                </div>

                

            
        </div>
    );
}

export default CitySearchInput;