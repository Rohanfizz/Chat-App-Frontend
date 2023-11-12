import { Message } from "@/utils/globalClasses";
import React from "react";
import ChatBubble from "./ChatBubble";

type Props = { messages: Message[] };

const Messages = ({ messages }: Props) => {
    return <>
        {messages.map((message, key) => {
            return <div key={key}><ChatBubble message={message} /></div>
        })}
    </>
};

export default Messages;
