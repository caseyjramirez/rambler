import Error from "./error";

function ConfirmPassword({password, setPassword, onConfirmChanges, error}) {
    return (
        <div className="edit-profile-container">
            <div className="edit-profile">
                <h1 className="mb-20">Password Confirmation</h1>
                <div className="flex ai-center ml-20 mb-20">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">Password</h4>
                        </div>
                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} />
                </div>

                <button onClick={onConfirmChanges} className='blue-light outline mb-5 ml-20'>
                    <p>Confirm Changes</p>
                </button>
                {error && <Error error={error} />}

            </div>
        </div>
    );
}

export default ConfirmPassword;