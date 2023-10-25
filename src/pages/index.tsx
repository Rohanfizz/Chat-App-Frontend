import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/ui/Layout";
import MainPage from "@/components/MainPage/MainPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <MainPage/>
        </>
    );
}
