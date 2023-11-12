import { userAtom } from "@/recoil/auth";
import { useRecoilValue } from "recoil";

export const useUserId = ():string=>{
    const {userId:myUserId} = useRecoilValue(userAtom);
    return myUserId;
}