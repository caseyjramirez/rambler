function LocalTimeTicker({ minute }) {


    function renderContainerClass() {

        if(minute < 5) {
            return "local-time-ticker flex ai-center min0"
        } 
        else if(minute >= 5 && minute < 10) {
            return "local-time-ticker flex ai-center min5"
        } 
        else if(minute >= 10 && minute < 15) {
            return "local-time-ticker flex ai-center min10"
        } 
        else if(minute >= 15 && minute < 20) {
            return "local-time-ticker flex ai-center min15"
        } 
        else if(minute >= 20 && minute < 25) {
            return "local-time-ticker flex ai-center min20"
        } 
        else if(minute >= 25 && minute < 30) {
            return "local-time-ticker flex ai-center min25"
        } 
        else if(minute >= 30 && minute < 35) {
            return "local-time-ticker flex ai-center min30"
        } 
        else if(minute >= 35 && minute < 40) {
            return "local-time-ticker flex ai-center min35"
        } 
        else if(minute >= 40 && minute < 45) {
            return "local-time-ticker flex ai-center min40"
        } 
        else if(minute >= 45 && minute < 50) {
            return "local-time-ticker flex ai-center min45"
        } 
        else if(minute >= 50 && minute < 55) {
            return "local-time-ticker flex ai-center min50"
        } 
        else {
            return "local-time-ticker flex ai-center min55"
        }
    }


    return (
        <div className={renderContainerClass()}>
            <div className="local-time-ticker-header"></div>
            <div className="local-time-ticker-body"></div>
        </div>
    );
}

export default LocalTimeTicker;