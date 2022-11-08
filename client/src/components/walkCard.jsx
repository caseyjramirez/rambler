function WalkCard({ data }) {
    console.log(data);
    const { user, distance, location } = data;

    return (
        <div className="walk-card mb-20">
            
            {/* info column */}
            <div className="walk-card-info">
                <div className="walk-card-info-header">
                    <h1 className="ml-10">{user.first_name} {user.last_name}</h1>
                    <div className="walk-card-info-header-details">
                        <p className="mr-10">{location}, Tx</p>
                        <p className="mr-10">{distance} miles</p>
                        <p className="mr-10">10/22/22</p>
                    </div>

                </div>
                
                <div className="my-10 breaker"></div>
                {/* <p className="ml-10">Testing</p> */}
            </div>


            {/* map column */}
            <div className="map">
                
            </div>
        </div>
    );
}

export default WalkCard;