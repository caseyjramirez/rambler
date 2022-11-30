import { activities } from "../data/activitySelector";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPersonWalking, faPersonHiking, faPersonBiking, faPersonRunning} from "@fortawesome/free-solid-svg-icons";

function ActivitySelector({ activity, setActivity}) {
    
    function renderContainerClass(activityOnButton) {
        return activityOnButton === activity ? ("day-container selected"):("day-container");
    }

    function renderButtonClass(buttonDay) {
        return buttonDay === activity ? ("grey day selected flex center-center mb-1-rem"):("grey day flex center-center mb-1-rem");
    }

    function renderIcon(icon) {
        if(icon === 'faPersonWalking') {
            return faPersonWalking
        } else if(icon === 'faPersonHiking') {
            return faPersonHiking
        } else if(icon === 'faPersonRunning') {
            return faPersonRunning
        } else {
            return faPersonBiking
        }
    }

    return (
        <div className="interactive flex ai-center mb-30">
            <div className="label-container">
                <h3 className="large">Activity</h3>
            </div>

            <div className="span100 ml-3-rem flex jc-center">
                <div className="activity-selector-wrapper flex ai-center jc-space-between">
                    {
                        activities.map(activity =>
                            <div key={activity.activity} className={renderContainerClass(activity.label)}>
                                
                                <button onClick={() => setActivity(activity.label)} className={renderButtonClass(activity.label)}>
                                    <FontAwesomeIcon icon={renderIcon(activity.icon)} />
                                </button>

                                <p className="xsmall">{activity.label}</p>
                            </div>
                        )
                    }

                </div>
            </div>

        </div>
    );
}

export default ActivitySelector;