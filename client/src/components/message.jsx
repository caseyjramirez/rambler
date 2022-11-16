function Message({message, sender, reciever, userId}) {
    // console.log(message);
    // console.log(sender.split(' ')[0][0], sender.split(' ')[1][0]);
    
    function renderSenderIconInitials() {
        if(message.sender_id === userId) {
            return `${sender.split(' ')[0][0]}${sender.split(' ')[1][0]}`
        } else {
            return `${reciever.split(' ')[0][0]}${reciever.split(' ')[1][0]}`
        }
    }

    function renderMessageClasses() {
        if(message.sender_id === userId) {
            return 'message sent mb-15'
        } else {
            return 'message recieved mb-15'
        }
    }

    return (
        <div className="messages-message">
            <div className={renderMessageClasses()} >
                <div className="sender-icon-wrapper">
                    <div className='sender-icon mr-5'>
                        <p>{renderSenderIconInitials()}</p>
                    </div>
                </div>
                <p>{message.message}</p>
            </div>
        </div>
    );
}

export default Message;