function FullSpanDropDown({ label, data, onChange }) {

    return (
        <div className="mb-20 flex ai-center welcome-dropdown">
            <div className="label-container">
                <h3 className="large">{label}</h3>
            </div>
            <select onChange={e => onChange(e.target.value)} className="ml-5-rem">
            <option selected disabled hidden>Choose your Industry</option>
                {
                    data.map(data => <option key={data.id} value={data.id} >{data.name}</option>)
                }
            </select>

        </div>
    );
}

export default FullSpanDropDown;