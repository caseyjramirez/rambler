function Message({userId, message, sender, reciever}) {
    console.log(message, userId, sender, reciever);


    function renderTagText(name) {
        return `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`
    }
    
    return (message.sender_id === userId ? 
        (
            <div className="message-container my-20">
                <div className="message sent flex ai-center">
                    <div>
                        <span className="message-tag mr-10 flex center-center">{renderTagText(sender)}</span> 
                    </div>
                    <p>{message.message}</p>
                </div>
            </div>
        ) : (
            <div className="message-container my-20">
                <div className="message recieved flex ai-center">
                    <p className="mr-10">{message.message}</p>
                    <div>
                        <span className="message-tag mr-10 flex center-center">{renderTagText(reciever)}</span> 

                    </div>
                </div>
            </div>
        )
    );
}

export default Message;