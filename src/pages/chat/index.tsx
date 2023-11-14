import Channels from "@/components/ChatPage/Channels";
import ChatWindow from "@/components/ChatPage/ChatWindow";
import PlaceHolderChat from "@/components/ChatPage/PlaceHolderChat";
import ProtectedRoute from "@/components/ui/ProtectedRoute";
import { Chat } from "@/utils/globalClasses";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";

let dummyData: Chat[] = [
    {
        chatId: "chat123", // Unique identifier for the chat
        chatName: "Alice and Bob", // Display name for the chat

        participants: [
            {
                userId: "alice123",
                displayName: "Alice",
                unread: 10,
            },
            {
                userId: "bob456",
                displayName: "Bob",
                unread: 2,
            },
        ],

        messages: [
            {
                messageId: "msg1",
                senderId: "alice123",
                timestamp: "2023-10-10T10:30:00",
                content: "Hi, Bob! How are you?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 2,
                    heart: 1,
                },
            },
            {
                messageId: "msg2",
                senderId: "bob456",
                timestamp: "2023-10-10T10:35:00",
                content: "Hey, Alice! I'm good. How about you?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 3,
                },
            },
            {
                messageId: "msg3",
                senderId: "alice123",
                timestamp: "2023-10-10T10:40:00",
                content: "I'm doing well too. What have you been up to?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                },
            },
            {
                messageId: "msg4",
                senderId: "bob456",
                timestamp: "2023-10-10T10:45:00",
                content: "Just working on some projects. How's your day going?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 2,
                },
            },
            {
                messageId: "msg5",
                senderId: "alice123",
                timestamp: "2023-10-10T10:50:00",
                content:
                    "Sounds interesting. My day's been productive. Thanks for asking!",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                    heart: 1,
                },
            },
            {
                messageId: "msg8",
                senderId: "alice123",
                timestamp: "2023-10-10T11:20:00",
                content: "I'm planning to catch up on some reading.",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 2,
                },
            },
            {
                messageId: "msg9",
                senderId: "bob456",
                timestamp: "2023-10-10T11:30:00",
                content: "That sounds relaxing. Any book in mind?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                },
            },
            {
                messageId: "msg10",
                senderId: "alice123",
                timestamp: "2023-10-10T11:40:00",
                content: "I'm thinking about a mystery novel.",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 2,
                    heart: 1,
                },
            },
            {
                messageId: "msg11",
                senderId: "bob456",
                timestamp: "2023-10-10T11:50:00",
                content: "A good detective story can be exciting!",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 3,
                },
            },
            {
                messageId: "msg12",
                senderId: "alice123",
                timestamp: "2023-10-10T12:00:00",
                content: "📚 Any good recommendations?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                },
            },
            {
                messageId: "msg13",
                senderId: "bob456",
                timestamp: "2023-10-10T12:10:00",
                content: "🕵️‍♂️ How about a classic detective novel?",
                readStatus: "Delivered",
                reactions: {
                    thumbsUp: 2,
                    heart: 1,
                },
            },
            // Add more messages as needed...
        ],
    },
    {
        chatId: "chat123",
        chatName: "Alice And Rohan",
        participants: [
            {
                userId: "alice123",
                displayName: "Alice",
                unread: 0,
            },
            {
                userId: "rohan789",
                displayName: "Rohan",
                unread: 0,
            },
        ],
        messages: [
            {
                messageId: "msg1",
                senderId: "alice123",
                timestamp: "2023-11-11T10:00:00",
                content: "Hi, Rohan! How's your day going?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                },
            },
            {
                messageId: "msg2",
                senderId: "rohan789",
                timestamp: "2023-11-11T10:05:00",
                content: "Hey, Alice! It's going well, thanks. How about you?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                    heart: 1,
                },
            },
            {
                messageId: "msg3",
                senderId: "alice123",
                timestamp: "2023-11-11T10:10:00",
                content: "I'm doing good too. Any plans for the weekend?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 2,
                },
            },
            {
                messageId: "msg4",
                senderId: "rohan789",
                timestamp: "2023-11-11T10:15:00",
                content: "Not sure yet. Maybe catch a movie. How about you?",
                readStatus: "Seen",
                reactions: {
                    thumbsUp: 1,
                },
            },
            {
                messageId: "msg5",
                senderId: "alice123",
                timestamp: "2023-11-11T10:20:00",
                content:
                    "That sounds fun. I might go for a hike. Enjoy the movie!",
                readStatus: "Delivered",
                reactions: {
                    thumbsUp: 1,
                    heart: 1,
                },
            },
        ],
    },
];

const ChatPage = () => {
    const [selectedChatIdx, setselectedChatIdx] = useState(-1);
    const [isSideBarHidden, setisSideBarHidden] = useState(true);

    return (
        <ProtectedRoute>
            <div className="bg-gray-900 min-h-screen flex">
                <aside
                    className={`${
                        isSideBarHidden ? "hidden  w-2/6" : "block w-5/6"
                    } md:block bg-gray-700 m-2 rounded-lg shadow-sm`}
                >
                    <Channels
                        data={dummyData}
                        setselectedChatIdx={setselectedChatIdx}
                        selectedChatIdx={selectedChatIdx}
                        setisSideBarHidden={setisSideBarHidden}
                    />
                </aside>

                {
                    <div className="md:hidden flex items-center justify-between p-4 bg-gray-500 m-2" onClick={() => setisSideBarHidden((prev) => !prev)}>
                        <button
                            className="text-2xl"
                        >
                            &#9776;
                        </button>
                    </div>
                }

                <main
                    className={`${
                        isSideBarHidden ? "w-full" : "hidden"
                    } max-h-screen p-4`}
                >
                    {selectedChatIdx == -1 && <PlaceHolderChat />}
                    {selectedChatIdx != -1 && (
                        <ChatWindow chat={dummyData[selectedChatIdx]} />
                    )}
                </main>
            </div>
        </ProtectedRoute>
    );
};

export default ChatPage;
