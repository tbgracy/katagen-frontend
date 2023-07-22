import { useEffect } from "react"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import UserService from "../services/userServices";

export default function RegisterPage() {
    useEffect(() => {
        UserService.loginOrRegister('gracy', 'demo1234', "register");
    }, []);
    return <>
        <Navbar />
        <main>
            <form className="auth-form" action="">
                <label htmlFor="username">Nom d'utilisateur</label>
                <input type="text" name="username" id="username" />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" id="password" />
                <label htmlFor="passwordConfirm">Confirmer le mot de passe</label>
                <input type="password" name="passwordConfirm" id="passwordConfirm" />
                <Button label={"S'inscrire"} />
            </form>
        </main>
    </>
}