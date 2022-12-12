import { useNavigate } from "react-router-dom";

function About() {
    const nav = useNavigate()
    const playlistLink = 'https://open.spotify.com/playlist/4cckvX1sdrW9Kb82gZi4Yj?si=be50f92001ed4d1e'

    return (
        <div className="about flex center-center">
            <div className="about-modal">
                <div className="mb-20">
                    <button onClick={() => nav('/welcome/home')} type='submit' className='black large'>
                        <h3 className="large">Back</h3>
                    </button>

                </div>
                <h1 className="mb-10">Hi, nice to meet you! 👋</h1>
                <p className="mb-20">
                    Thank you for checking out Rambler. I created Rambler for my campstone project during my time at Flat Iron School.
                    The Rambler you are seeing today has come a long way.
                    Initially, Rambler was created to help software engineers find other engineers to go on walks with.
                    Today, Rambler has a much broader vision-to spread ideas through various forms of physical activity.
                </p>

                <div>
                    <a href={playlistLink} rel="noreferrer" target={"_blank"}>Listen to the music that inspired Rambler.</a>
                </div>
            </div>
        </div>
    );
}

export default About;