import React from "react";
import ChannelHead from "./ChannelHead";
import Messages from "./Messages";
import Typer from "./Typer";

type Props = {};

const Chat = (props: Props) => {
    return (
        <>
            <div className="flex flex-col h-full">
                <div className="border h-10 md:h-20">
                    <ChannelHead />
                </div>

                <div className="border flex-1">
                    <Messages />
                </div>
                <div className="border h-10 md:h-20">
                    <Typer />
                </div>
            </div>
        </>
    );
};

export default Chat;
