import { days, currDay, getDate } from "../data/daySelector";


function DaySelector({day, setDay}) {

    function renderContainerClass(buttonDay) {
        return buttonDay === day ? ("day-container selected"):("day-container");
    }

    function renderButtonClass(buttonDay) {
        return buttonDay === day ? ("grey day selected flex center-center mb-1-rem"):("grey day flex center-center mb-1-rem");
    }

    
    function mapDays() {
        let currIndex = currDay + 1;
        let reutrnValue = [];
        
        while(currIndex !== currDay) {
            if(currIndex > 6) currIndex = 0;
            
            
            reutrnValue.push(
            <div key={days[currIndex].day} className={renderContainerClass(days[currIndex].label)}>
                <button onClick={e => setDay(e.target.textContent)} key={days[currIndex].date} className={renderButtonClass(days[currIndex].label)}>
                    <h3 className="small">{days[currIndex].label}</h3>
                </button>
                <p className="xsmall">{days[currIndex].day}</p>
            </div>)
            
            currIndex++;
            
        }

        return reutrnValue
        
    }
    

    return (
        <div className="interactive flex ai-center mb-20">
            <div className="label-container">
                <h3 className="large">Day</h3>
            </div>

            <div className="flex ai-center jc-space-between span100 ml-3-rem">
                {/* MAP TODAY */}
                <div className={renderContainerClass(days[currDay].label)}>
                            
                    <button onClick={e => setDay(e.target.textContent)}  className={renderButtonClass(days[currDay].label)}>
                        <h3 className="small">{days[currDay].label}</h3>
                    </button>

                    <p className="xsmall">Today</p>
                </div>

                {/* MAP REST OF WEEK */}
                {mapDays()}

            </div>

        </div>
    );
}

export default DaySelector;