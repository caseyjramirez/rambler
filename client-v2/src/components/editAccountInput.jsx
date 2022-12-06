function EditAccountInput({ value, name, label, onChange }) {
    return (  
        <div className="flex ai-center mb-20 edit-account-input">
            <div className="edit-account-label-container">
                <h3 className="large">{label}</h3>
            </div>
            <input value={value} name={name} onChange={onChange} className="" />
        </div>
    );
}

export default EditAccountInput;