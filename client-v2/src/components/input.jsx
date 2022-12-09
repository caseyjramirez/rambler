function Input({label, value, onChange, name, extraStyling, min, max, type='text'}) {
    function renderInteractiveContainerClass() {
        return extraStyling ? `interactive flex ai-center mb-20 ${extraStyling}` : 'interactive flex ai-center mb-20'
    }

    return (
        <div className={renderInteractiveContainerClass()} >
            <div className="label-container">
                <h3 className="large">{label}</h3>
            </div>
            <input type={type} min={min ? min : null} max={max ? max : null} value={value} name={name} onChange={onChange} className="ml-3-rem" />
        </div>
    );
}

export default Input;