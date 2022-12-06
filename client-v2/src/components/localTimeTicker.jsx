function LocalTimeTicker({ minute }) {

    function renderContainerClass() {
        if(minute < 15) {
            return "local-time-ticker flex ai-center min0"
        } else if(minute >= 15 && minute < 30) {
            return "local-time-ticker flex ai-center min15"
        } else if(minute >= 30 && minute < 45) {
            return "local-time-ticker flex ai-center min30"
        } else {
            return "local-time-ticker flex ai-center min45"
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