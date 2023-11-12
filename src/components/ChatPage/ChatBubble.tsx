import { useUserId } from '@/hooks/useAuth'
import { Message } from '@/utils/globalClasses'
import { getBeautifylDate, getProfilePic } from '@/utils/globalFunctions'
import React from 'react'
import { BiCheck, BiCheckDouble } from 'react-icons/bi'
type Props = {
    message: Message
}

const ChatBubble = ({ message }: Props) => {
    const myUserId = useUserId();
    const date = new Date(message.timestamp);
    const isMine: boolean = myUserId == message.senderId;
    return (<>

        {isMine && <div className="chat chat-end">
            <div className="chat-image avatar">
                <div className="w-10 rounded-full">
                    <img src={getProfilePic(message.senderId)} />
                </div>
            </div>
            <div className="chat-header">
                {message.senderId + " "}
                <time className="text-xs opacity-50">{getBeautifylDate(date)}</time>
            </div>
            <div className="chat-bubble text-lg text-white">{message.content}</div>
            <div className="chat-footer opacity-100">
                {message.readStatus != "Seen" ? <BiCheck size={25} className="text-blue-500" /> : <BiCheckDouble size={25} className="text-blue-200" />}
            </div>
        </div>}
        {
            !isMine &&
            <div className="chat chat-start">
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img src={getProfilePic(message.senderId)} />
                    </div>
                </div>
                <div className="chat-header">
                    {message.senderId + " "}
                    <time className="text-xs opacity-50">{getBeautifylDate(date)}</time>
                </div>
                <div className="chat-bubble text-lg text-gray-800 bg-blue-300">{message.content}</div>
            </div>
        }
    </>
    )
}

export default ChatBubble