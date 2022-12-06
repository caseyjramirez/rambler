function EditActivity({ data, isEditing, cancelWalk, goBack }) {
    function renderClass() {
        return isEditing ? 'edit-activity-background flex center-center active' : 'edit-activity-background flex center-center';
    }
    
    return (
        <div className={renderClass()}>
            <div className="edit-activity-modal">
                <div className="mb-20">
                    <h1 className='mb-5'>Cancel</h1>
                    <h3>Would you like to cancel your {data && data.activity.name.toLowerCase()} with {data && data.user.first_name}?</h3>
                </div>
                <div className="breaker-hor-2 mb-20"></div>

                <div className="mb-20">
                    <button onClick={() => cancelWalk(data && data.id)} className='large red mr-20'>
                        <h3 className="large">Cancel Walk</h3>
                    </button>
   
                    <button onClick={goBack} className='large black'>
                        <h3 className="large">Go Back</h3>
                    </button>
                </div>

            </div>

        </div>
    );
}

export default EditActivity;