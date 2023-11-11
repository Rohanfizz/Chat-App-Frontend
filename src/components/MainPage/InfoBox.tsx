import React from "react";

type Props = {};

const InfoBox = (props: Props) => {
    return (
        <div className="bg-gray-900 dark:bg-gray-900 md:h-screen flex-row items-center justify-center p-10">
            <div className="text-5xl h-1/5 font-bold bg-gradient-to-r from-yellow-200 to-purple-900 text-transparent bg-clip-text">
                FizzChat
            </div>
            <div className="text-2xl md:text-5xl lg:text-5xl flex  items-center text-left h-4/5 font-bold bg-gradient-to-r from-red-100 to-purple-600 text-transparent bg-clip-text font-nunito">
                Your one-stop solution for all your chat communication needs,
                ensuring secure and seamless conversations with friends and
                colleagues.
            </div>
        </div>
    );
};

export default InfoBox;
