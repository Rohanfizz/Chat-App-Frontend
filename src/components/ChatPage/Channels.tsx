import React from "react";
import ChannelOverview from "./ChannelOverview";

type Props = {};

const Channels = ({data}:any) => {
    return (
        <>
            <ul className="">
                {data.map((value:any,idx:number)=>{
                    return <ChannelOverview data={value} key={idx}/>
                })}
            </ul>
        </>
    );
};
export default Channels;
