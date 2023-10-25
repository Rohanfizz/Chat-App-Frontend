import Channels from "@/components/ChatPage/Channels";
import Chat from "@/components/ChatPage/Chat";
import ProtectedRoute from "@/components/ui/ProtectedRoute";
import { userAtom } from "@/recoil/auth";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";

let dummyData = {
    chatId: "chat123", // Unique identifier for the chat
    chatName: "Alice and Bob", // Display name for the chat

    participants: [
        {
            userId: "alice123",
            displayName: "Alice",
            profileImage: "https://robohash.org/alice",
            unread: 10,
        },
        {
            userId: "bob456",
            displayName: "Bob",
            profileImage: "https://robohash.org/bob",
            unread: 2,
        },
    ],

    messages: [
        {
            messageId: "msg1",
            senderId: "alice123",
            timestamp: "2023-10-10T10:30:00",
            content: "Hi, Bob! How are you?",
            readBy: ["bob456"],
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
            readBy: ["alice123"],
            reactions: {
                thumbsUp: 3,
            },
        },
        {
            messageId: "msg3",
            senderId: "alice123",
            timestamp: "2023-10-10T10:40:00",
            content: "I'm doing well too. What have you been up to?",
            readBy: [],
            reactions: {
                thumbsUp: 1,
            },
        },
        {
            messageId: "msg4",
            senderId: "bob456",
            timestamp: "2023-10-10T10:45:00",
            content: "Just working on some projects. How's your day going?",
            readBy: ["alice123"],
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
            readBy: ["bob456"],
            reactions: {
                thumbsUp: 1,
                heart: 1,
            },
        },
        // Add more messages as needed...
    ],
};

const ChatPage = () => {
    const [actualUser, setuserAtom] = useRecoilState(userAtom);
    useEffect(() => {
        console.log(actualUser);
    }, []);

    return (
        <ProtectedRoute>
            <div className="bg-gray-900 min-h-screen flex">
                {/* Sidebar for desktop */}
                <aside className="hidden md:block w-2/6 bg-gray-700 m-2 rounded-lg shadow-sm">
                    <Channels data={dummyData.participants} />
                </aside>

                {/* Mobile navigation (e.g., a hamburger menu) */}
                <div className="md:hidden flex items-center justify-between p-4 bg-gray-300 m-2">
                    <button className="text-2xl">&#9776;</button>
                    {/* Add any mobile-specific navigation or actions here */}
                </div>

                {/* Main content area */}
                <main className="w-full p-4 m-2 border-2 rounded">
                    {/* Add your main content here */}
                    <Chat />
                </main>
            </div>
        </ProtectedRoute>
    );
};

export default ChatPage;
