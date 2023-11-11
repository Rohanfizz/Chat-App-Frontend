import React from "react";
import ChannelHead from "./ChannelHead";
import Messages from "./Messages";
import Typer from "./Typer";
import PlaceHolderChat from "./PlaceHolderChat";

const Chat = ({ participants, messages, selectedChatIdx }: any) => {
    console.log(selectedChatIdx);
    return (
        <>
            {selectedChatIdx == -1 && <PlaceHolderChat />}
            {selectedChatIdx != -1 && (
                <div className="flex flex-col h-full">
                    <div className="border h-10 md:h-20">
                        <ChannelHead participants={participants} />
                    </div>

                    <div className="border flex-1">
                        <Messages messages={messages} />
                    </div>
                    <div className="border h-10 md:h-20">
                        <Typer />
                    </div>
                </div>
            )}
        </>
    );
};

export default Chat;
