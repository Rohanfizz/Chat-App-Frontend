import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { userAtom } from "@/recoil/auth";
import { useRouter } from "next/router";
const useProtector = () => {
    const [actualUser, setuserAtom] = useRecoilState(userAtom);
    const router = useRouter();
    useEffect(() => {
        const fetcher = async () => {
            // const userToken: any =
            //     typeof window != undefined
            //         ? localStorage.getItem("userToken")
            //         : null;
            // const token = JSON.parse(userToken);
            const user: any = { name: "Rohan", token: "asdasda" };

            return () => {
                if (user != null && user?.token != null) {
                    setuserAtom(user);
                } else {
                    router.push("/");
                }
            };
        };
        if (typeof window !== undefined) fetcher();
    }, []);
    return { actualUser };
};
export default useProtector;
