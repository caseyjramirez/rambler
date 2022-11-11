function RadioButton({ data, onClick }) {
    return (
        <div className="radio-container mb-10">
            <input onClick={e => onClick(e.target.value)} type="radio" id="html" name="fav_language" value={data.name} />
            <h2 className="fw-regular">{data.label}</h2>
        </div>
    );
}

export default RadioButton;