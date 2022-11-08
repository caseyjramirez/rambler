import WalkCard from "../../components/walkCard";


// ACTIVITY PAGE FEED
function Activity({ user }) {
    console.log(user);

    const { walks } = user
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