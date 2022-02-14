import React from 'react'

const MyMessage = ({message}) => {
    if(message.attachments&&message.attachments.length > 0){
        return(
            <img className="message-image" src={message.attachments[0].file} alt="" style={{float: 'right'}}/>
        )
    }
    return (
        <div className="message done" style={{float:'right' , marginRight: '18px' ,color: 'white' ,backgroundColor: '#3B2A50'}}>
            {message.text}
        </div>
    )
}

export default  MyMessage