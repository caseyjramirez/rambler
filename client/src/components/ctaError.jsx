function CTAError({error, action}) {
    return (
        <div className='error cta-error mt-20' >
            <h3 className=" mb-10 fw-regular">{error}</h3>
            <button onClick={action} className="error-btn">Skip for now!</button>
        </div>
    );
}

export default CTAError;