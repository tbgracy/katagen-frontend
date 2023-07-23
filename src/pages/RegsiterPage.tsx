import { SyntheticEvent, useRef, useState } from "react"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import UserService from "../services/userServices";
import { ClipLoader } from "react-spinners";

export default function RegisterPage() {
    const [isLoading, setIsLoading] = useState(false);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const passwordConfirm = useRef<HTMLInputElement>(null);

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        if (password.current?.value !== passwordConfirm.current?.value) {
            alert('Les mots de passes doivent être les mêmes');
            return;
        }
        setIsLoading(true);
        const result = UserService.loginOrRegister(
            username.current!.value,
            password.current!.value,
            'register',
        );

        result.then((value) => {
            setIsLoading(false);
            if (value) {
                alert('Inscription effectué avec succès');
                window.location.href = '/login';
            }
        });
    }

    return <>
        <Navbar />
        <main>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h3>Inscription</h3>
                <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input ref={username} type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input ref={password} type="password" name="password" id="password" />
                </div>
                <div>
                    <label htmlFor="passwordConfirm">Confirmer le mot de passe</label>
                    <input ref={passwordConfirm} type="password" name="passwordConfirm" id="passwordConfirm" />
                </div>
                {
                    isLoading ? <ClipLoader /> : <Button label={"S'inscrire"} />
                }
            </form>
        </main>
    </>
}