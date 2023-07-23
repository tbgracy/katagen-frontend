import { useContext } from "react";
import UserService from "../../services/userServices";
import Button from "../Button";
import { LoginContext } from "../context";

export default function Navbar() {
    const { isLoggedIn, toggleLogin } = useContext(LoginContext);

    function goToLoginPage() {
        document.location.href = '/login';
    }

    function goToRegisterPage() {
        document.location.href = '/register';
    }

    function logout() {
        UserService.logout();
        document.location.href = '/login';
        toggleLogin();
    }

    return <nav>
        <h1 onClick={() => document.location.href = '/'}>Katagen</h1>
        {isLoggedIn
            ? <Button label={'Se déconnecter'} handleClick={logout} />
            : <div>
                <Button label={'S\'inscrire'} handleClick={goToRegisterPage} />
                <Button label={'Se connecter'} handleClick={goToLoginPage} />
            </div>
        }
    </nav>
}