import React, { useState } from "react";
import ChannelOverview from "./ChannelOverview";
import { Participant } from "@/utils/globalClasses";
import { stringify } from "querystring";
import { getProfilePic } from "@/utils/globalFunctions";

type Props = {};

const ChannelHead = ({ others }: { others: Participant[] }) => {
    
    return (
        <div className="flex items-center font-normal text-gray-200 text-3xl dark:text-white group">
            <img
                className="bg-gray-800 rounded-full h-10 md:h-20"
                src={
                    others.length > 1
                        ? getProfilePic(others.length+"")
                        : getProfilePic(others[0].userId)
                }
                // height={"50%"}
                // width={"10%"}
            />
            <span className="flex-1 ml-3 whitespace-nowrap">
                {others.length == 1 && others[0].displayName}
                {others.length > 1 && "Group"}
            </span>
        </div>
    );
};

export default ChannelHead;