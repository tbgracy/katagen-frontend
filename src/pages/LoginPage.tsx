import { SyntheticEvent, useRef, useState } from "react"
import Button from "../components/Button"
import Navbar from "../components/Navbar"
import UserService from "../services/userServices"
import { ClipLoader } from "react-spinners";

export default function LoginPage() {
    const [isLoading, setIsLoading] = useState(false);

    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleSubmit(e: SyntheticEvent) {
        e.preventDefault();
        setIsLoading(true);
        const result = UserService.loginOrRegister(
            username.current!.value,
            password.current!.value,
            'login',
        );

        result.then((value) => {
            setIsLoading(false);
            if (value) {
                alert('Connecté');
                window.location.href = '/';
            } else {
                alert('Connexion échoué,veuillez vérifier votre connexion internet ou vos identifiants.');
            }
        });
    }

    return <>
        <Navbar />
        <main>
            <form className="auth-form" onSubmit={handleSubmit}>
                <h3>Connexion</h3>
                <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input ref={username} type="text" name="username" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input ref={password} type="password" name="password" id="password" />
                </div>
                {
                    isLoading ? <ClipLoader /> : <Button label={"Se connecter"} />
                }
            </form>
        </main>
    </>
}