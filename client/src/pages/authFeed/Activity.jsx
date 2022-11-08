import WalkCard from "../../components/walkCard";


// ACTIVITY PAGE FEED
function Activity({ user }) {
    const { walks } = user
    console.log(walks);

    return (
        <div className="card">
            <h1 className="card-title">Activity</h1>
            <div className="card-feed">
                {
                    walks.map(walk => <WalkCard data={walk} />)
                }
            </div>
        </div>
    );
}

export default Activity;