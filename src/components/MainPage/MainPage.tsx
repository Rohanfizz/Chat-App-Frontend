import React,{useState} from "react";
import LoginForm from "./LoginForm";
import InfoBox from "./InfoBox";
import SignUpForm from "./SignUpForm";

const MainPage = (props: any) => {

    return (
        <div className=" bg-gray-100 min-h-screen flex flex-col md:flex-row">
            <div className="w-full md:w-4/7 bg-red-500 md:min-h-screen">
                <InfoBox/>
            </div>  
            <div className="w-full md:w-3/7 bg-blue-500 md:min-h-screen">
                <LoginForm />
                
            </div>
        </div>
    );
};

export default MainPage;
