import { createContext } from "react";
import { Clothing } from "../types/clothing";

export const LoginContext = createContext({
    isLoggedIn: false,
    toggleLogin: () => {},
});

export const ClotheContext = createContext({
    clothes: [] as Clothing[],
    refreshClothingList: () => { },
});