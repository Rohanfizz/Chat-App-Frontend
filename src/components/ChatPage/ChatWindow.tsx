import React, { useEffect, useRef, useState } from "react";
import ChannelHead from "./ChannelHead";
import Messages from "./Messages";
import Typer from "./Typer";
import { Chat, Participant } from "@/utils/globalClasses";
import { useUserId } from "@/hooks/useAuth";

const ChatWindow = ({ chat }: { chat: Chat }) => {
    const myUserId = useUserId();
    const chatContainer = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        if(chatContainer.current){
            chatContainer.current.scrollTop = chatContainer.current.scrollHeight;
        }
    },[chat.messages]);

    return (
        <>
            <div className="flex flex-col h-full max-h-screen justify-center">
                <div className="rounder-md h-10 md:h-20 ">
                    <ChannelHead
                        others={chat.participants.filter(
                            (chat: Participant) => chat.userId != myUserId
                        )}
                    />
                
                </div>

                <div className=" border-blue-300 rounded-md flex-1 overflow-y-auto pr-2" ref={chatContainer}>
                    <Messages messages={chat.messages} />
                </div>
                <div className="rounded-md h-20 md:h-20 min-h-30 md:min-h-30">
                    <Typer />
                </div>
            </div>
        </>
    );
};

export default ChatWindow;
