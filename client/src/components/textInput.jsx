function TextInput({label, onChange, name, value, type = 'text'}) {
    return (
        <div className="mb-20">
            <h3 className="mb-5 ml-10 fw-regular">{label}</h3>
            <input type={type} name={name} value={value} onChange={onChange} />
        </div>
    );
}

export default TextInput;