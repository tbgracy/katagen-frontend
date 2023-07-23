import Generator from "../components/GeneratorSection"
import Closet from "../components/ClosetSection"
import Navbar from "../components/Navbar"
import { useMemo, useState } from "react";
import UserService from "../services/userServices";
import { LoginContext } from "../components/context";

export default function MainPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(UserService.isLoggedIn());
    const toggleLogin = () => setIsLoggedIn(!isLoggedIn);
    const contextValue = useMemo(
        () => ({ isLoggedIn, toggleLogin }), [isLoggedIn]
    );

    return <>
        <LoginContext.Provider value={contextValue}>
            <Navbar />
            <main>
                <Closet />
                <Generator />
            </main>
        </LoginContext.Provider>
    </>
}