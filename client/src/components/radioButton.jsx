function RadioButton({ data, onClick }) {
    return (
        <div className="radio-container mb-10">
            <input className="radio-button" onClick={e => onClick(e.target.value)} type="radio" id="html" name="fav_language" value={data.name} />
            <h3 className="fw-regular">{data.label}</h3>
        </div>
    );
}

export default RadioButton;