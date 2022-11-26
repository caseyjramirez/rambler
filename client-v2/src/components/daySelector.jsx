import { days } from "../data/daySelector";


function DaySelector({day, setDay}) {

    function renderContainerClass(buttonDay) {
        return buttonDay === day ? ("day-container selected"):("day-container");
    }

    function renderButtonClass(buttonDay) {
        return buttonDay === day ? ("grey day selected flex center-center mb-1-rem"):("grey day flex center-center mb-1-rem");
    }

    return (
        <div className="interactive flex ai-center mb-20">
            <div className="label-container">
                <h3 className="large">Day</h3>
            </div>

            <div className="flex ai-center jc-space-between span100 ml-3-rem">
                {
                    days.map(day =>
                        <div key={day.day} className={renderContainerClass(day.day)}>
                            
                            <button onClick={() => setDay(day.day)} className={renderButtonClass(day.day)}>
                                <h3 className="small">{day.label}</h3>
                            </button>

                            <p className="xsmall">{day.day}</p>
                        </div>
                    )
                }
            </div>

        </div>
    );
}

export default DaySelector;