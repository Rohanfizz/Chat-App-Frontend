import React from "react";
import ChannelOverview from "./ChannelOverview";
import { userAtom } from "@/recoil/auth";
import { useRecoilValue } from "recoil";
type Props = {};

const Channels = ({ data, setselectedChatIdx, selectedChatIdx }: any) => {
    const { userId: myUserId } = useRecoilValue(userAtom);
    return (
        <>
            <ul className="">
                {data.map((singleChat: any, idx: number) => {
                    let otherIdx = 0;
                    if (singleChat.participants[0].userId == myUserId) otherIdx++;
                        return (
                            <div
                                key={idx}
                                onClick={() => setselectedChatIdx(idx)}
                            >
                                <ChannelOverview
                                    data={singleChat.participants[otherIdx]}
                                />
                            </div>
                        );
                })}
            </ul>
        </>
    );
};
export default Channels;
