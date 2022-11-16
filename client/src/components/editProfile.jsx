function EditProfile({ user, onSaveChanges, handleChange, onDiscardChanges, cities, industries, setCity, setIndustry }) {
    
    return (
        <div className="edit-profile-container">
            <div className="edit-profile">
                <div>
                    <h1 className="mb-20">Name</h1>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">First Name</h4>
                        </div>
                        <input onChange={handleChange} value={user.first_name} name="first_name" type="text"/>
                    </div>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">Last Name</h4>
                        </div>
                        <input onChange={handleChange} value={user.last_name} name="last_name" type="text"/>
                    </div>

                    <div className="breaker my-20"></div>
                </div>

                <>
                    <h1 className="mb-20">Description</h1>

                    <div className="flex ai-center ml-20 mb-10">
                        <textarea onChange={handleChange} value={user.description} name="description" type="text"/>
                    </div>

                    <div className="breaker my-20"></div>
                </>

                <>
                    <h1 className="mb-20">Job</h1>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">Job Title</h4>
                        </div>
                        <input onChange={handleChange} value={user.job_title} name="job_title" type="text"/>
                    </div>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">Company</h4>
                        </div>
                        <input onChange={handleChange} value={user.company} name="company" type="text"/>
                    </div>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">Industry</h4>

                        </div>
                        <select onChange={e => setIndustry(parseInt(e.target.value))} name="cars" id="cars">
                            <option value="" selected>{user.industry.name}</option>
                            {
                                industries && industries.map(industry => <option value={industry.id}>{industry.name}</option>)
                            }
                        </select>
                    </div>

                    <div className="breaker my-20"></div>
                </>

                <>
                    <h1 className="mb-20">City</h1>

                    <div className="flex ai-center ml-20 mb-10">
                        <div className="label-container mb-3">
                            <h4 className="fw-regular">City</h4>
                        </div>
                        <select onChange={e => setCity(parseInt(e.target.value))} name="cars" id="cars">
                            <option value="" selected>{user.city.label}</option>
                            {
                                cities && cities.map(city => <option value={city.id}>{city.label}</option>)
                            }
                        </select>
                    </div>
                    
                    <div className="breaker my-20"></div>
                </>
                <div className="flex">
                    <button onClick={onDiscardChanges} className='blue-light outline mb-5 mr-20'>
                            <p>Discard Changes</p>
                    </button>

                    <button onClick={onSaveChanges} className='blue-light outline mb-5'>
                            <p>Saves Changes</p>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default EditProfile;