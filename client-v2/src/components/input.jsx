function Input({label, value, onChange, type='text'}) {
    return (
        <div className="interactive flex ai-center mb-20">
            <div className="label-container">
                <h3 className="large">{label}</h3>
            </div>
            <input type={type} value={value} onChange={e => onChange(e.target.value)} className="ml-3-rem" />
        </div>
    );
}

export default Input;