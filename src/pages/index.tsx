import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="bg-blue-200 h-screen flex items-center justify-center">
                <div className="bg-white p-4 rounded shadow-md">
                    <h1 className="text-3xl font-bold">
                        Welcome to Next.js with Tailwind CSS
                    </h1>
                    <p className="text-gray-600">This is a simple test.</p>
                </div>
            </div>
        </>
    );
}
