function DropDown({ label, data, onChange, placeholder }) {
    return (
        <div className="mb-20">
            <h3 className="mb-5 ml-10 fw-regular">{label}</h3>
            <select onChange={e => onChange(parseInt(e.target.value))} name="cars" id="cars">
                <option value="" disabled selected>{placeholder}</option>
                {
                    data.map(industry => <option value={industry.id}>{industry.name}</option>)
                }
            </select>
        </div>
    );
}

export default DropDown;