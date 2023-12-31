import { Participant } from "@/utils/globalClasses";
import { getProfilePic } from "@/utils/globalFunctions";
import React from "react";

type Props = { participant: Participant};

const ChannelOverview = ({ participant }: Props) => {
    return (
        <li className=" border-b-2">
            <a
                href="#"
                className="flex items-center p-2 font-normal text-gray-200 text-3xl dark:text-white hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-700 group"
            >
                <img
                    className="bg-gray-800 rounded-full"
                    src={getProfilePic(participant.userId)}
                    height={"70px"}
                    width={"70px"}
                />
                <span className="flex-1 ml-3 whitespace-nowrap">
                    {participant.displayName}
                </span>
                <span className="inline-flex justify-center items-center w-10 h-10 text-lg font-semibold rounded-full text-primary-800 bg-primary-300 dark:bg-primary-200 dark:text-primary-800">
                    {participant.unread}
                </span>
            </a>
        </li>
    );
};

export default ChannelOverview;
