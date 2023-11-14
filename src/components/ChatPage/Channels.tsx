import React from "react";
import ChannelOverview from "./ChannelOverview";
import { Chat } from "@/utils/globalClasses";
import { useUserId } from "@/hooks/useAuth";
type Props = {
    data: Chat[];
    setselectedChatIdx: any;
    selectedChatIdx: number;
    setisSideBarHidden: any;
};

const Channels = ({
    data,
    setselectedChatIdx,
    selectedChatIdx,
    setisSideBarHidden,
}: Props) => {
    const myUserId = useUserId();

    function channelOnClickHandler(idx: number) {
        setselectedChatIdx(idx);
        setisSideBarHidden(true);
    }

    return (
        <>
            <ul className="">
                {data.map((singleChat: Chat, idx: number) => {
                    let otherIdx = 0;
                    if (singleChat.participants[0].userId == myUserId)
                        otherIdx++;
                    return (
                        <div
                            key={idx}
                            onClick={() => channelOnClickHandler(idx)}
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
