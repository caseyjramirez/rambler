import WalkCard from "../../components/walkCard";

function Activity({ user }) {
    console.log(user);
    return (
        <div className="card">
            <h1 className="card-title">Activity</h1>
            <div className="card-feed">
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />
                <WalkCard />

            </div>
            

        </div>
    );
}

export default Activity;