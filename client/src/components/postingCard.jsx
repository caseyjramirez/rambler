function PostingCard({ data, goOnWalk }) {
    const { user, distance, location } = data;

    function renderMileWord() {
        if(distance === 1) return 'Mile'
        else return 'Miles'
    }

    return (
        <div className="walk-card mb-20">
            
        {/* info column */}
        <div className="walk-card-info">
            <div className="walk-card-info-header">
                <h1 className="ml-10">{user.first_name} {user.last_name}</h1>
                <div className="walk-card-info-header-details">
                    <p className="mr-10">{location}, Tx</p>
                    <p className="mr-10">{distance} {renderMileWord()}</p>
                    <p className="mr-10">10/22/22</p>
                </div>

            </div>
            
            <div className="my-10 breaker"></div>
            {/* <p className="ml-10">Testing</p> */}
            <button onClick={() => goOnWalk(data)} className="walk-with-me-button">
                <p className='mr-10'>Walk with Me!</p>
                <p className=''>🌲</p>
            </button>
        </div>


        {/* map column */}
        <div className="map">
            
        </div>
    </div>
    );
}

export default PostingCard;