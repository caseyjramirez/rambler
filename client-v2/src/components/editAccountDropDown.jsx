function EditAccountDropDown({label, currentIndustry, onChange, data}) {
    return (
        <div className="mb-20 flex ai-center edit-account-dropdown">
            <div className="label-container">
                <h3 className="large">{label}</h3>
            </div>
            <select onChange={e => onChange(parseInt(e.target.value))} className="ml-5-rem">
                <option selected disabled hidden >{currentIndustry}</option>
                {
                    data.map(data => <option key={data.id} value={data.id} >{data.name}</option>)
                }
            </select>

        </div>
    );
}

export default EditAccountDropDown;