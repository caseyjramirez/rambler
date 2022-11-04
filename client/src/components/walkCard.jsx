function WalkCard() {
    return (
        <div className="walk-card mb-20">
            
            {/* info column */}
            <div className="walk-card-info">
                <div className="walk-card-info-header">
                    <h1 className="ml-10">Casey Ramirez</h1>
                    <div className="walk-card-info-header-details">
                        <p className="mr-10">Dallas, Tx</p>
                        <p className="mr-10">1.4 miles</p>
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