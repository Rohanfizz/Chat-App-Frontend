import { atom, selector } from "recoil";

export const userAtom = atom({
    key: "userAtom",
    default: {
        userId: "alice123", // User information
        token: "abcd",
    },
});
