import React from 'react'
import ChatIcon from '../../assets/images/chat-icon.png'
import { Form } from 'react-bootstrap'

const Chat = () => {
    return (
        <div className='chat-widget'>
            {/* <div className='chat-box'>
                <Form.Group className="mb-3 msg-input" controlId="formBasicEmail">
                    <Form.Control className='text-field' type="text" placeholder="Message..." />
                </Form.Group>
            </div> */}
            <div className='chat-icon'><span className='drop-line'>Drop me a line</span><img src={ChatIcon} /></div>
        </div>
    )
}

export default Chat