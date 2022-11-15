function Error({ error }) {
    return (
        <div className='error mt-20' >
            <h3 className="fw-regular">{error}</h3>
        </div>
    );
}

export default Error;