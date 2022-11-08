import env from "react-dotenv";

function Maps() {

    console.log(env.GOOGLE_MAPS_API);
    return (
        <div className="google-maps">
            <h1>maps</h1>
            <h1>maps</h1>
            <h1>maps</h1>
        </div>
    );
}

export default Maps;