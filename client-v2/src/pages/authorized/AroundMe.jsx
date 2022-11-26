import BusinessCard from "../../components/businessCard";
import Dropdown from "../../components/dropdown";

function AroundMe() {
    return (
        <div className="around-me">
        <div className="around-me-feed">
            <div className="around-me-feed-header flex jc-space-between ai-end">
                <div>
                    <button>
                        <h3 className="large">Today</h3>
                    </button>
                </div>
                <div>
                    <p className="small mb-5">Activity</p>
                    <Dropdown />
                </div>

                <div>
                    <p className="small mb-5">Industry</p>
                    <Dropdown />
                </div>
            </div>

            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />
            <BusinessCard />


        </div>

        <div className="around-me-map">

        </div>
    </div>
    );
}

export default AroundMe;