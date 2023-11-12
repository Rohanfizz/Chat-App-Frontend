import React from "react";
import ChannelOverview from "./ChannelOverview";
import { Chat } from "@/utils/globalClasses";
import { useUserId } from "@/hooks/useAuth";
type Props = {
    data:Chat[],
    setselectedChatIdx:any,
    selectedChatIdx:number
};

const Channels = ({ data, setselectedChatIdx, selectedChatIdx }: Props) => {
    const myUserId = useUserId();
    return (
        <>
            <ul className="">
                {data.map((singleChat: Chat, idx: number) => {
                    let otherIdx = 0;
                    if (singleChat.participants[0].userId == myUserId) otherIdx++;
                        return (
                            <div
                                key={idx}
                                onClick={() => setselectedChatIdx(idx)}
                            >
                                <ChannelOverview
                                    participant={singleChat.participants[otherIdx]}
                                />
                            </div>
                        );
                })}
            </ul>
        </>
    );
};
export default Channels;
